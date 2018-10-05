const assert = require('assert')
const { usersReducer, ACTION_TYPE } = require('../../sections/React小书练习题/Q16_实现UsersReducer.js')

describe(`测试users数组的reducer`, () => {
  let state
  beforeEach(() => {
    state = {
      users: [{
        username: 'root',
        age: 0,
        gender: 'male'
      }]
    }
  })

  it(`增`, () => {
    dispatch({
      type: ACTION_TYPE.ADD_USER,
      user: {
        username: 'Lucy',
        age: 12,
        gender: 'female'
      }
    })
    assert.equal(state.users.length, 2)
    assert.equal(state.users[1].username, 'Lucy')
  })

  it(`删`, () => {
    dispatch({
      type: ACTION_TYPE.DELETE_USER,
      index: 0 // 删除特定下标用户
    })
    assert.deepEqual(state.users, [])
  })

  it(`改1`, () => {
    dispatch({
      type: ACTION_TYPE.UPDATE_USER,
      index: 0,
      user: {
        username: 'Tomy',
        age: 12,
        gender: 'female'
      }
    })
    assert.deepEqual(state.users[0], {
      username: 'Tomy',
      age: 12,
      gender: 'female'
    })
  })

  it(`如果没有传入某个属性，那么它需要保持不变`, () => {
    dispatch({
      type: ACTION_TYPE.UPDATE_USER,
      index: 0,
      user: {
        username: 'Tomy',
        gender: 'female'
      }
    })
    assert.deepEqual(state.users[0], {
      username: 'Tomy',
      age: 0, // 该属性没有被覆盖，需要保持原有的
      gender: 'female'
    })
  })

  it(`未定义action，不会影响原state`, () => {
    let oldUsers = state.users
    dispatch({
      type: 'noneOfAnyType',
      index: 10,
      users: {}
    })
    assert.deepEqual(state.users, oldUsers)
  })

  function dispatch (action) {
    state.users = usersReducer(state.users, action)
  }
})