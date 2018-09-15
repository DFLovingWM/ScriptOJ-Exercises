/**
 * 方法1：
 * 将s1所有元素都加到s2中去
 * 如果它们相同的话，s2还是会保持不变（通过size来判断）
 * 如果它们不相同，s2的数量会变多
 */
var isSameSet = (s1, s2) => {
  if (s1.size !== s2.size) return false
  const oldSize = s2.size
  const arr1 = Array.from(s1)
  for (const element of arr1) {
    s2.add(element)
    if (s2.size > oldSize) {
      return false
    }
  }
  return true
}

/**
 * 方法2：
 * 遍历一个集合中的每个元素，看另一个是否has这个元素
 * 如果都has，就相等；否则不等
 */
var isSameSet = (s1, s2) => {
  if (s1.size !== s2.size) return false
  for (const element of Array.from(s1)) {
    if (!s2.has(element)) {
      return false
    }
  }
  return true
}

exports.isSameSet = isSameSet
