import _ from 'lodash';
import React, { Component } from 'react';
import logo from './logo.svg';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoDetail from './components/video-detail';
import VideoList from './components/video-list';
import './App.css';
import {API_KEY} from "./constants";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedVideo: null,
      videos: []
    };

    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, videos => {
      this.setState(
          {
            selectedVideo: videos[0],
            videos
          }
      );
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Youtube React</h1>
          <SearchBar onSearchTermChange = {videoSearch}/>
        </header>
        <div className="row">
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

export default App;
