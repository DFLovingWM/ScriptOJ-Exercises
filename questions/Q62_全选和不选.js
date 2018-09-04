/**
 * 一、思路：
 *  分别对大checkbox、每个小checkbox处理点击事件的回调就好
 * 
 * 二、知识点：
 *  (1)基本的DOM选择(符)。另外，checkbox的状态，在DOM上对应checked而不是value
 *  (2)(可选)事件委托
 *  (3)对HTMLCollection(getElementsByClassName)、NodeList(querySelectorAll)这种函数返回的类数组对象，不能直接进行数组的操作，而要借助call之类的使用。
 *     但是因为是Iterable，所以可以用for const遍历
 * 
 * 三、感想：
 *  Vue、React等响应式框架原来那么好！没有对比就没有伤害
 */

function initCheckBox () {
  // 大checkbox的事件，影响小checkbox
  const $checkAll = document.getElementById('check-all')
  $checkAll.addEventListener('click', event => {
    const shouldSelected = !isAllSelected()
    for (const $checkbox of document.getElementsByClassName('check-item')) {
      $checkbox.checked = shouldSelected
    }
  })

  // 每个小checkbox的事件（使用事件委托），影响大checkbox
  document.getElementsByTagName('ul')[0].addEventListener('click', event => {
    $checkAll.checked = isAllSelected()
  }, false)
}

// 判断当前是否全选了
function isAllSelected () {
  return Array.prototype.every.call(document.getElementsByClassName('check-item'), dom => dom.checked)
}
