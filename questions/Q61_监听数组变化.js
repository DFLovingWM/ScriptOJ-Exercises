const REACTIVE_FUNC_NAMES = [
  'push',
  'pop',
  'unshift',
  'shift',
  'splice',
  'sort',
  'reverse'
]

/**
 * 三种思路：
 * 1. 代理Array
 * 2. 继承Array
 * 3. 携带Array实例
 * 
 * 下面是Proxy的做法
 */
class ObserverableArray {
  constructor (array) {
    return new Proxy(array || [], {
      get (target, key) {
        if (REACTIVE_FUNC_NAMES.includes(key)) {
          console.log(key)
        }
        return Reflect.get(target, key)
      }
    })
  }
}

var arr = new ObserverableArray()
arr.push('Good') // => 打印 'push'，a 变成了 ['Good']
console.log(arr)