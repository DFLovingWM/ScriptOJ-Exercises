const assert = require('assert')
const { fibonacci } = require('../Q102_记忆化斐波那契函数.js')

describe('直接求值', () => {
  it(`基本值`, () => {
    assert.equal( fibonacci(1), 1 )
    assert.equal( fibonacci(2), 1 )
    assert.equal( fibonacci(3), 2 )
  })

  it(`大一点的值`, () => {
    assert.equal( fibonacci(7), 13 )
    assert.equal( fibonacci(8), 21 )
  })
})
