/**
 * 怎么去设计组件？参考：https://reactjs.org/docs/thinking-in-react.html
 */

// UI组件/纯函数组件
let Input = props => (
  <div>
    <input type="number" value={props.value} onChange={e => props.onChange(e.target.value)} />
  </div>
)

// UI组件/纯函数组件
let PercentageShower = props => (
  <div>
    {props.value}
  </div>
)

/**
 * 容器组件(带state)
 */
class PercentageApp extends Component {
  state = {
    input: '',
    output: ''
  }

  onChange = newVal => {
    let input = newVal
    let output = (input * 100).toFixed(2) + '%'
    this.setState({
      input,
      output
    })
  }

  render () {
    return (
      <div>
        <Input value={this.state.input} onChange={this.onChange} />
        <PercentageShower value={this.state.output} />
      </div>
    )
  }
}
