
import { SET_CREATE_ITEM, SET_CLEAR_INPUT, SET_ON_CHANGE_INPUT_CONTENT, UPDATE_ITEM } from '../actions/todo'

const todoListInitialState = {
    items: [],
    title: 'My Todo List',
    inputContent: ''
}

export function todoReducer(state = todoListInitialState, action) {
    switch (action.type) {
        case SET_CREATE_ITEM:
            return {
                ...state,
                items: [...state.items, { id: parseInt((Math.random() * 1000), 10).toString(), content: action.payload.trim(), completed: false }]
            }
        case SET_CLEAR_INPUT:
            return {
                ...state,
                inputContent: todoListInitialState.inputContent
            }
        case SET_ON_CHANGE_INPUT_CONTENT: 
            return {
                ...state,
                inputContent: action.payload
            }
        case UPDATE_ITEM: 
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ? { ...item, content: action.payload.content } : item)
            }      
        default:
            return state
            break
    }  
}

export const selectorItemById = (items, props) => items.find(({ id }) => id === props.itemId)
