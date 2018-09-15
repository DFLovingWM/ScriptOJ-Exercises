const assert = require('assert')
const { exchange } = require('../Q79_灵魂交换.js')

describe(`无题`, () => {
  class A {
    constructor (name) {
      this.name = name
    }
    sayHi () {
      return `I am ${this.name}.`
    }
  }
  
  class B {
    constructor (name) {
      this.name = name
    }
    sayHi () {
      return `This is ${this.name}.`
    }
  }

  const a = new A('Jerry') 
  const b = new B('Lucy')

  exchange(a, b) // 交换

  it(`作用`, () => {
    assert.ok(a instanceof B)
    assert.ok(b instanceof A)
    assert.equal(a.sayHi(), 'This is Jerry.')
    assert.equal(b.sayHi(), 'I am Lucy.')
  })

  it(`对类无影响`, () => {
    const c = new A('JK')
    assert.equal(c.sayHi(), 'I am JK.')
  })
})