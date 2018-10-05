const COMPUTER_STATUS = {
  OFF: 'off',
  ON: 'on'
}

class Computer extends Component {
  constructor () {
    super()
    this.state = {
      status: COMPUTER_STATUS.OFF
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState(({ status: prevStatus }) => ({
      status: prevStatus === COMPUTER_STATUS.ON ? COMPUTER_STATUS.OFF : COMPUTER_STATUS.ON // 与上一个status相反
    }))
  }

  render () {
    const screenContent = this.state.status === COMPUTER_STATUS.ON ? '显示器亮了' : '显示器关了'
    return (
      <div>
        <button onClick={this.toggle}>开关</button>
        <Screen showContent={screenContent} />
      </div>
    )
  }
}

/**
 * 屏幕，为纯函数组件，因为只负责显示(双关^_^)
 */
class Screen extends Component {
  // defaultProps用来设置props的属性的默认值
  static defaultProps = {
    showContent: '无内容'
  }

  render () {
    const { showContent } = this.props
    return (
    <div className='screen'>
      { showContent }
    </div>
    )
  }
}
