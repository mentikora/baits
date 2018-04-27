import React, { Component } from 'react';
import './styles.css';

import Logo from '../../components/logo';
import Socials from '../../components/socials';

class Welcome extends Component {
  render() {
    return (
      <section className="welcome">

        {/*<div className="socials-wrapper">
          <ul className="socials">
            <li>
              <a href="1">
                <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='49.652' height='49.652'
                viewBox='0 0 49.652 49.652'>
                    <path d='M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826 C49.652,11.137,38.516,0,24.826,0z M31,25.7h-4.039c0,6.453,0,14.396,0,14.396h-5.985c0,0,0-7.866,0-14.396h-2.845v-5.088h2.845 v-3.291c0-2.357,1.12-6.04,6.04-6.04l4.435,0.017v4.939c0,0-2.695,0-3.219,0c-0.524,0-1.269,0.262-1.269,1.386v2.99h4.56L31,25.7z'
                    />
                </svg>
              </a>
            </li>
            <li>
              <a href="1">
                <svg id='Layer_1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 310 310'>
                    <g id='XMLID_822_'>
                        <path id='XMLID_823_' d='M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938 C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527 C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991 c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764 c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861 C204.394,157.263,202.325,160.684,199.021,162.41z'
                        />
                    </g>
                </svg>
              </a>
            </li>
            <li>
              <a href="1">
                <svg id='Capa_1' xmlns='http://www.w3.org/2000/svg' width='49.652' height='49.652'
                viewBox='0 0 49.652 49.652'>
                    <path d='M24.825,29.796c2.739,0,4.972-2.229,4.972-4.97c0-1.082-0.354-2.081-0.94-2.897c-0.903-1.252-2.371-2.073-4.029-2.073 c-1.659,0-3.126,0.82-4.031,2.072c-0.588,0.816-0.939,1.815-0.94,2.897C19.854,27.566,22.085,29.796,24.825,29.796z'
                    />
                    <polygon points='35.678,18.746 35.678,14.58 35.678,13.96 35.055,13.962 30.891,13.975 30.907,18.762'
                    />
                    <path d='M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826 C49.652,11.137,38.516,0,24.826,0z M38.945,21.929v11.56c0,3.011-2.448,5.458-5.457,5.458H16.164 c-3.01,0-5.457-2.447-5.457-5.458v-11.56v-5.764c0-3.01,2.447-5.457,5.457-5.457h17.323c3.01,0,5.458,2.447,5.458,5.457V21.929z'
                    />
                    <path d='M32.549,24.826c0,4.257-3.464,7.723-7.723,7.723c-4.259,0-7.722-3.466-7.722-7.723c0-1.024,0.204-2.003,0.568-2.897 h-4.215v11.56c0,1.494,1.213,2.704,2.706,2.704h17.323c1.491,0,2.706-1.21,2.706-2.704v-11.56h-4.217 C32.342,22.823,32.549,23.802,32.549,24.826z'
                    />
                </svg>
              </a>
            </li>
          </ul>
        </div>*/}

        <div className="content">
          <Logo />
        </div>

        <Socials />
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