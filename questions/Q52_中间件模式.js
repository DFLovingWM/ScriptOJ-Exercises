/**
 * 实现方式1：for循环
 * 全局for循环控制流程，
 * 局部作出影响。
 */
var app = {
  middlewares: [], // 保存中间件函数
  /**
   * 目标函数：所有中间件执行完毕后，才执行
   * @param {any} ctx 当前数据
   */
  callback (ctx) {
    console.log(ctx)
  },
  /**
   * 注册一个中间件
  * @param {Function} fn 中间件函数
   */
  use (fn) {
    this.middlewares.push(fn)
  },
  /**
   * (从头开始)启动
   * @param {any} ctx 初始数据
   */
  go (ctx) {
    let currentIndex = 0
    let next = () => { // 关键：next函数只是一个索引增加的操作
      ++currentIndex
    }
    let fns = this.middlewares.concat(this.callback) // 把目标函数当作最后的中间件
    for (let i = 0; i < fns.length; ++i) {
      if (i === currentIndex) { // 说明上一个中间件调用了next，则执行该中间件
        fns[i].call(this, ctx, next)
      } else { // 否则中断执行中间件
        break
      }
    }
  }
}

/**
 * 实现方式2(更好理解)：next函数决定是否执行下一个
 * 上一个中间件直接决定是否执行下一个中间件，
 * 外部只启动第一个中间件。
 */
var app = {
  middlewares: [], // 保存中间件函数
  /**
   * 目标函数：所有中间件执行完毕后，才执行
   * @param {any} ctx 当前数据
   */
  callback (ctx) {
    console.log(ctx)
  },
  /**
   * 注册一个中间件
  * @param {Function} fn 中间件函数
   */
  use (fn) {
    this.middlewares.push(fn)
  },
  /**
   * (从头开始)启动
   * @param {any} ctx 初始数据
   */
  go (ctx) {
    let fns = [...this.middlewares, this.callback]
    let executeAt = (index) => {
      fns[index].call(this, ctx, index === fns.length ? undefined : () => {
        executeAt(index + 1)
      })
    }
    executeAt(0)
  }
}

/**
 * 实现方式3(思路同2)：next函数决定执行，参考《深入浅出Node》
 * 该方法使用shift，每次执行完中间件同时会删除
 */
var app = {
  middlewares: [], // 保存中间件函数
  /**
   * 目标函数：所有中间件执行完毕后，才执行
   * @param {any} ctx 当前数据
   */
  callback (ctx) {
    console.log(ctx)
  },
  /**
   * 注册一个中间件
  * @param {Function} fn 中间件函数
   */
  use (fn) {
    this.middlewares.push(fn)
  },
  /**
   * (从头开始)启动
   * @param {any} ctx 初始数据
   */
  go (ctx) {
    let fns = [...this.middlewares, this.callback]
    let next = () => {
      let fn = fns.shift()
      if (fn) {
        fn.call(this, ctx, next)
      }
    }
    next()
  }
}

/**
 * 实现方式4：reduceRight
 * 使用reduceRight将中间件串联起来，后一个作为前一个的回调参数
 */
var app = {
  middlewares: [], // 保存中间件函数
  /**
   * 目标函数：所有中间件执行完毕后，才执行
   * @param {any} ctx 当前数据
   */
  callback (ctx) {
    console.log(ctx)
  },
  /**
   * 注册一个中间件
  * @param {Function} fn 中间件函数
   */
  use (fn) {
    this.middlewares.push(fn)
  },
  /**
   * (从头开始)启动
   * @param {any} ctx 初始数据
   */
  go (ctx) {
    let execute = this.middlewares.reduceRight((acc, fn) => {
      return () => {
        fn.call(this, ctx, acc)
      }
    }, () => {
      this.callback.call(this, ctx)
    })
    execute()
  }
}

exports.app = app
