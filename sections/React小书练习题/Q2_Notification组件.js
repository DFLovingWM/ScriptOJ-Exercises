/**
 * 条件渲染，在render中进行分支判断
 */
class Notification extends Component {
  render () {
    let count = getNotificationsCount()
    let content = count > 0 ? `有(${count})条未读消息` : '没有未读消息'
    return (
      <span>{ content }</span>
    )
  }
}
