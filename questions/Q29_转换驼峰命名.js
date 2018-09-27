/**
 * 考察String.prototype.replace的第二个参数为function时的用法
 * （因为要转大写，如果第二个参数还是字符串的话没办法达到目的）
 */
var toCamelCaseVar = (variableName) => {
  const pattern = /(_+)([a-zA-Z])/g
  return variableName.replace(pattern, (match, g1, g2, offset, string) => {
    if (offset === 0) {
      return match
    }
    return g2.toUpperCase()
  })
}

exports.toCamelCaseVar = toCamelCaseVar
