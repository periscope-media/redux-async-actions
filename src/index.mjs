import storeFactory from './store/store'
import { addTodo } from './store/actions'

const store = storeFactory()

store.dispatch(addTodo({
  title: "research merkle dag"
}))