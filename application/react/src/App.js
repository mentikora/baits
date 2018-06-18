import React, { Component } from 'react';
import './App.css';

import { VsoProvider } from './contexts/vso';
import Layout from './components/layout';

class App extends Component {
  render() {
    return (
      <VsoProvider>
        <Layout />
      </VsoProvider>
    );
  }
}

export default App;
