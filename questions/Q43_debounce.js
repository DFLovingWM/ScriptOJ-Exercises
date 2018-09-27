/**
 * 使用setTimeout实现延时，高频调用时取最后一个定时器
 * 不过有一个小问题，就是setTimeout是异步的，调用结果不能作为返回值(只能通过回调返还出去)
 */
var debounce = (fn, duration) => {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      let result = Reflect.apply(fn, this, args)
    }, duration)
  }
}
