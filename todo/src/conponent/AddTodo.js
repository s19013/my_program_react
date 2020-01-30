import React,{ Component } from 'react';

class AddTodo extends Component {
  onChange(e) {
    this.props.onChange({
      value:e.target.value,
    })
  }

  add() {
    const todoElement = {
      content: this.props.value,
      id: this.props.todoList.length + 1
    }
    this.props.add(todoElement)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.value}
          onChange={e => this.onChange(e)}
        />
        <button onClick={() => this.add()}>ok</button>
      </div>
    )
  }
}

export default AddTodo;
