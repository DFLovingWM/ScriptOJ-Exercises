/**
 * 解题思路：
 * 1.async函数调用后返回一个Promise
 * 2.延迟发生，使用setTimeout，在其到时回调中resolve出去(回到主线程)；延迟的这段时间里啥事也不用干
 */

// 普通版本
async function pause (time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve()
    }, time)
  })
}

// 一句话版本
const pause = async time => new Promise(resolve => setTimeout(_ => resolve(), time))

// 测试代码
async function run () {
  console.log('Hello')
  await pause(1000) // 续一秒
  console.log('World') // 一秒以后继续运行
}
run()
