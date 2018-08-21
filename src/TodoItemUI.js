import React, { Component } from 'react';
import { Button, Input,
         Row, Col, Container } from 'reactstrap';
import RenderTodoItems from './TodoItem';

class TodoItemUI extends Component {
  render () {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col md={{ size: 8 }}>
              <Input type="text" placeholder="Add your Todo here"
                value={this.props.inputValue}
                onChange={this.props.handleInputChange} />
            </Col>
            <Col md={{size: 2, offset: 0}}>
              <Button 
                onClick={this.props.handleButtonClick}
                color="primary"
                style={{width: '100%'}}>Add</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <RenderTodoItems items={this.props.todoItems} onClick={(index) => this.props.handleItemDelete(index)} />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default TodoItemUI;
