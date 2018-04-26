import React, { Component } from 'react';
import './styles.css';

import Slider from 'react-slick';

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

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return (
      <div className="bait-colors-wrapper">
        <Slider {...settings}>
          {
            baitColorsData.map( item => (
              <div>
                <CarouselItem item={item}></CarouselItem>

              </div>
            ))
          }
        </Slider>
      </div>
    );
  }
}

export default BaitColors;