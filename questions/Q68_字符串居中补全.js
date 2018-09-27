/**
 * 考察ES6：padStart/padEnd的用法
 * str.padStart(sumLength, padStr)
 * str.padEnd(sumLength, padStr)
 */
const centerPad = (str, len, pad) => {
  let leftCount = Math.floor((len - str.length) / 2)
  let rightCount = Math.ceil((len - str.length) / 2)
  str = str.padStart(leftCount + str.length, pad)
  str = str.padEnd(rightCount + str.length, pad)
  return str
}

// 测试代码：
// [
//   centerPad('Hello', 13, 'abc'),
//   centerPad('Gook Luck!', 30, '*~'),
//   centerPad('Hello', 10, 'abc'),
//   centerPad('Hello', 1, 'abc')
// ].forEach(item => console.log(item))
