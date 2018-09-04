/**
 * 借助classList这个API可以很方便地对元素的class进行CRUD
 */

const addClass = (dom, name) => {
  dom.classList.add(name)
}

const removeClass = (dom, name) => {
  dom.classList.remove(name)
}

const hasClass = (dom, name) => {
  return dom.classList.contains(name) // 注意这里记得return
}
