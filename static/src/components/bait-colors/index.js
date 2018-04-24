import React, { Component } from 'react';
import './styles.css';

const baitColorsData = [
  {
    id: 'color1',
    name: 'col. 001',
    image: 'https://static.pexels.com/photos/294674/pexels-photo-294674.jpeg',
  },
  {
    id: 'color2',
    name: 'col. 002',
    image: 'https://static.pexels.com/photos/294674/pexels-photo-294674.jpeg',
  },
  {
    id: 'color3',
    name: 'col. 003',
    image: 'https://static.pexels.com/photos/294674/pexels-photo-294674.jpeg',
  },
  {
    id: 'color4',
    name: 'col. 004',
    image: 'https://static.pexels.com/photos/294674/pexels-photo-294674.jpeg',
  },
  {
    id: 'color5',
    name: 'col. 005',
    image: 'https://static.pexels.com/photos/294674/pexels-photo-294674.jpeg',
  },
];

class BaitColors extends Component {
  render() {
    return (
      <div className="content">
        <div className="bait-colors-wrapper">
          {
            baitColorsData.map((el, key) => (
              <div className="bait-color" key={el.name}>
                <div className="bait-color__image-wrapper">
                  <img src={el.image} alt={el.name} title={el.name} />
                </div>
                <h2 className="bait-color__name heading-2">
                  {el.name}
                </h2>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default BaitColors;