class PriorityQueue {
  constructor () {
    this.queue = []
  }

  add (element) {
    const index = this._binarySearch(element)
    this.queue.splice(index, 0, element) // 插入该元素
    // console.log(`现在元素有: ${this.queue}`)
  }

  /**
   * 二分查找
   */
  _binarySearch (element) {
    let firstIndex = 0
    let lastIndex = this.queue.length - 1
    while (firstIndex < lastIndex) {
      let middleIndex = Math.floor((firstIndex + lastIndex) / 2)
      let middle = this.queue[middleIndex]
      if (middle === element) {
        return middleIndex
      } else if (element > middle) { // 大于，则在后半段
        firstIndex = middleIndex + 1
      } else { // 小于，则在前半段
        lastIndex = middleIndex - 1
      }
    }
    let targetIndex = firstIndex
    // 当新元素大于找到的下标所在元素时，需要右移
    if (element > this.queue[targetIndex]) {
      ++targetIndex
    }
    return targetIndex
  }
  
  remove () {
    return this.queue.pop()
  }
}


const pq = new PriorityQueue()
pq.add(2)
pq.add(1)
pq.add(3)
pq.add(2)

console.log(pq.remove()) // 3
console.log(pq.remove()) // 2
console.log(pq.remove()) // 1
