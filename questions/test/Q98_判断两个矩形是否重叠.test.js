const assert = require('assert')
const { isOverlap } = require('../Q98_判断两个矩形是否重叠.js')

describe(`测试重叠`, () => {
  it(`题目例子`, () => {
    const rect1 = { x: 100, y: 100, width: 100, height: 100 }
    const rect2 = { x: 150, y: 150, width: 100, height: 100 }
    assert.equal( isOverlap(rect1, rect2), true )
  })

  it(`测试例子`, () => {
    const rect1 = {"x":100,"y":100,"width":100,"height":100}
    const rect2 = {"x":200,"y":200,"width":100,"height":100}
    assert.equal( isOverlap(rect1, rect2), true )
  })
})
