/**
 * 方法0：
 * 本质是先求出全部结果（不明智之处）
 * 然后自行构造迭代器/使用yield构造生成器，每次返回一个
 * 做不到懒惰执行
 */
function flatten2 (arr) {
  // 递归函数
  function flatten (arr) {
    let tmpResult = []
    for (const x of arr) {
      if (Array.isArray(x)) {
        tmpResult.push(...flatten(x))
      } else {
        tmpResult.push(x)
      }
    }
    return tmpResult
  }

  let resultArr = flatten(arr)
  let index = 0
  let length = resultArr.length

  return {
    next () {
      let done = index >= length
      let value = resultArr[index]
      ++index
      return {
        done,
        value
      }
    }
  }
}

/**
 * 方法1：
 * 构造迭代器，可模拟“懒惰执行”（模拟的关键：每次取数组的“第一个”元素同时将其删掉，然后就返回）
 * 但不能像真正的生成器那样“断点续传”
 * 
 * 参考：https://www.jianshu.com/p/b1fb3434e1f5，【迭代器实现】那一部分
 */
function flatten2 (arr) {
  arr = JSON.parse(JSON.stringify(arr)) // 对arr进行深拷贝，再传进head函数执行(因为head函数是mutating的)
  const EMPTY_VALUE = undefined // 表示空值。该值根据场景变化。比如题目中只有数组，那么undefined就可以代表空结点

  function head(array) {
    if (!array.length) {
      return EMPTY_VALUE
    }
    const headElement = array[0]
    if (!Array.isArray(headElement)) {
      // 如果是个数字，将其返回，同时删掉该结点
      return array.shift()
    } else {
      // 如果是个数组
      const nextValueFromSomeChildNode = head(headElement)
      if (nextValueFromSomeChildNode === EMPTY_VALUE) {
        array.shift() // 剪枝
        return head(array)  // 这个子节点不行，继续其兄弟结点
      } else {
        return nextValueFromSomeChildNode
      }
    }
  }

  return {
    next () {
      const headElement = head(arr)
      return {
        done: headElement === EMPTY_VALUE,
        value: headElement
      }
    }
  }
}

/**
 * 方法2：
 * 使用yield直接返回生成器，可懒惰执行
 */
function * flatten2 (arr) {
  for (const element of arr) {
    if (Array.isArray(element)) {
      yield * flatten2(element) // 递归的yield，称为“生成器委托”
    } else {
      yield element
    }
  }
}


exports.flatten2 = flatten2
