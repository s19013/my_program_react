import React,{ Component } from 'react';

const TodoElement = props => {
  return(
    <li>
      {props.content}
      <button onClick={props.onDelete}>delete</button>
    </li>
  )
}


export default TodoElement;
