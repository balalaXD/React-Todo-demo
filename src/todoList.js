import React, { Component } from 'react';
import axios from 'axios';
import RenderTodoItems from './TodoItem';
import { Button, Input,
         Row, Col, Container } from 'reactstrap';

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

  componentDidMount() {
    axios.get('http://localhost:3002/db')
      .then((res) => {
        this.setState(() => ({todoItems: res.data.todoItems}))
      })
      .catch((err) => console.log("Fecth failed:\n", err))
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
        <Container>
          <Row>
            <Col md={{ size: 8 }}>
              <Input type="text" placeholder="Add your Todo here"
                value={this.state.inputValue}
                onChange={this.handleInputChange} />
            </Col>
            <Col md={{size: 2, offset: 0}}>
              <Button 
                onClick={this.handleButtonClick}
                color="primary"
                style={{width: '100%'}}>Add</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <RenderTodoItems items={this.state.todoItems} onClick={(index) => this.handleItemDelete(index)} />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default TodoList;
