import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
    return (
        <ul>
            {props.todoList.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
}

export default connect(mapStateToProps, null)(TodoList);