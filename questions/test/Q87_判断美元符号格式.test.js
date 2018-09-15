const assert = require('assert')
const {isUSDFormat} = require('../Q87_判断美元符号格式.js')

describe(`测试美元正则`, () => {
  it(`题目例子`, () => {
    const asks = [
      isUSDFormat('$1'), // => true
      isUSDFormat('$1.0'), // => false
      isUSDFormat('$100,000.00'), // => true
      isUSDFormat('$0,000.00'), // => false
      isUSDFormat('$0.00') ,// => true
      isUSDFormat('$11,23,345.33') ,// => false
      isUSDFormat('$1,123,345.33') // => true
    ]
    assert.deepEqual( asks, [true, false, true, false, true, false, true] )
  })
})
