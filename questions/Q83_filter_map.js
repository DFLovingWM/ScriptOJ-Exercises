/**
 * 考察简单的Map遍历：
 * 1. Map.prototype.keys
 * 2. Map.prototype.values
 * 3. Map.prototype.entries(默认)
 */

// 方法1：直接使用for of遍历
Object.assign(Map.prototype, {
  filterKeys (fn) {
    const result = new Map()
    for (const [k, v] of this) {
      if (fn(k)) {
        result.set(k, v)
      }
    }
    return result
  },
  filterValues (fn) {
    const result = new Map()
    for (const [k, v] of this) {
      if (fn(v)) {
        result.set(k, v)
      }
    }
    return result
  }
})

// 方法2：借助数组的filter，写法上更简单
Object.assign(Map.prototype, {
  filterKeys (fn) {
    return new Map( [...this].filter( ([key]) => fn(key) ) )
  },
  filterValues (fn) {
    return new Map( [...this].filter( ([, value]) => fn(value) ) )
  }
})


/* 测试代码 */
// const m = new Map([['Jerry', 12], ['Jimmy', 13], ['Tomy', 14]])

// console.log(m.filterKeys((key) => key.startsWith('J'))) // => Map { Jerry => 12, Jimmy => 13 }
// console.log(m.filterValues((val) => val >= 13)) // => Map { Jimmy => 13, Tomy => 14  }

// // 原有的 map 保持不变
// console.log(m) // => Map { Jerry => 12 , Jimmy => 13, Tomy => 14 }
