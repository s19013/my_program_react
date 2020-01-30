// import React,{Component} from 'react'
import React, {useState} from 'react';


const App =() => {
  const [value,setValue] = useState("");
  const [todoList,setTodoList] = useState([])

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue)
  };

  const add = () => {
    const newTodo = [...todoList,value];
    setTodoList(newTodo);
  }

  console.log(todoList);

  return (
    <div>
      <h1>todo</h1>
      <div>
        <input
          type="text"
          value={value}
          onChange={handleChange}
        />
        <p>{value}</p>
        <button onClick={add}>add</button>
      </div>
    </div>
  )
}

export default App;
