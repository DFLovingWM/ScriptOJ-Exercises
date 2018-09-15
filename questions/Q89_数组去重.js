/**
 * 方法1：利用Set的元素不重复的特点
 */
var unique = (arr) => Array.from(new Set(arr))
var unique = arr => [...new Set(arr)]

/**
 * 方法2：对于每个元素，只取第一次出现/最后一次出现的那个（利用indexOf）
 */
var unique = (arr) => arr.filter((item, index, array) => array.indexOf(item) === index)
var unique = arr => arr.filter((item, index, array) => array.lastIndexOf(item) === index)

exports.unique = unique
