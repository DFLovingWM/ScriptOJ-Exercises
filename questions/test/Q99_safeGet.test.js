const assert = require('assert')
const { safeGet } = require('../Q99_safeGet.js')

describe(`题目例子`, () => {
  let data

  beforeEach(() => {
    data = { a: { b: { c: 'ScriptOJ' } } }
  })

  it(`能找到`, () => {
    assert.deepEqual( safeGet(data, 'a.b'), { c: 'ScriptOJ' } )
    assert.equal( safeGet(data, 'a.b.c'), 'ScriptOJ' )
  })

  it(`找不到但不会报错`, () => {
    assert.equal( safeGet(data, 'a.b.c.d'), undefined )
    assert.equal( safeGet(data, 'a.b.c.d.e.f.g'), undefined )
  })
  
})