import React from 'react';
import { Button, Input,
         Row, Col, Container } from 'reactstrap';
import RenderTodoItems from './TodoItem';

const TodoItemUI = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row>
          <Col md={{ size: 8 }}>
            <Input type="text" placeholder="Add your Todo here"
              value={props.inputValue}
              onChange={props.handleInputChange} />
          </Col>
          <Col md={{size: 2, offset: 0}}>
            <Button 
              onClick={props.handleButtonClick}
              color="primary"
              style={{width: '100%'}}>Add</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <RenderTodoItems items={props.todoItems} onClick={(index) => props.handleItemDelete(index)} />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default TodoItemUI;
