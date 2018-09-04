/**
 * 考察点：
 * 1.generator/yield、async/await的不同点
 * 2.(题目本质)TJ的co函数的实现
 */
const wrapAsync = (generatorFn) => {
  return (...param) => {
    return new Promise((resolve, reject) => {
      let generator = generatorFn(...param)

      onFulfill()

      function onFulfill(res) {
        let req
        try {
          req = generator.next(res) // res是promise被解析的结果，还给主线程；req包含了主线程传进来的promise/最终结果
        } catch (e) {
          reject(e) // 主线程抛出错误的情况
        }

        if (!req.done) {
          // 主线程传递一个promise，需要解析成结果
          req.value.then(onFulfill)
        } else {
          // done为true时表示主线程把最终结果传进来了，即最后的return一句
          resolve(req.value)
        }
      }
    })
  }
}

// 测试代码
const getData = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('My name is ' + name)
    }, 100) // 模拟异步获取数据
  })
}

const run = wrapAsync(function * (lastName) {
  const data1 = yield getData('Jerry ' + lastName)
  const data2 = yield getData('Lucy ' + lastName)
  return [data1, data2]
})

run('Green').then((val) => {
  console.log(val) // => [ 'My name is Jerry Green', 'My name is Lucy Green' ]
})
