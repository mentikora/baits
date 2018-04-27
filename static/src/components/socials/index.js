import React, { Component } from 'react';
import './styles.css';

const socials = [
  {
    name: 'facebook',
    url: '1'
  },
  {
    name: 'youtube',
    url: '2'
  },
  {
    name: 'instagram',
    url: '3'
  },
];

class Socials extends Component {
  render() {
    return (
      
      <ul>

        {
          socials.map( (el, key) => (
            <li key={key}>
              <a className={el.name} href={el.url}>
                {el.name}
              </a>
            </li>
          ))
        }

      </ul>
    );
  }
}

export default Socials;