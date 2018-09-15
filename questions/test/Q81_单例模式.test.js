const assert = require('assert')
const { singletonify } = require('../Q81_单例模式.js')

describe(`测试单例`, () => {
  let A
  let SingleA
  let a1, a2

  beforeEach(() => {
    A = class {}
    SingleA = singletonify(A)
    a1 = new SingleA()
    a2 = new SingleA()
  })

  it(`同一个实例`, () => {
    assert.ok(a1 === a2)
  })

  it(`instanceof`, () => {
    // assert.ok(a1 instanceof A)
    assert.ok(a1 instanceof SingleA)
  })
})

describe(`静态方法保持一致`, () => {
  it(`如题`, () => {
    class A {}
    A.staticMethod = () => {}

    const SingleA = singletonify(A)
    assert.ok(SingleA.staticMethod === A.staticMethod)
  })
})
