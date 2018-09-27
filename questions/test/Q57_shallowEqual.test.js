const assert = require('assert')
const {shallowEqual} = require('../Q57_shallowEqual.js')

describe(`测试shallowEqual`, () => {
  it(`值`, () => {
    assert.ok( shallowEqual( 1, 1 ) )
    assert.ok( !shallowEqual( 1, '1' ) )
    assert.ok( shallowEqual( 0.00002, 0.00002 ) )
  })

  it(`特殊值`, () => {
    assert.ok( !shallowEqual( null, {} ) )
    assert.ok( shallowEqual( undefined, undefined ) )
    assert.ok( !shallowEqual( undefined, null ) )
    assert.ok( shallowEqual( null, null ) )
    assert.ok( !shallowEqual( +0, -0 ) )
    assert.ok( shallowEqual( NaN, NaN ) )
  })

  it(`对象`, () => {
    assert.ok( shallowEqual([], []) )
    assert.ok( shallowEqual([1], [1]) )
    assert.ok( shallowEqual({}, {}) )
    assert.ok( shallowEqual({ name: 'JK' }, { name: 'JK' }) )
  })

  it(`数组顺序不同，就不同`, () => {
    assert.ok( shallowEqual( [1, 2, 3], [1, 2, 3] ) )
    assert.ok( !shallowEqual( [1, 3, 2], [1, 2, 3] ) )
  })

  it(`对象若只是顺序不同，也相同`, () => {
    assert.ok( shallowEqual( { name: 'JK', age: 10 }, { name: 'JK', age: 10 } ) )
    assert.ok( shallowEqual( { name: 'JK', age: 10 }, { age: 10, name: 'JK' } ) )
  })

  it(`题目例子`, () => {
    var a = { name: 'Jerry' }
    var b = { age: 12 }
    // assert.ok( shallowEqual({ a, b }, { a, b }) ) // true
    assert.ok( !shallowEqual({ name: { a, b } }, { name: { a, b } }) ) // false
    assert.ok( !shallowEqual({ a, b }, { a }) ) // false
  })
})
