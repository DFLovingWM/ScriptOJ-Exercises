/**
 * 题目要求在严格模式下也可以运行，那就不能使用caller对象了
 * 看评论才知道，可以使用Error的堆栈信息来取得调用where的上一个函数(厉害了。。)
 */
const where = () => {
  const pattern = /at (\S+)/g
  const errorStack = new Error().stack // 关键
  let result
  let funcName, lastFuncName
  for ( ; true; ) {
    result = pattern.exec(errorStack)
    funcName = result[1]
    if (lastFuncName === 'where') {
      break
    }
    lastFuncName = funcName
  }
  return funcName
  // console.log(funcName)
}

// function main () {
//   function main2 () {
//     where()
//   }
//   main2()
// }
// main()
