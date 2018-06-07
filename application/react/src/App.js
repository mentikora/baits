import React, { Component } from 'react';
import './App.css';

import { VsoProvider } from './contexts/vso'

import { BrowserRouter, Route } from 'react-router-dom';

import BaitView from './components/bait-view';
import Homepage from './components/homepage';

import Logo from './components/logo';
import Socials from './components/socials';

class App extends Component {
  render() {
    return (
      <VsoProvider>
        <div className="app-content">

          {/* header */}
          <header className="header">
            <div className="content">
              <Logo />
              <Socials />
            </div>
          </header>
          
          <BrowserRouter>
            <div>
              <Route exact path="/" component={Homepage} />
              <Route exact
                path="/baits/:name" 
                component={BaitView}
              />
            </div>
          </BrowserRouter>
          
          <div className="prefooter">
            <h2 className="prefooter__title heading-2 title-style">
              Бажаєте спробувати нашу продукцію?
            </h2>
            <p className="prefooter__text text-style">
              Ми раді надати Вам будь-яку інформацію стосовно нашої продукції
              <br />
              <span>
                +38 (050) 999 99 99 Микола
              </span>
            </p>
            <a href="https://google.com" className="btn">
              Написати нам
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
      </VsoProvider>
    );
  }
}

export default App;
