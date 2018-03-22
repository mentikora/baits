import React, { Component } from 'react';
import './App.css';

import WelcomeBoard from './components/welcome-board';
import AboutBoard from './components/about-board';

class App extends Component {
  render() {
    return (
      <div className="app-content">
        <WelcomeBoard />
        <hr />
        <AboutBoard />
      </div>
    );
  }
}

export default App;
