/**
 * 方法1:递归
 * 判断两个对象到某一层之前，所有值/叶子结点是否都相等
 * @param {any} x 比较变量/对象x
 * @param {any} y 比较变量/对象y
 * @param {number} level 从本层算起，还需要比较的层数
 */
function equal (x, y, level = 1) {
  if (level === 1) {
    // 这一层是需要比较的最后一层，直接比较变量的值/对象的地址
    return Object.is(x, y)
  }
  
  if ((typeof x !== 'object' || x === null) || (typeof y !== 'object' || y === null)) { // 若其中一个是基本类型，则使用Object.is
    return Object.is(x, y)
  } else { // 若两个都是对象，才进行属性遍历
    /**
     * 这里用Object.entries而不用Object.keys或Object.values，
     * 是想应对数组的情况：若两个数组所有值相等但顺序不一致，则不算相等。
     * 但普通对象的KV对的顺序不影响相等。
     */
    let xEntries = Object.entries(x)
    if (xEntries.length !== Object.entries(y).length) return false
    for (const [key, xValue] of xEntries) {
      let yValue = y[key]
      let isItemEqual = equal(xValue, yValue, level - 1)
      if (!isItemEqual) {
        return false // 某个子结点不相等，可以终止递归了
      }
    }
    return true
  }
}

var shallowEqual = (x, y) => equal(x, y, 2)


/**
 * 方法2:简单比较
 * （以下为参考答案）
 */
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null ||
      typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

exports.shallowEqual = shallowEqual
