import React,{useState} from 'react';

const CountApp_hook = () => {
  const [count,setCount] = useState(0);

  const plus = () => {
    setCount(count + 1 )
  }

  const minus = () => {
    setCount(count - 1)
  }


  return (
    <div>
      <h1>counter</h1>
      <p>{count}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  )
}


export default CountApp_hook;
