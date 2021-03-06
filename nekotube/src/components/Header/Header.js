import React, {Component} from 'react';

class Header extends Component {
  state = {keyword: ''};
  onInputChangeHandler = (e) => {
    this.setState({keyword: e.target.value})
    this.props.onkeywordChanged(e.target.value)
  }

  render(){
    return(
      <div style={{textAlign: 'center'}}>
        <div>
          <h2>NekoTube</h2>
        </div>
        <div>
          <input type="text" onChange={this.onInputChangeHandler} value={this.state.keyword}/>
        </div>
      </div>
    )
  }
}

export default Header;
