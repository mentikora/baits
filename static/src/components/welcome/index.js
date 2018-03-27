import React, { Component } from 'react';
import './styles.css';

class Welcome extends Component {
  render() {
    return (
      <section className="welcome">
        <div className="content">
          <div className="welcome__title">
            <p className="welcome__title--custom">
              Cu
              <span className="welcome__title--red">s</span>
              tom
            </p>
            <p className="welcome__title--normal">
              Bai
              <span className="welcome__title--green">t</span>
              s
            </p>
          </div>
        </div>
        <div className="scroll-down">
              <span className="scroll-down__mouse">
                <span>
                </span>
              </span>

        </div>
      </section>
    );
  }
}

export default Welcome;