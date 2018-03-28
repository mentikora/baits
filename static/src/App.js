import React, { Component } from 'react';
import './App.css';

import Welcome from './components/welcome';
import AboutDelivery from './components/about-delivery';
import AboutBaitTypes from './components/about-bait-types';
import BaitPreviewWrapper from './components/bait-preview-wrapper';
import BaitView from './components/bait-view';

class App extends Component {
  render() {
    return (
      <div className="app-content">

      	{/* welcome section */}
        <Welcome />

      	{/* baits overview section */}
        <BaitPreviewWrapper />

      	{/* about delivery section */}
        <AboutDelivery />

      	{/* about bait types section */}
      	<AboutBaitTypes />

        {/* bait view */}
        <BaitView />

      </div>
    );
  }
}

export default App;
