import React from 'react';
//props.finished
const TodoItem = (props) => {
  const bgColor = props.finished ? 'green' : 'white';
  console.log(props);

  return (
    <li style={{ backgroundColor: bgColor }}>
      {props.label} <button onClick={() => props.onDelete(props.id)}>X</button>
    </li>
  )
};

export default TodoItem;