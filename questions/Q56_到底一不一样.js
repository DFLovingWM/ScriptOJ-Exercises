/**
 * 其实是考察对Object.is的一个polyfill（题目不允许直接用Object.is）
 * 
 * 知识点：
 * Object.is与===的两个区别：
 * (1)+0 === -0返回true，Object.is(+0, -0)返回false
 * (2)对于NaN：NaN === NaN返回false，Object.is(NaN, NaN)返回true
 */
const is = (x, y) => {
  if (Number.isNaN(x) && Number.isNaN(y)) { // 解决NaN
    return true
  }
  if (x === 0 && y == 0) {
    return 1 / x === 1 / y
  }
  return x === y // 其余情况同===
}
