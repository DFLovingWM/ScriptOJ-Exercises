/**
 * 看来Rambda库渐渐进入视野(R.get)
 * 是时候学一学Rambda的函数甚至源码了...
 */

const safeGet = (data, path) => {
  let result = data
  for (const prop of path.split('.')) {
    result = result[prop]
    if (result === undefined) {
      // 找不到的时候，停止继续查找，并返回undefined
      return undefined
    }
  }
  return result
}

exports.safeGet = safeGet