import React, { Component } from 'react';
import './App.css';

import WelcomeSection from './components/welcome';
import AboutBaitTypes from './components/about-bait-types';
import BaitPreviewWrapper from './components/bait-preview-wrapper';
// import BaitView from './components/bait-view';
import BaitColors from './components/bait-colors';
import Logo from './components/logo';
import Socials from './components/socials';
import Delivery from './components/delivery';

class App extends Component {
  render() {
    return (
      <div className="app-content">

        {/* header */}
        <header className="header">
          <div className="content">
            <Logo />
            <Socials />
          </div>
        </header>

      	{/* welcome section */}
        <WelcomeSection />

      	{/* baits overview section */}
        <BaitPreviewWrapper />

        {/* about bait types section */}
      	<AboutBaitTypes />

        {/* bait colors overview */}
        <BaitColors />

      	{/* about delivery section */}
        <Delivery />

        {/* bait view */}
        {/* <BaitView 
          name="WOODOO" 
          weight="2.5g / 3g" 
          price="65" 
          description="Приманка універсальна за призначенням. Працює і в стоячих водоймах, і на течії. Гра розмашиста. Окрім рівномірної проводки, гарно відзивається на проводку з прискореннями, а також дуже ефективними є легкі ривочки під час проводки, періодичні збої в грі, паузи. Окремої уваги заслуговує проводка з опусканням на дно на кілька секунд з подальшим підривом і протяжкою в повільному темпі."
        /> */}
        
        <div className="prefooter">
          <h2 className="prefooter__title heading-2 title-style">
            Бажаєте спробувати нашу продукцію?
          </h2>
          <p className="prefooter__text text-style">
            Ми раді надати Вам будь-яку інформацію стосовно нашої продукції
            <br />
            +38 (050) 999 99 99 Микола
          </p>
          <a href="https://google.com">
            Call
          </a>
        </div>
        <footer className="footer">
          <div>
            <Logo />
          </div>
          <div>
            <Socials />
          </div>
          <div>
            <p className="footer__copyrights">
              &copy; 2018 All rights Reserved - Custom Baits. 
            </p>
          </div>
        </footer>

      </div>
    );
  }
}

export default App;
