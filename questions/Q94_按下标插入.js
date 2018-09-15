/**
 * 思路：
 * （用了个小技巧）把原列表中每个item的index加上0.1
 * 再把全部元素从小到大排序。这样子就能确保本来index相同时，新列表的元素总会在前面了。
 */

const injectSections = (items, sections) => {
  // 把原列表中的每一个index加0.1
  const oldList = items.map((item, index) => ({
    content: item,
    index: index + 0.1
  }))
  return oldList.concat(sections).sort((item1, item2) => item1.index - item2.index).map(item => item.content)
}

// 测试代码
// const result = injectSections(
//   ['item1', 'item2', 'item3', 'item4', 'item5'],
//   [
//     { content: 'section1', index: 0 },
//     { content: 'section2', index: 2 }
//   ]
// )
// console.log( result )