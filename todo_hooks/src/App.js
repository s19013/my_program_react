// import React,{Component} from 'react'
import React, {useState} from 'react';
import TodoElement from './conponent/ToDoElement'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import AddTodo from './conponent/AddTodo'

const App =() => {
  const [value,setValue] = useState("");
  const [todoList,setTodoList] = useState([]);

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue)
  };

  const handleDelete = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id)
    setTodoList(newTodoList)
  }

  const add = () => {
    const newTodo = { id: todoList.length, content:value }
    const newTodoList = [...todoList,newTodo];
    setTodoList(newTodoList);
    setValue("");
    console.log(value);
  };

  return (
    <div>
      <h1>todo</h1>
      <div>
        <TextField label="what will do?" value={value} onChange={handleChange}/>
        {/*<input type="text" value={value} onChange={handleChange}/>*/}
        {/*<button onClick={add}>add</button>*/}
        <Button variant="contained" color="secondary" onClick={add}>
          ADD
        </Button>
          {/* <AddTodo onChange={handleChange} add={add}/> */}
        <ul>
          {todoList.map((todo) => (
            <TodoElement
              key={todo.id}
              content={todo.content}
              onDelete={() => handleDelete(todo.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App;
