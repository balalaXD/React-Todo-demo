import React, { Component } from 'react';
import RenderTodoItems from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      inputValue: '',
      todoItems: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    // WRONG if you write this one:  {inputValue: event.target.value} cause event pooling
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleButtonClick(event) {
    this.setState((prevState) => ({
      inputValue: '',
      todoItems: [...prevState.todoItems, prevState.inputValue]
    }))
  }

  handleItemDelete(index) {
    this.setState((prevState) => {
      const todoItemsCopy = [...prevState.todoItems];
      todoItemsCopy.splice(index, 1);

      return { todoItems: todoItemsCopy }
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <input type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}/>
          <button onClick={this.handleButtonClick}>Add</button>
        </div>
        <RenderTodoItems items={this.state.todoItems} onClick={(index) => this.handleItemDelete(index)} />
      </React.Fragment>
    );
  }
}

export default TodoList;
