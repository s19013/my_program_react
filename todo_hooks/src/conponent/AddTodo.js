import React,{ Component } from 'react';

const AddTodo = props => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.onChange}/>
      <button onClick={props.add}>add</button>
    </div>
  )
}

export default AddTodo;
