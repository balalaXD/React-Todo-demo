import ACTIONTYPES from './actionTypes';

const defaultState = {
  inputValue: '',
  todoItems: ['1', '2', '3']
}

function deepCopy(json) {
  return JSON.parse(JSON.stringify(json));
}

export default (prevState = defaultState, action) => {
  if (action.type === ACTIONTYPES.CHANGE_INPUT_VALUE) {
    let newState = deepCopy(prevState)
    newState.inputValue = action.value

    return newState
  }

  if (action.type === ACTIONTYPES.ADD_TODO_ITEM) {
    let newState = deepCopy(prevState)
    newState.inputValue = ''
    newState.todoItems.push(action.value)

    return newState
  }

  if (action.type === ACTIONTYPES.DELETE_TODO_ITEM) {
    let newState = deepCopy(prevState)
    newState.todoItems.splice(action.value, 1)

    return newState
  }

  return prevState
}
