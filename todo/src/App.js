import React,{Component} from 'react';

// クラスベース
class  App extends Component {
  constructor() {
    super()
    this.state={
      todoList: [],
      value: "",
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
  }

  // 追加
  add() {
    this.setState({
      todoList: this.state.todoList.concat(this.state.value),
      value:"",
    })
  }

  render() {
    return (
      <div>
        <h1>TODO App</h1>
        <div>
          <input
            type="text"
            value={this.state.value}
            onChange={e => this.handleChange(e)}
          />
        </div>
        <button onClick={() => this.add()}>追加</button>
          <ul>
            {this.state.todoList.map((todo, i) => (
              <TodoElement key={index} content={todo} />
            ))}
          </ul>
      </div>
    );
  }
}

export default App;
