/**
 * 考察对tagged template函数的使用
 * @param {array} literals 常量字符子串数组
 * @param {array} values 变量数组
 */
const highlight = (literals, ...values) => {
  let result = ''
  for (let i = 0, length = values.length; i < length; ++i) {
    result += literals[i] + `<span style="color: red;">${values[i]}</span>`
  }
  return result
}
