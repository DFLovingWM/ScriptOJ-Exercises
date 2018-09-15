class VNode {
  constructor (tagName, props, children) {
    Object.assign(this, {
      tagName,
      props,
      children
    })
  }
}

const h = (...args) => new VNode(...args)
