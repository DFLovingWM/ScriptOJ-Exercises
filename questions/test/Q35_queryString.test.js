const assert = require('assert')
const {parseQueryString} = require('../Q35_queryString.js')

describe(`测试URL`, () => {

  it(`一般`, () => {
    var url = `https://scriptoj.com?offset=10&limit=100`
    assert.deepEqual(parseQueryString(url), {
      offset: '10',
      limit: '100'
    })
  })

  it(`value不存在的算作null`, () => {
    var url = `https://scriptoj.com?limit&offset=10`
    assert.deepEqual(parseQueryString(url), {
      limit: null,
      offset: '10'
    })
  })

  it(`没有value算作空串`, () => {
    var url = `https://scriptoj.com?limit=&offset=10`
    assert.deepEqual(parseQueryString(url), {
      limit: '',
      offset: '10'
    })
  })

  it(`hash后的不算`, () => {
    var url = `https://scriptoj.com#?offset=10&limit=100`
    assert.deepEqual(parseQueryString(url), {})

    var url = `https://scriptoj.com/problems/#?offset=10&limit=100`
    assert.deepEqual(parseQueryString(url), {})
  })

  it(`没有queryString`, () => {
    var url = `https://scriptoj.com?`
    assert.deepEqual(parseQueryString(url), {})
  })

  it(`还是没有queryString`, () => {
    var url = `https://scriptoj.com`
    assert.deepEqual(parseQueryString(url), {})
  })

  it(`多个问号，第1、2之间的才算qs`, () => {
    var url = `https://scriptoj.comproblems/?offset=10&limit=100&tag=all?name=lucy`
    assert.deepEqual(parseQueryString(url), {
      offset: '10',
      limit: '100',
      'tag': 'all?name=lucy'
    })
  })

})
