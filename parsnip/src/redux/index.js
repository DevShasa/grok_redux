import { createStore } from 'redux'
import tasks from './reducer'

const store = createStore(tasks)
export default store 