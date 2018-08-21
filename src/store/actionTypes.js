var handler = {
  get: function(obj, prop) {
    if (prop in obj)
      return obj[prop]
    throw new TypeError(`undefined of property: ${prop}`)
  }
};

export default new Proxy({
  CHANGE_INPUT_VALUE: 'change_input_value',
  ADD_TODO_ITEM: 'add_todo_item',
  DELETE_TODO_ITEM: 'remove_todo_item',
  INIT_LIST_ACTION: 'init_list_action'
}, handler);
