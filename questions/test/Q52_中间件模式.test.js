const assert = require('assert')
const { app } = require('../Q52_中间件模式.js')

function getApp() {
  app.middlewares = []
  return app
}

describe(`测试中间件实现`, () => {
  describe(`正常流程`, () => {
    it(`执行一次`, () => {
      var app = getApp()
      app.use((ctx, next) => {
        ctx.name = 'Lucy'
        next()
      })
      app.use((ctx, next) => {
        ctx.age = 12
        next()
      })
      app.use((ctx, next) => {
        console.log(`此处有打印信息：${ctx.name} is ${ctx.age} years old.`)
        next()
      })
      const data = {}
      app.go(data)
      assert.deepEqual( data, { name: 'Lucy', age: 12 } )
    })

    it(`重新执行一次`, () => {
      app.use((ctx, next) => {
        ctx.isHappy = true
        next()
      })
      const data2 = { nickname: null }
      app.go(data2)
      assert.deepEqual( data2, { isHappy: true, nickname: null, age: 12, name: 'Lucy' } )
    })
  })
  
  describe(`不调用next`, () => {
    it(`则会中断中间件`, () => {
      var app = getApp()
      app.use((ctx, next) => {
        ctx.name = 'JK'
        // no `next()`
      })
      app.use((ctx, next) => {
        ctx.nickname = 'Fat K'
        next()
      })
      const data = {}
      app.go(data)
      assert.deepEqual(data, { name: 'JK' })
    })

    it(`也不会执行目标函数`, () => {

    })
  })
})