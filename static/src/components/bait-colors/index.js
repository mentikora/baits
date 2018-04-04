import React, { Component } from 'react';
import './styles.css';

const baitColors = [
  {
    id: 'color1',
    name: 'col. 001'
    image: ''
  },
  {
    id: 'color2',
    name: 'col. 002'
    image: ''
  }
];

class BaitColors extends Component {
  render(
    return (
      <div className="bait-colors-wrapper">

        baitColors.map( el => 
          <div className="bait-color">
            <div className="bait-color__image-wrapper">
              {el.image}
            </div>
            <h2 className="bait-color__name heading-2">
              {el.name}
            </h2>
          </div>
        )
        

      </div>
    )
  )
}