import React, { Component } from 'react';
import './styles.css';

class Welcome extends Component {
  render() {
    return (
      <section className="welcome">
        <div className="content">
          <h1 className="welcome__title">
            cu
            <span className="welcome__title--red">s</span>
            tom
            <br />
            bai
            <span className="welcome__title--green">t</span>
            s
          </h1>
        </div>
      </section>
    );
  }
}

export default Welcome;