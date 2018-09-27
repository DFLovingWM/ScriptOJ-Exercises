/**
 * 解法1：返回一个新函数
 */
var spy = fn => {
  let newFn = function (...args) {
    let result = fn.call(this, ...args)
    newFn.calls.push({
      args,
      result
    })
    return result
  }
  newFn.calls = []
  return newFn
}

/**
 * 解法2：Proxy
 */
var spy = (fn) => {
  let calls = []
  return new Proxy(fn, {
    apply (target, context, args) {
      let result = Reflect.apply(target, context, args)
      calls.push({
        args,
        result
      })
      return result
    },
    get (target, key) {
      if (key === 'calls') {
        return calls
      } else {
        return Reflect.get(target, key)
      }
    }
  })
}

exports.spy = spy

