/**
 * 一说到"计数器"就马上想到[闭包]，
 * 而且题目还限(提)制(示)说“不要使用额外的全局变量”。
 */
var plusFor = (name) => {
  var counter = 0
  return function () {
    return `为${name}+${++counter}s`
  }
}
