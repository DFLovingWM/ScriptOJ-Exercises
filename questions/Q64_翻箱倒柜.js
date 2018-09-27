/**
 * 考察对for...of(Iterable对象)的理解
 */
class Box {
  constructor (array) {
    this.array = array
  }

  // for...of取的就是这个函数返回的迭代器
  [Symbol.iterator] () {
    // return this.array.values() // trick：直接返回对应数组的value迭代器，但是OJ上好像不支持
    let index = 0
    return {
      next: () => {
        let done, value
        if (index >= this.array.length) {
          done = true
          value = undefined
        } else {
          done = false
          value = this.array[index]
        }
        ++index
        return { done, value }
      }
    }
  }
}

// const box = new Box(['book', 'money', 'toy'])
// for (let stuff of box) {
//   console.log(stuff) // => 依次打印 'book', 'money', 'toy'
// }
