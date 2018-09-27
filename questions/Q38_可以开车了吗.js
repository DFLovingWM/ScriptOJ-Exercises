var drive = console.log.bind(console)

/**
 * 每个异步任务都判断是否该结束了
 *（该题目也许只有这种方法了，但拉下去有思考部分）
 */
var driveCustomers = (...fns) => {
  let names = []
  for (const fn of fns) {
    fn((name) => {
      names.push(name)
      if (names.length === fns.length) {
        drive(names)
      }
    })
  }
}

/**
 * 测试代码
 */
var jk = (callback) => {
  setTimeout(() => {
    callback('JK')
  }, 10) // 上车时间不一定
}

var cl = (callback) => {
  setTimeout(() => {
    callback('CL')
  }, 3) // 上车时间不一定
}

var bb = (callback) => {
  setTimeout(() => {
    callback('BB')
  }, 5) // 上车时间不一定
}

driveCustomers(jk, cl, bb)


// =================================  以下是思(胡)考(扯)部分  ==================================

/**
 * 思考：利用Promise + async/await来控制异步(并发)流程
 * 每一个人相当于一个异步任务，最后开车的步骤需要在每个异步任务都完成了之后才进行，
 * 所以这其实是一种异步流程控制。
 * 这样想的话，上面的方法是不合理的，因为“是否要开车”这个任务，是独立于任何一个异步任务之外的，按理来说不应该由每一个都进行判断(低耦合)。
 * 
 * 然而这种方法是行不通的，因为并发的Promise.all返回的是一个数组，分不清谁先谁后。所以是写着玩玩的，为了联系一下Promise的知识。
 */
var driveCustomers = async (...fns) => {
  let result = await Promise.all(fns.map(callback2Promise))
  result = result.sort((a, b) => a.time - b.time).map(person => person.name)
  drive(result)
}
// 将callback风格的函数转为Promise
function callback2Promise (fn) {
  return new Promise((resolve, reject) => {
    fn(resolve)
  })
}

/**
 * 测试代码
 */
var jk = (callback) => {
  setTimeout((time, name) => {
    callback({
      time,
      name
    })
  }, 10, 10, 'JK') // 上车时间不一定
}

var cl = (callback) => {
  setTimeout((time, name) => {
    callback({
      time,
      name
    })
  }, 3, 3, 'CL') // 上车时间不一定
}

var bb = (callback) => {
  setTimeout((time, name) => {
    callback({
      time,
      name
    })
  }, 5, 5, 'BB') // 上车时间不一定
}

driveCustomers(jk, cl, bb)

