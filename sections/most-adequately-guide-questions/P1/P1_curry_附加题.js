const R = require('rambda')

var _ = R

// 附加题 1:
// ============
// 包装数组的 slice 函数，让它变成函数式、柯里化的
var slice = _.curry(function (start, end, arr) {
  return arr.slice(start, end)
});


// 附加题 2:
// ============
// 使用 slice 函数定义 take 函数，让它可以获取到一个数组的前 n 个元素。take 函数必须是柯里化的。
// 例如 ['a', 'b', 'c'] 在 n = 2 的时候，应该返回 ['a', 'b'].
var take = slice(0);


module.exports = {
  slice,
  take
}