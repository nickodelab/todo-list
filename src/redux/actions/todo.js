
export const TODO_LIST = '[TODO_LIST]'
export const SET_CREATE_ITEM = `${TODO_LIST} SET_CREATE_ITEM`
export const UPDATE_ITEM = `${TODO_LIST} UPDATE_ITEM`
export const SET_CLEAR_INPUT = `${TODO_LIST} SET_CLEAR_INPUT`
export const SET_ON_CHANGE_INPUT_CONTENT = `${TODO_LIST} SET_ON_CHANGE_INPUT_CONTENT`
export const ON_EDIT = `${TODO_LIST} ON_EDIT`

export const createItem = item => ({
    type: SET_CREATE_ITEM,
    payload: item
})

export const updateItem = newItem => ({
    type: UPDATE_ITEM,
    payload: newItem,
})

export const clearInput = () => ({
    type: SET_CLEAR_INPUT
})

export const onChangeInputContent = inputContent => ({
    type: SET_ON_CHANGE_INPUT_CONTENT,
    payload: inputContent
})

export const onEdit = itemId => ({
    type: ON_EDIT,
    payload: itemId
})
