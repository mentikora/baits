import React, { Component } from 'react';
import './App.css';

import Welcome from './components/welcome';
import About from './components/about';
import BaitWrapper from './components/bait-wrapper';

class App extends Component {
  render() {
    return (
      <div className="app-content">
        <Welcome />
        <About />
        <BaitWrapper />
      </div>
    );
  }
}

export default App;
