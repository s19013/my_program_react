import React,{ Component } from 'react';

class CountApp extends Component{
  // constructor() {
  // }

  render(){
    return (
      <div>
        <h1>カウンター</h1>
        <p>0</p>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
    );
  }
}

export default CountApp;
