/**
 * 观察者模式/发布订阅模式有两种方式的实现：
 * 1. Java类语言，需要定义接口。维护一个接口数组。
 * 2. JS类语言，函数作为一等公民。维护一个回调函数数组。
 */
class EventEmitter {
  constructor () {
    this.fns = {}
  }

  on (eventName, func) {
    if (!this.fns[eventName]) {
      this.fns[eventName] = []
    }
    this.fns[eventName].push(func)
  }

  emit (eventName, ...args) {
    if (!this.fns[eventName]) return
    for (const fn of this.fns[eventName]) {
      fn(...args)
    }
  }

  off (eventName, func) {
    if (!this.fns[eventName]) return
    const index = this.fns[eventName].findIndex(fn => fn === func)
    this.fns[eventName].splice(index, 1)
  }
}

const emitter = new EventEmitter()
const sayHi = (name) => console.log(`Hello ${name}`)
const sayHi2 = (name) => console.log(`Good night, ${name}`)

emitter.on('hi', sayHi)
emitter.on('hi', sayHi2)
emitter.on('hi', sayHi2)
emitter.emit('hi', 'ScriptOJ')
// => Hello ScriptOJ
// => Good night, ScriptOJ

emitter.off('hi', sayHi2)
emitter.emit('hi', 'ScriptOJ')
// => Good night, ScriptOJ

const emitter2 = new EventEmitter()
emitter2.on('hi', (name, age) => {
  console.log(`I am ${name}, and I am ${age} years old`)
})
emitter2.emit('hi', 'Jerry', 12)
// => I am Jerry, and I am 12 years old
