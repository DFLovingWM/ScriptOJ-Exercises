/**
 * 题目要求：
 * 1. BindA实例所拥有的函数，需要绑定那个实例作为context。即函数传递可以携带context。
 * 2. BindA实例化后，又在原型上增加新的函数，需要保证该新函数也能够携带context。
 * 
 * 方法：
 * 1. 静态绑定：类似React，在constructor中对所有已定义的函数进行一次bind，但是这样只能对class内已定义函数进行bind，对新增的函数没有作用。该方法行不通。
 * 2. 动态拦截：对实例进行proxy以拦截其所有getter，只要是获取一个函数，就当场给函数A进行bind，得到A2，返回A2。
 * 
 * 考察：ES6 Proxy
 * 
 * 关于下面代码中的两个proxy的解释：
 * 1. 第1个是为了代理目标类，因为BindA和A的实例需要有相同的函数（当然也可以不使用Proxy，看下下面的解法，但关键部分一样）
 * 2. 第2个是为了代理目标实例，因为要拦截实例所有的getter
 */

// 解法1：2次proxy
var autoBind = (ToBindClass) => {
  return new Proxy(ToBindClass, {
    construct (TargetClass, args) {
      const targetInstance = Reflect.construct(TargetClass, args) // 或者new TargetClass(...args)
      return new Proxy(targetInstance, {
        /* 关键：拦截对该实例所有属性的getter */
        get (instance, name) {
          const value = Reflect.get(instance, name)
          if (typeof value === 'function') {
            return value.bind(instance) // 如果是函数，就绑定这个实例
          } else {
            return value
          }
        }
      })
    }
  })
}

// 解法2：1次proxy
var autoBind = (ToBindClass) => {
  return function (...args) {
    const targetInstance = Reflect.construct(ToBindClass, args)
    return new Proxy(targetInstance, {
      /* 关键：拦截对该实例所有属性的getter */
      get (instance, name) {
        const value = Reflect.get(instance, name)
        if (typeof value === 'function') {
          return value.bind(instance) // 如果是函数，就绑定这个实例
        } else {
          return value
        }
      }
    })
  }
}

exports.autoBind = autoBind
