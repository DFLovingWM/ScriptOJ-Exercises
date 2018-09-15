const assert = require('assert')
const { isSameSet } = require('../Q90_判断两个Set是否相同.js')

describe(`测试flatten`, () => {
  it(`题目例子`, () => {
    const a = {}
    const b = 1
    const c = 'ScriptOJ'
    const set1 = new Set([a, b, c])
    const set2 = new Set([a, c, b])
    assert.deepEqual( isSameSet(set1, set2), true )
  })

  it(`空set`, () => {
    const set1 = new Set([])
    const set2 = new Set([])
    assert.deepEqual( isSameSet(set1, set2), true )
  })

  it(`元素有引用类型`, () => {
    const set1 = new Set([1, 2, {}])
    const set2 = new Set([1, 2, {}])
    assert.deepEqual( isSameSet(set1, set2), false )
  })

  describe(`包含关系`, () => {
    it(`包含1`, () => {
      const set1 = new Set([1, 2, 3])
      const set2 = new Set([1, 2, 3, 4])
      assert.deepEqual( isSameSet(set1, set2), false ) 
    })

    it(`包含2`, () => {
      const set1 = new Set([1, 2, 3, 5, 4])
      const set2 = new Set([1, 2, 3, 4])
      assert.deepEqual( isSameSet(set1, set2), false ) 
    })
  })
})
