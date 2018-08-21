import React, { Component } from 'react';
import store from './store/index';
import { getTodoListAction, getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator';
import TodoItemUI from './TodoItemUI';

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);

    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  componentDidMount() {
    const action = getTodoListAction()
    store.dispatch(action)
  }

  handleInputChange(event) {
    const action = getInputChangeAction(event.target.value);
    store.dispatch(action);
  }

  handleButtonClick(event) {
    const action = getAddItemAction(this.state.inputValue);
    store.dispatch(action);
  }

  handleItemDelete(index) {
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState());
  }

  render() {
    return (
      <TodoItemUI
        inputValue={this.state.inputValue}
        todoItems={this.state.todoItems}
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        handleItemDelete={this.handleItemDelete}/>
    );
  }
}

export default TodoList;
