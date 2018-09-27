const assert = require('assert')
const { convertSymbolToNormalStr } = require('../Q63_Symbol转换.js')

describe(`无题`, () => {

  it(`普通对象`, () => {
    const srcObj = {
      [Symbol('name')]: 'JK',
      [Symbol('age')]: 10
    }
    const destObj = convertSymbolToNormalStr(srcObj)
    assert.deepEqual(destObj, {
      name: 'JK',
      age: 10
    })
  })

  it(`嵌套对象`, () => {
    const srcObj = {
      [Symbol('name')]: 'JK',
      [Symbol('age')]: 10,
      [Symbol('friends')]: ['CL', 'BB'],
      [Symbol('nested')]: {
        [Symbol('111')]: '222'
      }
    }
    const destObj = convertSymbolToNormalStr(srcObj)
    assert.deepEqual(destObj, {
      name: 'JK',
      age: 10,
      friends: ['CL', 'BB'],
      nested: {
        '111': '222'
      }
    })
  })

  it(`是个immutating函数（保持传入的对象不变）`, () => {
    const srcObj = {
      name: 'JK',
      [Symbol('age')]: 10
    }
    const srcObjClone = JSON.parse(JSON.stringify(srcObj))
    const destObj = convertSymbolToNormalStr(srcObj)
    assert.deepStrictEqual(srcObj, srcObjClone)
  })

})