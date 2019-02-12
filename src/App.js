import React, { Component } from 'react';
import './App.css';

import StickyBar from './components/StickyBar';
import Nav from './components/Nav';
import Content from './components/Content';

class App extends Component {
  componentDidMount(){
    var fullscreenButtonContainer = document.getElementById('fullscreenButtonContainer');
    fullscreenButtonContainer.innerHTML = '<button id=\'fullscreenButton\' onclick=\'toggleFullscreen();\'><i class="far fa-expand-arrows-alt fa-2x"></i></button>';
  }

  render() {
    return (
        <div className="App">
            <StickyBar />
            <div className='middle'>
              <Nav />
              <Content />
            </div>
        </div>
    );
  }
}

export default App;
