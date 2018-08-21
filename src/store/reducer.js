const defaultState = {
  inputValue: '',
  todoItems: ['1', '2', '3']
}

function deepCopy(json) {
  return JSON.parse(JSON.stringify(json));
}

export default (prevState = defaultState, action) => {
  if (action.type === 'change_input_value') {
    let newState = deepCopy(prevState)
    newState.inputValue = action.value

    return newState
  }

  if (action.type === 'add_todo_item') {
    let newState = deepCopy(prevState)
    newState.inputValue = ''
    newState.todoItems.push(action.value)

    return newState
  }

  return prevState
}
