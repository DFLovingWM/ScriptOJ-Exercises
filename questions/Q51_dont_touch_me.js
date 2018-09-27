/**
 * 使用Proxy拦截tomy对象的set、deleteProperty方法
 */
const tomy = new Proxy({}, {
  // 增加、修改属性
  set (target, key, value) {
    invariant()
  },
  // 删除属性
  deleteProperty (target, key) {
    invariant()
  }
})

function invariant () {
  console.log(`Don't Touch Me.`)
}

// tomy.name = 'JK'
// delete tomy.nafwefw