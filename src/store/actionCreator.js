import ACTIONTYPES from './actionTypes'

export const getInputChangeAction = (inputValue) => ({
  type: ACTIONTYPES.CHANGE_INPUT_VALUE,
  value: inputValue
})

export const getAddItemAction = (inputValue) => ({
  type: ACTIONTYPES.ADD_TODO_ITEM,
  value: inputValue
})

export const getDeleteItemAction = (index) => ({
  type: ACTIONTYPES.DELETE_TODO_ITEM,
  value: index
})

export const getInitListAction = (data) => ({
  type: ACTIONTYPES.INIT_LIST_ACTION,
  value: data
})
