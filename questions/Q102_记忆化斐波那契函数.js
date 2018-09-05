/**
 * 题目的两个要求及其对策：
 * 1.“不要超时”：记忆化本来就是防止超时
 * 2.“不要添加额外全局变量”：记忆化数组/对象，可以添加为函数的属性
 */

const fibonacci = (n) => {
  if (!fibonacci._answers) {
    fibonacci._answers = [0, 1, 1, 2]
  }
  if (!fibonacci._answers[n]) {
    fibonacci._answers[n] = fibonacci(n - 2) + fibonacci(n - 1)
  }
  return fibonacci._answers[n]
}

exports.fibonacci = fibonacci