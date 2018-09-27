/**
 * 考察：
 * 1.generator/yield、async/await的不同点
 * 2.(题目本质)TJ的co函数的实现
 */

/**
 * 因为主线程的用法是：
 * const data1 = yield getData() // 其中getData返回一个Promise
 * 所以我们的工作，是获取到等号右边的Promise，将它fulfill，然后把结果通过next传参，还给主线程，也就是等号左边
 *
 * 考虑到把每一个yield的Promise都这样干，所以理论上可以使用循环next或递归：
 * (1)然而循环是行不通的，因为Promise.then是异步的，所以等到可以取结果的时候，主线程已经执行完毕，所以只能取到undefined
 *    而对应地，在async/await中，每一个被await的Promise也是顺序执行的（考虑实现await Promise.all？）
 * (2)所以，只能使用递归。
 */
var wrapAsync = (generatorFn) => {
  return (...param) => {
    return new Promise((resolve, reject) => {
      let generator = generatorFn(...param) // 说明：对Generator的第一次传参，是在Generator Function被调用时

      onFulfill(null) // 该参数无用，不用管（因为对Generator第一次next时传的参数无用）

      /**
       * 该函数每执行一次，都会从主线程中获取一个Promise，将它fulfill
       */
      function onFulfill(res) {
        let req
        try {
          // 参数的意义(前提是熟悉Generator的语法
          // res是Promise被fulfill的结果，用next还给主线程；同时获取下一个Promise，即req.value
          req = generator.next(res)
        } catch (e) {
          reject(e) // 主线程抛出错误的情况：主线程出错一句下面的代码都不执行了，直接返回一个被reject的Promise，并附带上错误信息
        }

        if (!req.done) { // 即还没结束，则继续获取下一个Promise
          req.value.then(onFulfill) // 这句是关键：由于Promise.then是异步的，故使用递归将每一个Promise嵌套起来，这样下一个Promise才能拿到上一个Promise的结果
        } else { // 即主线程return一句，这时候将结果封装成Promise最终返回
          resolve(req.value)
        }
      }
    })
  }
}

/**
 * 行不通的方法：循环next
 */
var wrapAsync1 = generatorFn => {
  return function (...args) {
    debugger
    let generator = generatorFn(...args)
    let res
    let result
    while (!(res = generator.next(result)).done) {
      if (isPromise(res.value)) {
        res.value.then(val => result = val)
      } else {
        result = res.value
      }
    }
    return Promise.resolve(res.value)
  }

  function isPromise (maybePromise) {
    return typeof maybePromise.then === 'function'
  }
}

/**
 * 测试代码
 */
var getData = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('My name is ' + name)
    }, 100) // 模拟异步获取数据
  })
}

var run = wrapAsync(function * (lastName) {
  const data1 = yield getData('Jerry ' + lastName)
  const data2 = yield getData('Lucy ' + lastName)
  return [data1, data2]
})

run('Green')
  .then((val) => {
    console.log(val) // => [ 'My name is Jerry Green', 'My name is Lucy Green' ]
  })
  .catch((error) => {
    console.error(error)
  })
