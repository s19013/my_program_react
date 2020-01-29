import React,{ Component } from 'react';

class CountApp extends Component{
  constructor() {
    super()
    this.state = {
      count:0
    }
  }
  plus() {
    this.setState({count:this.state.count + 1})
  }

  minus() {
    this.setState({count:this.state.count - 1})
  }
  render(){
    return (
      <div>
        <h1>カウンター</h1>
        <p>{this.state.count}</p>
        <div>
          <button onClick={() => this.plus()}>+</button>
          {/*<button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button> */}
          <button onClick={() => this.minus()}>-</button>
          {/*<button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button> */}
        </div>
      </div>
    );
  }
}

export default CountApp;
