/**
 * 思路：
 * 很简单，把对象内的每个属性的descriptor对象的enumerable属性toggle就行，然后再重新defineProperty进去作为覆盖就行
 * 
 * 考察：
 * - Object.defineProperty/Object.defineProperties
 * - Object.getOwnPropertyDescriptor(s)
 */
var flikerProps = obj => {
  let descriptors = Object.getOwnPropertyDescriptors(obj)
  for (const descriptor of Object.values(descriptors)) {
    descriptor.enumerable = !descriptor.enumerable
  }
  Object.defineProperties(obj, descriptors)
}

// const obj = {}
// const config1 = { enumerable: false, configurable: true }
// const config2 = { enumerable: true, configurable: true }

// Object.defineProperties(obj, {
//   green: config1,
//   red: config2,
//   blue: config1,
//   yellow: config2
// })

// console.log(Object.keys(obj)) // => ["red", "yellow"]
// flikerProps(obj) // 闪烁
// console.log(Object.keys(obj)) // => ["green", "blue"]
// flikerProps(obj) // 闪烁
// console.log(Object.keys(obj)) // => ["red", "yellow"]
// flikerProps(obj) // 闪烁
// console.log(Object.keys(obj)) // => ["green", "blue"]