import React, { Component } from 'react';

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
    const target = event.target;

    this.setState({
      inputValue: target.value
    })
  }

  handleButtonClick(event) {
    this.setState({
      inputValue: '',
      todoItems: [...this.state.todoItems, this.state.inputValue]
    })
  }

  handleItemDelete(index) {
    const todoItemsCopy = [...this.state.todoItems];
    todoItemsCopy.splice(index, 1);

    this.setState({
      todoItems: todoItemsCopy
    })
  }

  render() {
    function RenderTodoItems({items, onClick}) {
      const itemsList = items.map((item, index) => {
        return (
          <li key={index} onClick={() => onClick(index)} dangerouslySetInnerHTML={{__html: item}}></li>
        )
      })

      return (
        <ul>
          {itemsList}
        </ul>
      )
    }

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
