import React from 'react'

/**
 * 既然没有用到state，就写成纯函数组件吧
 * 主要是利用ref来取DOM的高度(offsetHeight)
 */

// 写法1：React.createRef()
function Post (props) {
  let compRef = React.createRef()
  function onClick () {
    // console.dir(compRef.current)
    console.log(compRef.current.offsetHeight) // 打印p的高度
  }
  return (
    <p onClick={onClick} ref={compRef}>
      {props.content}
    </p>
  )
}

// 写法2：callback ref
// 参考：https://reactjs.org/docs/refs-and-the-dom.html#callback-refs
function Post (props) {
  let compRef
  function onClick () {
    console.log(compRef.offsetHeight) // 打印p的高度
  }
  return (
    <p onClick={onClick} ref={ref => compRef = ref}>
      {props.content}
    </p>
  )
}
