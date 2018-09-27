var drive = console.log.bind(console)

/**
 * 方法1：
 * 每个异步任务执行结束后，判断一下是否所有任务都结束了
 */
var driveCustomers = (...fns) => {
  let names = []
  for (const fn of fns) {
    fn((name) => {
      names.push(name) // 执行本任务
      if (names.length === fns.length) { // 判断是否所有任务都结束了
        drive(names)
      }
    })
  }
}

/**
 * 方法2：利用Promise + async/await来控制异步(并发)流程
 * 每一个人相当于一个异步任务，最后开车的步骤需要在每个异步任务都完成了之后才进行，所以这其实是一种异步流程控制。
 * 所以方法1是不合理的，因为“是否要开车”这个任务，是独立于任何一个异步任务之外的，按理来说不应该由每一个都进行判断。
 * 故要借助Promise.all来对单个任务、全局任务解耦。
 */
var driveCustomers = async (...fns) => {
  let names = [] // 保存结果，对于每个异步任务来说是"全局"变量
  let promises = fns.map(fn => {
    return new Promise((resolve, reject) => {
      fn((name) => {
        names.push(name)
        resolve() // 这里调用resolve，表明本任务结束(不必传参)
      })
    })
  })
  await Promise.all(promises)
  drive(names) // 到这一行时，说明所有任务已经结束，这时候可以"开车"了
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
