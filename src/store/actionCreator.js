import ACTIONTYPES from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = (inputValue) => ({
  type: ACTIONTYPES.CHANGE_INPUT_VALUE,
  value: inputValue
})

export const getAddItemAction = () => ({
  type: ACTIONTYPES.ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: ACTIONTYPES.DELETE_TODO_ITEM,
  value: index
})

export const initListAction = (data) => ({
  type: ACTIONTYPES.INIT_LIST,
  value: data
})

// redux-thunk demo
export const getInitListAction_V1 = () => {
  return (dispatch) => {
    axios.get('http://localhost:3002/db')
    .then((res) => {
      const action = initListAction(res.data.todoItems);
      dispatch(action);
    })
    .catch((err) => console.log("Fecth failed:\n", err))
  }
}

// saga demo
export const getInitListAction_V2 = () => ({
  type: ACTIONTYPES.GET_INIT_LIST
})
