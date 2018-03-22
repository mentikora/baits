import React, { Component } from 'react';
import './App.css';

import Welcome from './components/welcome';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <div className="app-content">
        <Welcome />
        <hr />
        <About />
      </div>
    );
  }
}

export default App;
