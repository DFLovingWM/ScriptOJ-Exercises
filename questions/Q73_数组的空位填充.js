/**
 * 数组的“占位符”不等于undefined或null，而是没有对应的下标(key)
 * 可以使用hasOwnProperty来判断数组元素是否占位符
 */
var fillSlotsWith = (arr, value) => {
  for (let i = 0; i < arr.length; ++i) {
    if (!arr.hasOwnProperty(i)) {
      Object.defineProperty(arr, i, {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }
  }
}

var fillEmpty = arr => {
  fillSlotsWith(arr, 'Hello')
}

const a = [, , null, undefined, 'OK', ,]
fillEmpty(a)
console.log(a)
// a 变成 ['Hello', 'Hello', null, undefined, 'OK', 'Hello']