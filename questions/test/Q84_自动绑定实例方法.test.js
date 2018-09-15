const assert = require('assert')
const {autoBind} = require('../Q84_自动绑定实例方法.js')

describe(`测试基本运作`, () => {
  let Person

  beforeEach(() => {
    Person = class {
      constructor (name) {
        this.name = name
      }
      getName () {
        return `${this.name}`
      }
    }
  })

  it(`函数赋值，看this是否带过去`, () => {
    const BindPerson = autoBind(Person)
    let cl = new BindPerson('CL')
    let clGetName = cl.getName
    assert.equal( clGetName(), 'CL' )
  })

  it(`实例化后，类又新增属性`, () => {
    const BindPerson = autoBind(Person)
    let jk = new BindPerson('JK')
    Person.prototype.getGood = function () {
      return `${this.name} is good.`
    }
    let jkGetGood = jk.getGood
    assert.equal( jkGetGood(), 'JK is good.' )
  })
})
