// import React,{Component} from 'react'
import React, {useState} from 'react';
import TodoElement from './conponent/ToDoElement'
import AddTodo from './conponent/AddTodo'

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
    const newTodo = { id: todoList.length,content:value }
    const newTodoList = [...todoList,newTodo];
    setTodoList(newTodoList);
    setValue("");
    console.log(`newtodo:[${newTodo}]`);
    console.log(`todoList:[${todoList}]`);
  }

  return (
    <div>
      <h1>todo</h1>
      <div>
          <AddTodo onChange={handleChange} add={add}/>
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
