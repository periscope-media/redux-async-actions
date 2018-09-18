import c from './constants'

export const todos = (state = [], action) => {
  switch (action.type) {
    case c.ADD_TODO: return [
      ...state,
      action.todo
    ]
    default: return state
  }
}