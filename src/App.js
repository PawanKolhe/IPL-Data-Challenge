import React, { Component } from 'react';
import './App.css';

import StickyBar from './components/sticky-bar/sticky-bar.component';
import Nav from './components/navigation/navigation.component';
import Content from './components/content/content.component';

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
