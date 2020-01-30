import React,{ Component } from 'react';

class TodoElement extends Component {
  onDelete() {
    this.props.onDelete(this.props.element.id)
  }
  render(){
    return(
      <li>
        <span>{this.props.element.content}</span>
        <button onClick={() => this.onDelete}>del</button>
      </li>
    )
  }
}

export default TodoElement;
