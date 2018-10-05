
/**
 * 由题可知，两者都是纯函数组件
 */

// 课程组件
class Lesson extends Component {
  onClick = _ => {
    const { index, lesson: { title } } = this.props
    console.log(`${index} - ${title}`)
  }

  render () {
    const { lesson } = this.props
    return (
      <div onClick={this.onClick}>
        <h1>{ lesson.title }</h1>
        <p>{ lesson.description }</p>
      </div>
    )
  }
}

// 课程列表组件
let LessonsList = ({ lessons }) => {
  return (
    <div>
    {
      lessons.map((lesson, index) => (
        <Lesson lesson={lesson} key={index} index={index} />
      ))
    }
    </div>
  )
}
