/**
 * 解法1：统计每个字母出现的次数，看两个统计是否相等
 */
var isAnagram = (str1, str2) => {
  const obj1 = calculate(str1)
  const obj2 = calculate(str2)
  return isEqual(obj1, obj2)
}

function calculate(str) {
  const obj = {}
  for (const char of str) {
    if (!Reflect.has(obj, char)) {
      obj[char] = 0
    }
    ++obj[char]
  }
  return obj
}

function isEqual(obj1, obj2) {
  const entries1 = Object.entries(obj1)
  const entries2 = Object.entries(obj2)
  if (entries1.length !== entries2.length) return false
  for (const [key, value1] of entries1) {
    const value2 = obj2[key]
    if (value1 !== value2) {
      return false
    }
  }
  return true
}

/**
 * 解法2：将字符串排序，然后看两者是否相等
 */
var isAnagram = (s1, s2) => getSortedString(s1) === getSortedString(s2)

function getSortedString(str) {
  return str.split('').sort().join(',')
}


// 测试代码
// console.log( isAnagram("anagram", "nagaram") ) // => return true.
// console.log( isAnagram("rat", "car") ) // => return false.