import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './redux/stotre';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import AddTodoButton from './components/AddTodoButton';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h3>Todo List</h3>
        <TodoInput />
        <TodoList />
        <AddTodoButton />
      </div>
    </Provider>
  );
}

export default App;
