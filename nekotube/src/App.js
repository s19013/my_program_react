import React, { Component } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Item from './components/Video/Item/Item'
import List from './components/Video/List/List'
import Video from './components/Video/Video'
import YSearch from 'youtube-api-search';

const API = 'AIzaSyDFkF-hZoXzaxi9niUPD9xBfnn1wbrKOEY'

class App extends Component {
  state = {videos: [],
    selectedVideo: null
  }
  componentDidMount(){
    YSearch({ key: API, term: '猫'}, (data) => {
      this.setState({videos: data,selectedVideo:data[2]});
    });
    console.log("componentDidMount");
  }
  render() {
    return (
      <div className = "App">
        <Header/>
        <Body>
          <Video video={this.state.selectedVideo} />
          <List videos={this.state.videos}/>

        </Body>
      </div>
    )
  }
}

export default App
