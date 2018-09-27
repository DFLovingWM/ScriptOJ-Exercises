const assert = require('assert')
const { toCamelCaseVar } = require('../Q29_转换驼峰命名.js')

describe(`转换驼峰`, () => {
  it(`普通`, () => {
    assert.equal(toCamelCaseVar('my_name'), 'myName')
    assert.equal(toCamelCaseVar('my_nick_name'), 'myNickName')
  })

  it(`题目要求1：头尾的下划线不用理`, () => {
    assert.equal(toCamelCaseVar('_my_name_'), '_myName_')
    assert.equal(toCamelCaseVar('_my_nick_name_'), '_myNickName_')
    assert.equal(toCamelCaseVar('____my_nick_name__'), '____myNickName__')
  })

  it(`边界值`, () => {
    assert.equal(toCamelCaseVar('____'), '____')
    assert.equal(toCamelCaseVar(''), '')
    assert.equal(toCamelCaseVar('a'), 'a')
    assert.equal(toCamelCaseVar('_a_'), '_a_')
  })

  it(`题目要求2：连续下划线的也要转化`, () => {
    assert.equal(toCamelCaseVar('__is__item__selected'), '__isItemSelected')
  })
})
