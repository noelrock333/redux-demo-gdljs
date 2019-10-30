import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions/todo';


const AddTodoButton = ({ addTodo }) => {
  return (
    <button onClick={addTodo}>Add item</button>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
      addTodo: () => dispatch(addTodo())
  }
}

export default connect(null, mapDispatchToProps)(AddTodoButton);