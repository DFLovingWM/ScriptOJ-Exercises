/**
 * 没什么好说的，就是简单的VDOM渲染。
 * 
 * 题目有几个小坑：
 * 1.必须声明class VNode
 * 2.会检验属性名：tagName props children，故字段命名必须得这样
 */

class VNode {
  constructor (tagName, props, children) {
    this.tagName = tagName
    this.props = props
    this.children = children
  }

  render () {
    let dom = document.createElement(this.tagName)
    for (const [key, value] of Object.entries(this.props)) {
      dom.setAttribute(key, value)
    }
    for (const child of this.children) {
      let childDom
      if (child instanceof VNode) {
        // 如果是子VDOM结点，则递归render出真实DOM
        childDom = child.render()
      } else {
        // 否则创建文本结点
        /**
         * 这里有两种方式，对于题目来说都可以
         * (1)dom.appendChild( document.createTextNode( child ) )
         * (2)dom.innerText = child
         * 但明显(1)更好，因为(2)只能修改，而(1)是追加，适用于{ children: ['text1', 'text2'] }即多个文本结点的情况
         */
        childDom = document.createTextNode(child)
      }
      dom.appendChild(childDom)
    }
    return dom
  }
}
