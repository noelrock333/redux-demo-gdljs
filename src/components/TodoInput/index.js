import React from 'react';
import { connect } from 'react-redux';
import { setTodoItem, addTodo } from '../../redux/actions/todo';

const TodoInput = ({ addTodo, setTodoItem, todoItem }) => {
    return (
        <form onSubmit={(ev) => { ev.preventDefault(); addTodo() }}>
            <input
                type="text"
                value={todoItem}
                placeholder="Todo item"
                onChange={(ev) => setTodoItem(ev.target.value)}
            />
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        todoItem: state.todoItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTodoItem: (text) => dispatch(setTodoItem(text)),
        addTodo: () => dispatch(addTodo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);