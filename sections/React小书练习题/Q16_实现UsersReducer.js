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

module.exports = {
  ACTION_TYPE,
  usersReducer
}
