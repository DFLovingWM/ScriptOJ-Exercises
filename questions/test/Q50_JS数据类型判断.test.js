const assert = require('assert')
const { type } = require('../Q50_JS数据类型判断.js')

describe(`判断类型`, () => {
  it(`6种基本类型`, () => {
    assert.equal(type(null), 'null')
    assert.equal(type(NaN), 'number')
    assert.equal(type(undefined), 'undefined')
    assert.equal(type(Symbol()), 'symbol')
    assert.equal(type('hello world'), 'string')
    assert.equal(type(true), 'boolean')
  })

  it(`对象类型`, () => {
    assert.equal(type({}), 'object')
    assert.equal(type(() => {}), 'function')
    assert.equal(type(new Date), 'date')
    assert.equal(type(/hello/), 'regexp')
    assert.equal(type([]), 'array')
  })
})
