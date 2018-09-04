/**
 * 我的思路：
 * 1.compose只是把function存起来
 * 2.最终传入初始参数时，才真正开始一个个执行（需要注意是逆序的）
 */

// 一般版本
const compose = function (...operations) {
  return function (...initialArgs) {
    return operations.reverse().reduce((result, operation) => operation(result), ...initialArgs)
  }
}

// 强行缩减版本
const compose = (...operations) => (...value) => operations.reverse().reduce((result, operation) => operation(result), ...value)

// 测试代码
const add1 = (x) => x + 1
const mul3 = (x) => x * 3
const div2 = (x) => x / 2
const operate = compose(div2, mul3, add1, add1)
console.log( operate(0) ) // => 相当于 div2(mul3(add1(add1(0))))
console.log( operate(2) ) // => 相当于 div2(mul3(add1(add1(2))))