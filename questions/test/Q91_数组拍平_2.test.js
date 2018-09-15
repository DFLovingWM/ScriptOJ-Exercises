const assert = require('assert')
const { flatten2 } = require('../Q91_数组拍平_2.js')

describe(`数组flatten`, () => {
  it(`题目例子`, () => {
    let numbers = flatten2([1, [[2], 3, 4], 5])
    assert.deepEqual( getValues(numbers), [1,2,3,4,5] )
  })

  it(`多重嵌套数组1`, () => {
    let nestedArr = [ [ [ [], [1] ], [ [ [2], [3] ] ], [ [4], [5] ] ] ]
    const result = getValues( flatten2( nestedArr ) )
    assert.deepEqual( result, [1,2,3,4,5,] )
  })

  it(`多重嵌套数组2`, () => {
    let nestedArr = [ [ [ [ [0] ], [1] ], [ [ [2], [3] ] ], [ [4], [5] ] ] ]
    const result = getValues( flatten2( nestedArr ) )
    assert.deepEqual( result, [0,1,2,3,4,5] )
  })


  function getValues (iterator) {
    let arr = []
    let iteratorResult = iterator.next()
    while (!iteratorResult.done) {
      arr.push(iteratorResult.value)
      iteratorResult = iterator.next()
    }
    return arr
  }
})
