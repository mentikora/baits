import React, { Component } from 'react';
import './styles.css';

import Slider from 'react-slick';

const baitColorsData = [
  {
    id: '1',
    name: 'col. 001',
    image: 'https://images.pexels.com/photos/910214/pexels-photo-910214.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    id: '2',
    name: 'col. 002',
    image: 'https://images.pexels.com/photos/790195/pexels-photo-790195.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    id: '3',
    name: 'col. 003',
    image: 'https://images.pexels.com/photos/988622/pexels-photo-988622.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    id: '4',
    name: 'col. 004',
    image: 'https://images.pexels.com/photos/459840/pexels-photo-459840.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    id: '5',
    name: 'col. 005',
    image: 'https://images.pexels.com/photos/133209/pexels-photo-133209.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    id: '6',
    name: 'col. 006',
    image: 'https://images.pexels.com/photos/539705/pexels-photo-539705.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    id: '7',
    name: 'col. 007',
    image: 'https://images.pexels.com/photos/358423/pexels-photo-358423.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    id: '8',
    name: 'col. 008',
    image: 'https://images.pexels.com/photos/83856/lake-fishing-83856.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  },
  {
    id: '9',
    name: 'col. 009',
    image: 'https://images.pexels.com/photos/45910/goldfish-carassius-fish-golden-45910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
];

class BaitColors extends Component {
  render() {

    const settings = {
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      infinite: true,
      variableWidth: true,
      swipeToSlide: true
    };

    return (
      <div className="bait-color-slider">
        <div className="content">
          <h2 className="bait-color-slider__title heading-2 title-style">
            Кольорова гамма
          </h2>
        </div>

        { 
          baitColorsData.length > 0 && <Slider {...settings}>
            {
              baitColorsData.map( el => (
                <div key={el.id} className="bait-color">
                  <div className="bait-color__image-wrapper">
                    <img src={el.image} alt={el.name}/>
                  </div>
                  <h3 className="bait-color__name heading-3">
                    {el.name}
                  </h3>
                </div>
              ))
            }
          </Slider>
        }

      </div>
    );
  }
}

export default BaitColors;