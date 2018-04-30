import React, { Component } from 'react';
import './styles.css';

const baits = [
  {
    id: '1',
    image: 'https://images.pexels.com/photos/867481/pexels-photo-867481.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    name: 'WOODOO',
    weight: '2.5g / 3g',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '100',
    status: 'new'
  },
  {
    id: '2',
    image: 'https://images.pexels.com/photos/306908/pexels-photo-306908.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    name: 'OSCAR',
    weight: '1.6g /2g',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '50',
    status: 'sale'
  },
  {
    id: '3',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'SEZAM',
    weight: '1.4g',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '300',
    status: 'limited'
  },
  {
    id: '4',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'CRAFT',
    weight: '2.2g',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '65',
    status: ''
  },
  {
    id: '6',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'DRIFT',
    weight: '2g',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '65',
    status: ''
  },
  {
    id: '7',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'SONIC',
    weight: '1.5g',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '65',
    status: ''
  },
  {
    id: '8',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'CANDY',
    weight: '1.6g',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '65',
    status: ''
  },
  {
    id: '9',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'MATILDA',
    weight: '2.2g',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '65',
    status: ''
  },
  {
    id: '10',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'CHILI',
    weight: '2.7g',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '65',
    status: ''
  },
  {
    id: '11',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'OZZY',
    weight: '2.2g',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '65',
    status: ''
  },
  {
    id: '12',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'NEMO',
    weight: '1.2g',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    price: '65',
    status: ''
  },
];

class BaitPreviewWrapper extends Component {
  render() {
    return (
      <div className="bait-preview-wrapper content">

        {
          baits.map( (el, key) => (
            <div className="bait-preview" key={key}>
              <a href="https://google.com" className="bait-preview__link"> 
                <div className="bait-preview__content">
                  <h2 className="bait-preview__title">
                    <span className="bait-preview__name heading-2">
                      {el.name}
                    </span>
                    <span className="bait-preview__weight">
                      {el.weight}
                    </span>
                  </h2>
                  <p className="bait-preview__text">
                    {el.description}
                  </p>
                  <span className="bait-preview__price">
                    {el.price} uah
                  </span>
                </div>
                <div className="bait-preview__image">
                  <img src={el.image} alt={el.name} title={el.name} />
                </div>
                {
                  el.status &&
                  <div className={`bait-preview__status bait-preview__status--${el.status}`}>
                    {el.status}
                  </div>
                }
              </a>
            </div>
          ))
        }
        
      </div>
    );
  }
}

export default BaitPreviewWrapper;