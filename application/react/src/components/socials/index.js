import React from 'react';
import './styles.css';

const socialsList = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/groups/281932905522681/'
  },
  {
    name: 'youtube',
    url: 'https://www.facebook.com/groups/281932905522681/'
  },
  {
    name: 'instagram',
    url: 'https://www.facebook.com/groups/281932905522681/'
  },
];

export default () => (    
  <ul className="socials-list">

    {
      socialsList.map( (el, key) => (
        <li key={key}>
          <a href={el.url} target="_blank">
            <i className={ `icon-${el.name}` }></i>
          </a>
        </li>
      ))
    }

  </ul>
);
