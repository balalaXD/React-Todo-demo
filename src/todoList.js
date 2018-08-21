import React, { Component } from 'react';
import axios from 'axios';
import RenderTodoItems from './TodoItem';
import { Button, Input,
         Row, Col, Container } from 'reactstrap';
import store from './store/index';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator'

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
    // axios.get('http://localhost:3002/db')
    //   .then((res) => {
    //     this.setState(() => ({todoItems: res.data.todoItems}))
    //   })
    //   .catch((err) => console.log("Fecth failed:\n", err))
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
