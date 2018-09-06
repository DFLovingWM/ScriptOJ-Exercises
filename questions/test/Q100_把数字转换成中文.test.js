const { toChineseNum } = require('../Q100_把数字转换成中文.js')
const assert = require('assert')

describe(`测试`, () => {
  it(`题目例子`, () => {
    assert.equal( toChineseNum(12345), '一万二千三百四十五' )
  })

  it(`有零`, () => {
    assert.equal( toChineseNum(2010), '二千零一十' )
  })

  it(`有零但不输出`, () => {
    assert.equal( toChineseNum(9000), '九千' )
  })

  it(`有多个0`, () => {
    assert.equal( toChineseNum(20101), '二万零一百零一' )
  })

  it(`数字大一点`, () => {
    assert.equal( toChineseNum(45599056), '四千五百五十九万九千零五十六' )
  })

  it(`数字突破题目限制，到达亿级`, () => {
    assert.equal( toChineseNum(1028919890), '一十亿二千八百九十一万九千八百九十' )
  })

  it(`我的例子`, () => {
    assert.equal( toChineseNum(90000000), '九千万' )
    assert.equal( toChineseNum(120000), '一十二万' )
    assert.equal( toChineseNum(101000), '一十万一千' )
  })

  it(`0`, () => {
    assert.equal( toChineseNum(0), '零' )
  })

  it(`1`, () => {
    assert.equal( toChineseNum(1), '一' )
  })
})