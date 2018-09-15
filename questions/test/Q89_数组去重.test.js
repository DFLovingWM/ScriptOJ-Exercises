const assert = require('assert')
const unique = require('../Q89_数组去重.js').unique

describe(`数组去重`, () => {
  it(`简单`, () => {
    assert.deepEqual( unique([0, 1, 2, 2, 3, 3, 4]), [0, 1, 2, 3, 4] )
    assert.deepEqual( unique([0, 1, '1', '1', 2]), [0, 1, '1', 2] )
  })

  it(`边界`, () => {
    assert.deepEqual( unique([]), [] )
    assert.deepEqual( unique([undefined, null, undefined]), [undefined, null] )
  })

  it(`对象类型`, () => {
    assert.deepEqual( unique([{}, {}]), [{}, {}] )

    const obj = {}
    assert.deepEqual( unique([obj, obj]), [obj] )
  })
})
