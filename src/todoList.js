import React from 'react';
import { connect } from 'react-redux';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreator';
import TodoItemUI from './TodoItemUI';

const TodoList = (props) => {
  return (
    <TodoItemUI
      inputValue={props.inputValue}
      todoItems={props.todoItems}
      handleInputChange={props.changeInputValue}
      handleButtonClick={props.handleButtonClick}
      handleItemDelete={props.handleItemDelete}/>
  );
}

const mapStateToProps = (state) => {
  return {
    todoItems: state.todoItems,
    inputValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeInputValue (event) {
      const action = getInputChangeAction(event.target.value);
      dispatch(action);
    },
    handleButtonClick (event) {
      const action = getAddItemAction();
      dispatch(action);
    },
    handleItemDelete (index) {
      const action = getDeleteItemAction(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
