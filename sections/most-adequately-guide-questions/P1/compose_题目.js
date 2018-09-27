var _ = R /* Ramda.js */
 
// 测试数据
var CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// Exercise 1:
// ============
// 用 _.compose() 改写以下函数。提示: _.prop() 已经是柯里化的
var isLastInStock = function(cars) {
  var reversed_cars = _.last(cars);
  return _.prop('in_stock', reversed_cars)
};

// Exercise 2:
// ============
// 用 _.compose(), _.prop() and _.head() 来获取第一辆车的 name
var nameOfFirstCar = undefined;


// Exercise 3:
// ============
// 使用帮助函数 _average 重构 averageDollarValue 为组合函数
var _average = function(xs) { return reduce(add, 0, xs) / xs.length; }; // <- 不需要修改

var averageDollarValue = function(cars) {
  var dollar_values = map(function(c) { return c.dollar_value; }, cars);
  return _average(dollar_values);
};


// Exercise 4:
// ============
// 使用 _.compose 完成 sanitizeNames() 函数
// 获取一个数组中车的名字，并且把名字转换成小写字母，并且空格用下划线替代
// 例如: sanitizeNames([{name: "Ferrari FF"}]) //=> ["ferrari_ff"].

var _underscore = replace(/\W+/g, '_'); //<-- 使用但是不要修改这个函数

var sanitizeNames = undefined;
