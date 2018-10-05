const ACTION_TYPE = {
  ADD_USER: 'ADD_USER',
  DELETE_USER: 'DELETE_USER',
  UPDATE_USER: 'UPDATE_USER'
}

function usersReducer (users = [], { type, index, user }) {
  switch (type) {
    case ACTION_TYPE.ADD_USER:
      // users.push(user) // 不允许，因为push是mutate的
      users = [...users, user]
      break
    case ACTION_TYPE.DELETE_USER:
      // users.splice(0, 1) // 不允许，因为splice是mutate的
      users = [...users.slice(0, index), ...users.slice(index + 1)]
      break
    case ACTION_TYPE.UPDATE_USER:
      // users[index] = user // 不允许，这样也会原地(in-place)修改users数组
      users = [
        ...users.slice(0, index), 
        { ...users[index], ...user }, // 是“追加”而不是“重写”
        ...users.slice(index + 1)
      ]
      break
    default:
      break
  }
  return users
}


/**
 * User[纯展示组件]
 */
let User = ({ user, onDelete, index }) => (
  <div>
    <div>Name: {user.username}</div>
    <div>Age: {user.age}</div>
    <div>Gender: {user.gender}</div>
    <button onClick={_ => onDelete(index)}>删除</button>
  </div>
)

/**
 * UserList：表单+用户列表
 */
class UsersList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newUser: {
        username: '',
        age: 0,
        gender: ''
      }
    }
  }

  /**
   * 表单所有field的change回调共用这一个方法
   * 参考：https://reactjs.org/docs/forms.html#handling-multiple-inputs
   */
  onChangeField = (event) => {
    let { name, value } = event.target
    if (name === 'age') {
      value = Number(value) // 年龄最好转化为数字
    }
    this.setState({
      newUser: {
        ...this.state.newUser,
        [name]: value
      }
    })
  }

  render () {
    const { newUser } = this.state
    const { users } = this.props
    const { addUser, deleteUser } = this.props
    return (
      <div>
        <div className='add-user' onChange={this.onChangeField}>
          <div>Username: 
            <input type='text' value={newUser.username} name="username" />
          </div>
          <div>Age: 
            <input type='number' value={newUser.age} name="age" />
          </div>
          {/* 事件冒泡，如此不必给每一个radio都绑定一个回调函数实例；或将函数定义写在类中 */}
          <div>Gender:
            <label>Male: 
              <input type='radio' name='gender' value='male'/>
            </label>
            <label>Female: 
              <input type='radio' name='gender' value='female'/>
            </label>
          </div>
          <button onClick={_ => addUser(newUser)}>增加</button>
        </div>

        <div className='users-list'>
        {
          users.map((user, index) => (
            // Q：请问这里如何利用事件冒泡让所有item复用同一个函数实例(以避免性能损失)？
            // A：传递index是可选的。但这里选择传递，就是为了可以共用函数实例(有点绕，思考一下)。
            <User user={user} index={index} onDelete={deleteUser} key={index} />
          ))
        }
        </div>
      </div>
    )
  }
}

/**
 * 数据映射：redux.data => component.props
 */
const mapStateToProps = (state, props) => {
  return {
    users: state
  }
}

/**
 * 行为映射：dispatch => props
 */
const mapDispatchToProps = (dispatch, props) => {
  return {
    addUser: (user) => {
      dispatch({
        type: 'ADD_USER',
        user
      })
    },
    deleteUser: (index) => {
      dispatch({
        type: 'DELETE_USER',
        index
      })
    }
  }
}

UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList) // 生成容器组件，它与redux建立连接
