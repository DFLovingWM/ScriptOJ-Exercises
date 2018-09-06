/**
 * 取直接子元素列表有两种：
 * 1.children属性：不包含文本节点（适用于本题目）
 * 2.childNodes属性：包含文本节点（不适用，文本节点获取不了属性，自然也没有getAttribute方法）
 */
const getChildAttributes = (el, key) => [].map.call(el.children, child => child.getAttribute(key))
