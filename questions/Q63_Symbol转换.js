/**
 * 考点：
 * 遍历对象的symbol key，使用Object.getOwnPropertySymbol，或Reflect.ownKeys
 */
var convertSymbolToNormalStr = (obj) => {
  let result = {}
  for (let key of Reflect.ownKeys(obj)) {
    let value = obj[key]
    // 如果key是Symbol类型，则转换key
    if (typeof key === 'symbol') {
      // key = key.toString().match(/\((\w+)\)/)[1]
      key = key.toString().slice(7, -1)
    }
    // （题目的小坑...）如果value是个纯对象，which也需要递归的情况
    if (typeof value === 'object' && !Array.isArray(value)) {
      value = convertSymbolToNormalStr(value)
    }
    result[key] = value
  }
  return result
}

exports.convertSymbolToNormalStr = convertSymbolToNormalStr
