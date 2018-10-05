/**
 * 1、对this.props.children的应用
 * 2、在渲染时(render函数内)添加样式
 */
class BlackBorderContainer extends Component {
  render () {
    const { children } = this.props
    if (!children) { // 应对没有children时
      return <div></div>
    }
    return (
      <div>
      {
        children.map((child, i) => (
          // 用div包裹，因为不能直接修改child的style(它是read-only的)
          <div style={{ border: '1px solid black' }} key={i}>
            {child}
          </div>
        ))
      }
      </div>
    )
  }
}
