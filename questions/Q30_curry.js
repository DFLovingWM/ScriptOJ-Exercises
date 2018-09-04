/**
 * 主要逻辑：
 * 1.累计参数不够时，返回一个新函数，并且该函数保存有一定的参数(涉及到递归)
 * 2.累计参数足够时，将目标函数执行，返回结果
 * 
 * 涉及知识点：
 * 1.用闭包模拟bind（因为这里需要比较实参与形参的个数，而单纯的bind不能知道已经绑定了多少个参数，所以需要手动模拟bind）
 * 2.递归
 * 3.Function.prototype.length（函数中无默认值的形参的数量）
 */
var curry = function (fn, args = []) {
  return function (...newArgs) {
    var currentArgs = args.concat(newArgs)
    if (currentArgs.length < fn.length) {
      return curry(fn, currentArgs)    // 保存参数并返回新函数
    } else {
      return fn(...currentArgs)  // 参数够了，就执行目标函数，并返回结果
    }
  }
}


// 测试代码1
var add = curry((a, b) => a + b)
var add1 = add(1)
console.log(add1(1)) // => 2
console.log(add1(2)) // => 3
console.log(add1(3)) // => 4

// 测试代码2
var add_triple = curry((a,b,c)=>a+b+c)
console.log( add_triple(1,2,3) )
console.log( add_triple(1)(2,3) )
console.log( add_triple(1)(2)(3) )
