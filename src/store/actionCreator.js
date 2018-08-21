import ACTIONTYPES from './actionTypes'
import axios from 'axios'

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

export const getTodoListAction = () => {
  return (dispatch) => {
    axios.get('http://localhost:3002/db')
    .then((res) => {
      const action = getInitListAction(res.data.todoItems);
      dispatch(action);
    })
    .catch((err) => console.log("Fecth failed:\n", err))
  }
}
