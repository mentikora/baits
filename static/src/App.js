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
        <BaitView 
          name="WOODOO" 
          weight="2.5g / 3g" 
          price="65" 
          description="Приманка універсальна за призначенням. Працює і в стоячих водоймах, і на течії. Гра розмашиста. Окрім рівномірної проводки, гарно відзивається на проводку з прискореннями, а також дуже ефективними є легкі ривочки під час проводки, періодичні збої в грі, паузи. Окремої уваги заслуговує проводка з опусканням на дно на кілька секунд з подальшим підривом і протяжкою в повільному темпі."
        />

      </div>
    );
  }
}

export default App;
