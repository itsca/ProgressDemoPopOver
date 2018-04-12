import React, { Component } from 'react';
import './App.css';

import {
  Overlay, 
  Tooltip, 
  Button
} from 'react-bootstrap'

import MyProgress from './components/myProgress/myProgress.jsx'

class App extends Component {
  handleMyProgressClicked() {
    console.log('myprogressclicked'); 
  }
  render() {
    return (
      <main className="App">
        <MyProgress userProgress={56} maxPorgress={125} />
      </main>
    );
  }
}

export default App;
