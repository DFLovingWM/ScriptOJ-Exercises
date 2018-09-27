// 方法1：使用keys（因为实际上是返回由下标组成的数组）
var arrWithoutLoop = (length) => Array.from(new Array(length).keys())

// 方法2：Array.from的第二个参数，相当于map的参数
var arrWithoutLoop = (length) => Array.from(new Array(length), (undefinedItem, index) => index)

// 方法3：不用循环，就递归咯
var arrWithoutLoop = (length, i = 0, resultArr = []) => {
  if (length === 0) {
    return []
  }

  if (i >= length) {
    return
  }
  resultArr.push(i)
  arrWithoutLoop(length, i + 1, resultArr)
  return resultArr
}

console.log( arrWithoutLoop(0) )
