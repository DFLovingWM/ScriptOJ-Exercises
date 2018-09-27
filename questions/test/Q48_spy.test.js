const assert = require('assert')
const { spy } = require('../Q48_spy.js')

describe(`spy`, () => {
  it(`测试`, () => {
    let add = (a, b) => a + b
    assert.equal(add(0, 1), 1)

    add = spy(add)
    assert.equal(add(1, 2), 3)
    assert.equal(add(2, 3), 5)

    assert.deepEqual(add.calls, [{ args: [1,2], result: 3 }, { args: [2,3], result: 5 }])
  })

  it(`不要影响原函数`, () => {
    let add = () => {}
    spy(add)
    assert.equal(add.calls, undefined)
  })
})
