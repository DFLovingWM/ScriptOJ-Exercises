const {
  words,
  sentences,
  filterQs,
  max
} = require('./P1_curry.js')

var str = `hello world I'm Alice`
console.log( words(str) )

var strs = ['Hello World', 'Goodbye World']
console.log( sentences(strs) )

var strings = ['query', 'qing', '1', 'name', 'qaz']
console.log( filterQs(strings) )

var arr = [7,9,3,2,4,5,3,6,4]
console.log( max(arr) )
