import React from 'react';

import TodoItem from '../TodoItem';

const Todo = (props) => (
  <div>
    <h1>To do:</h1>
    <ul>
      {props.todos.map((todo, index) => (
        <TodoItem key={index} {...todo} onDelete={props.onDeleteItem} />
      ))}
    </ul>
  </div>
);

export default Todo;