/**
 * 1.1 递归：“全局”变量
 * 特点：
 * 1.需要额外函数进行递归
 * 2.递归无返回值
 */
var flatten2 = (arr) => {
  let result = [] // 全局数组

  const dfs = function (x) {
    if (!Array.isArray(x)) {
      result.push(x)
    } else {
      x.forEach(dfs)
    }
  }
  dfs(arr) // 开始遍历

  return result
}

/**
 * 递归思路1：
 * 对于一个数组，flatten返回一个新的扁平的数组。所以算法为：
 * (1)遍历元素：
 *  (1.1)如果元素为值，直接push该值
 *  (1.2)如果元素为数组，对该元素进行递归，然后将结果打散成N个值，然后push进来
 * (2)返回数组
 */
var flatten = (arr) => {
  let tmpResult = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      tmpResult.push(...flatten(item))
    } else {
      tmpResult.push(item)
    }
  })
  return tmpResult
}

/**
 * 2. 小技巧(只适用于本题)：转化为字符串，再转回来
 */
var flatten = (arr) => {
  if (!arr.length) return []
  return arr.join().split(',').map(Number)
}

/**
 * 递归思路2：
 * 对于一个node(不论类型)，flatten总能返回一个新的扁平的数组。所以算法为：
 * (1.1)如果node为值，则返回[node]
 * (1.2)如果node为Array，则遍历元素进行递归，并将返回的每一个数组都合并起来(用push(...arr)或concat(arr))
 */
var flatten = (node) => {
  if (!Array.isArray(node)) {
    return [node]
  }
  let result = []
  for (const n of node) {
    result.push(...flatten(n))
  }
  return result
}

exports.flatten = flatten2
