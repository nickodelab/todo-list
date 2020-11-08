import { combineReducers } from 'redux'

import { todoReducer } from './todo'

export const appReducer = combineReducers({
    todoList: todoReducer
})
