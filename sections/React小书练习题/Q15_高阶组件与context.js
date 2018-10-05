/**
 * 思路：利用Context API来完成
 * 
 * 考察点：
 * 1、HOC的定义
 * 2、Context API(旧)
 */
const makeProvider = data => SrcCmponent => {
  return class WrappedComponent extends Component { // 高阶组件
    static childContextTypes = {
      data: PropTypes.any.isRequired
    }

    // 重写该方法
    getChildContext () {
      return {
        data
      }
    }

    render () {
      return <SrcCmponent {...this.props} />
    }
  }
}
