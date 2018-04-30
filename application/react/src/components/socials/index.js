import React from 'react';
import './styles.css';

const socialsList = [
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

export default () => (    
  <ul className="socials-list">

    {
      socialsList.map( (el, key) => (
        <li key={key}>
          <a className={ `icon-${el.name}` } href={el.url}></a>
        </li>
      ))
    }

  </ul>
);
