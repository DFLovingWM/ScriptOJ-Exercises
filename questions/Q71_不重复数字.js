/**
 * 简单题目，考察点：Set基本用法、Math.random
 * 
 * 注意的地方：
 * 题目要求数字范围：[2, 32]，
 * 但对于返回[0, 1)的Math.random来说，其实是[2, 33)，所以上界是33而不是32
 */
const LOWER_BOUND = 2
const UPPER_BOUND = 32 + 1
var uniqueNums = count => {
  const numberSet = new Set()
  while (numberSet.size < count) {
    numberSet.add( LOWER_BOUND + Math.floor(Math.random() * (UPPER_BOUND - LOWER_BOUND)) )
  }
  return [...numberSet]
}


// var uniqueNums = count => new Array(count).fill(LOWER_BOUND).map((value, index) => value + index).sort(_ => Math.random() > 0.5)

console.log( uniqueNums(5) )
console.log( uniqueNums(0) )
console.log( uniqueNums(10) )