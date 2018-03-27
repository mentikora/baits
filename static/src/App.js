import React, { Component } from 'react';
import './App.css';

import Welcome from './components/welcome';
import AboutDelivery from './components/about-delivery';
import AboutBaitTypes from './components/about-bait-types';
import BaitPreviewWrapper from './components/bait-preview-wrapper';

class App extends Component {
  render() {
    return (
      <div className="app-content">

      	{/* welcome section */}
        <Welcome />

      	{/* motto */}
        {/*<div className="motto-wrapper">
        	<div className="content">
        	  <p className="motto-wrapper__text">
        	    Приманка звісно сама рибу не ловить, але <b>#Custom_Baits</b> постарається зробити все для цього
        	  </p>
        	</div>
        </div>*/}

      	{/* baits overview section */}
        <BaitPreviewWrapper />

      	{/* about delivery section */}
        <AboutDelivery />

      	{/* about bait types section */}
      	<AboutBaitTypes />

      </div>
    );
  }
}

export default App;
