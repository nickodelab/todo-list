import { combineReducers } from 'redux'

import { todoReducer } from './todo'

export const appReducers = combineReducers({
    todoList: todoReducer
})
