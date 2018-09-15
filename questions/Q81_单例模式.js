/**
 * 方法1：extends + Proxy
 * 1. b instanceof A/B：让B继承A即可
 * 2. A.staticMethod === B.staticMethod：同上，继承即可
 * 3. B实例为单例：可以让它挂载在B上；又因为使用的是原生new，所以需要使用Proxy拦截B的construct过程
 */
var singletonify = (OriginalClass) => {
  let NewClass = class extends OriginalClass {}
  NewClass._instance = new NewClass()
  return new Proxy(NewClass, {
    construct () {
      return NewClass._instance
    }
  })
}

/**
 * 方法2：Proxy：
 * 知识点：对于某个属性，在没有拦截的情况下，代理直接使用原对象的该属性。而题目的几个要求：
 * (1)instanceof对应：类的名为[Symbol.species]的getter属性
 * (2)静态方法就是类的属性
 * 以上两个都可以用Proxy拦截原类的get方法
 */
var singletonify = OriginalClass => {
  const _instance = new OriginalClass()
  return new Proxy(OriginalClass, {
    construct () {
      return _instance
    }
  })
}

/**
 * 方法3：不用Proxy，直接改写constructor
 */
var singletonify = OriginalClass => {
  class NewClass extends OriginalClass {
    constructor () {
      super()
      return NewClass._instance // 关键：构造器中，可以直接返回单例
    }
  }
  NewClass._instance = new NewClass()
  return NewClass
}

exports.singletonify = singletonify
