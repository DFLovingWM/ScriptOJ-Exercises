const assert = require('assert')
const { extractStr } = require('../Q101_解析字串.js')

describe(`no title`, () => {
  it(`题目例子`, () => {
    assert.deepEqual( extractStr('My name is:Jerry. My age is:12.'), ['Jerry', '12'] )
    assert.deepEqual( extractStr('::zMEHbg.vkzEhncglijelmRQHj:.'), ["zMEHbg",""] )
  })

  it(`没有匹配项`, () => {
    assert.deepEqual( extractStr('My name is Jerry. My age is:12'), [] )
  })
})