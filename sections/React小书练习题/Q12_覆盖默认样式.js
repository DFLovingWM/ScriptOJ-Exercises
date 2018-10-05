/**
 * 1、利用HOC。不过是写死了返回一个p元素。
 * 2、在render中将defaultStyle和this.props.style这两个对象合并作为最终的style就好。
 */
var getDefaultStyledPost = defaultStyle => {
  return class extends Component {
    render () {
      // 合并“默认样式”和“新样式”
      const style = {
        ...defaultStyle,
        ...this.props.style
      }
      return <p {...this.props} style={style}></p>
    }
  }
}

// 纯函数组件版本
var getDefaultStyledPost = defaultStyle => props => <p style={{ ...defaultStyle, ...props.style }}></p>
