/**
 * 考察在异步API(如setTimeout)的回调中使用setState，
 * 因为网络请求结束后，会有这样的操作
 */

var timefly = (ms) => new Promise((resolve, reject) => { setTimeout(resolve, ms) })

class Dog extends Component {
  constructor () {
    super()
    this.state = {
      isRunning: false,
      isBarking: false
    }
  }

  bark () {
    this.setState({ isBarking: true })
  }

  run () {
    this.setState({ isRunning: true })
  }

  onTouch = async () => {
    this.bark()
    this.run()
    await timefly(25)
    this.setState({
      isBarking: false,
      isRunning: false
    })
  }

  render () {
    return (<div onClick={this.onTouch}>DOG</div>)
  }
}
