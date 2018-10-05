/**
 * 事件的写法与注意事项(this指向)
 */

class Dog extends Component {
  bark () {
    console.log('bark')
  }
  
  run () {
    console.log('run')
  }

  // “狗被摸”事件
  // 使用arrow function，this指向Dog组件实例，而不会指向div元素
  onTouch = () => {
    this.bark()
    this.run()
  }
  
  render () {
    return (<div onClick={this.onTouch}>DOG</div>)
  }
}
