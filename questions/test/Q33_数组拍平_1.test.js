const assert = require('assert')
const { flatten } = require('../Q33_数组拍平_1.js')

describe(`测试flatten`, () => {
  it(`边界值`, () => {
    assert.deepEqual( flatten([]), [] )
  })

  it(`简单`, () => {
    assert.deepEqual( flatten([1, 2, 3, [4, 5], 6]), [1,2,3,4,5,6] )
  })

  it(`嵌套`, () => {
    assert.deepEqual( flatten([1, 2, [3, [4, [5], 6], 7], 8, 9]), [1,2,3,4,5,6,7,8,9] )
    assert.deepEqual( flatten([1, [[2], 3, 4], 5]), [1, 2, 3, 4, 5] )
  })
})
