/**
 * 思路：
 * exchange后，ab的方法、原型都互换了，
 * 因为class方法是定义在原型上的，
 * 所以只要交换一下两个对象的prototype就好了。
 * 其实题目提示得也很明显。
 * 
 * 注意：题目说不能用__proto__，那就用ES6的setPrototypeOf与getPrototypeOf
 */
var exchange = (a, b) => {
  let aPrototype = Object.getPrototypeOf(a)
  let bPrototype = Object.getPrototypeOf(b)
  Object.setPrototypeOf(a, bPrototype)
  Object.setPrototypeOf(b, aPrototype)
}

exports.exchange = exchange
