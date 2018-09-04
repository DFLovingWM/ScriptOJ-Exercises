const assert = require('assert')
const { proposeToMissHan } = require('../Q25_李雷向韩梅梅求婚.js')

describe(`proposeToMissHan函数`, () => {

  it(`proposeToMissHan函数返回一个promise`, () => {
    assertIsPromise( proposeToMissHan() )
  })

  describe(`使用proposeToMissHan的正常姿势`, () => {
    it(`求婚成功`, async () => {
      assert.equal( await proposeToMissHan(true), 'ok' )
    })

    it(`求婚失败`, async () => {
      try {
        await proposeToMissHan(false)
      } catch (e) {
        assert.equal( e, 'no' )
      }
    })
  })

  function assertIsPromise(obj) {
    assert.equal( typeof obj.then, 'function' )
  }
})
