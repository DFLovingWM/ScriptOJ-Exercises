(() => {
  let originValue = window.$ // 闭包令originValue变成局部变量，保存$原来的值
  window.$ = {
    noConflict () {
      let tmp = window.$
      window.$ = originValue // $恢复原来的值
      return tmp
    }
  }
})()
