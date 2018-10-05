/**
 * 考察简单的组件请求网络的写法
 */
class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {
      content: ''
    }
    this.onRefresh = this.onRefresh.bind(this)
  }

  async onRefresh () {
    this.setState({
      content: '数据加载中...'
    })
    const content = await getPostData()
    this.setState({
      content
    })
  }

  async componentDidMount () {
    // 刚进入组件就请求数据
    await this.onRefresh()
  }

  render () {
    return (
      <div>
        <div className='post-content'>{ this.state.content }</div>
        <button onClick={this.onRefresh}>刷新</button>
      </div>
    )
  }
}
