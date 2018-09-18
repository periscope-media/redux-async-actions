import c from './constants'

export const addTodo = (todo) => {
  return {
    type: c.ADD_TODO,
    todo: {
      ...todo,
      complete: false
    }
  }
}