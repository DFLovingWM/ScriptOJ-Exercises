/**
 * 思路：移动DOM元素，使用insertBefore方法就足够了
 * 注意点：nextSibling、nextElementSibling的区别（类比childNodes、children的区别）
 */

const initAdjustableList = () => {
  // 事件委托
  document.getElementById('adjustable-list').addEventListener('click', (event) => {
    const classList = event.target.classList
    if (classList.contains('up')) {
      handleUpBtn(event)
    } else if (classList.contains('down')) {
      handleDownBtn(event)
    }
  })
}

/**
 * 处理上移
 */
function handleUpBtn(event) {
  const $li = event.target.parentNode
  const $ul = $li.parentNode
  $ul.insertBefore($li, $li.previousElementSibling)
}

/**
 * 处理下移
 */
function handleDownBtn(event) {
  const $li = event.target.parentNode
  const $ul = $li.parentNode
  $ul.insertBefore($li, $li.nextElementSibling === null ? $ul.firstChild : $li.nextElementSibling.nextElementSibling)
}
