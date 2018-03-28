import React, { Component } from 'react';
import './styles.css';

const baits = [
  {
    id: '1',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'WOODOO',
    weight: '2.5g / 3g',
    price: '65'
  },
  {
    id: '2',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'OSCAR',
    weight: '1.6g /2g',
    price: '65'
  },
  {
    id: '3',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'SEZAM',
    weight: '1.4g',
    price: '65'
  },
  {
    id: '4',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'CRAFT',
    weight: '2.2g',
    price: '65'
  },
  {
    id: '6',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'DRIFT',
    weight: '2g',
    price: '65'
  },
  {
    id: '7',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'SONIC',
    weight: '1.5g',
    price: '65'
  },
  {
    id: '8',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'CANDY',
    weight: '1.6g',
    price: '65'
  },
  {
    id: '9',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'MATILDA',
    weight: '2.2g',
    price: '65'
  },
  {
    id: '10',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'CHILI',
    weight: '2.7g',
    price: '65'
  },
  {
    id: '11',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'OZZY',
    weight: '2.2g',
    price: '65'
  },
  {
    id: '12',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I',
    name: 'NEMO',
    weight: '1.2g',
    price: '65'
  }
];

class BaitPreviewWrapper extends Component {
  render() {
    return (
      <div className="content">
        <div className="bait-preview-wrapper">

          {
            baits.map( el => {
              return (
                <div className="bait-preview">
                  <a href="javascript:void(0);" className="bait-preview__link">
                    <div className="bait-preview__image">
                      <img src={el.image} alt={el.name} title={el.name} />
                    </div>
                    <div className="bait-preview__content">
                      <h1 className="bait-preview__title">
                        <span className="bait-preview__name heading-2">
                          {el.name}
                        </span>
                        <span className="bait-preview__weight">
                          {el.weight}
                        </span>
                      </h1>
                      <div className="bait-preview__price">
                        {el.price} $
                      </div>
                    </div>
                  </a>
                </div>
              )
            })
          }
          
        </div>
      </div>
    );
  }
}

export default BaitPreviewWrapper;