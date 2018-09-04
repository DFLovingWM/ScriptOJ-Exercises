'use strict';

const assert = require('assert')
const { slice, take } = require('../P1_curry_附加题.js')

describe('slice函数', function () {
  let arr

  beforeEach(() => {
    arr = ['1', '2', '3', 4, 5, 6]
  })

  it(`basic usage of 'slice()'`, () => {
    assert.deepEqual( slice(3, 6, arr), [4,5,6] )
  })

  it (`curries use of 'slice()'`, () => {
    assert.deepEqual( slice(0)(2)(arr), ['1', '2'] )
  })

  it(`no 'end' param for slice()'`, () => {
    assert.deepEqual( slice(3, arr), [4,5,6] )
  })
})

describe('take函数', function () {
  it(`slice and take`, () => {
    let arr = '793245364'.split()
    assert.deepEqual( slice(0)(3)(arr), take(3)(arr) )
  })
})
