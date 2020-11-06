import { SET_CREATE_ITEM, clearInput } from '../actions/todo'

export const todoMiddleware = ({ dispatch }) => next => action => {
    next(action)

    switch (action.type) {
        case SET_CREATE_ITEM:
            dispatch(clearInput())
            break
        default:
            break
    }
}
