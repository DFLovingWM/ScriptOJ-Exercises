/**
 * 理念：
 * 1、将组件请求网络数据(load & refresh)的行为，抽离到HOC中
 * 2、如果组件需要调用新的函数，HOC可以将函数通过props传给组件
 */
const loadAndRefresh = url => TargetComponent => {
  return class WrappedComponent extends Component {
    constructor (props) {
      super(props)
      // 定义state
      this.state = {
        content: ''
      }
      // 定义常量
      this.LOADING_TEXT = '数据加载中...'
      // 绑定函数this
      this.onRefresh = this.onRefresh.bind(this)
    }

    onRefresh = () => {
      this.setState({
        content: this.LOADING_TEXT
      })
      getData(url).then(content => {
        this.setState({
          content
        })
      })
    }

    componentDidMount () {
      this.onRefresh()
    }

    render () {
      return <TargetComponent {...this.props} content={this.state.content} refresh={this.onRefresh} />
    }
  }
}