import React, { Component } from 'react';
import './styles.css';

const baitColorsData = [
  {
    id: 'color1',
    name: 'col. 001',
    image: 'https://images.pexels.com/photos/240561/pexels-photo-240561.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
  },
  {
    id: 'color2',
    name: 'col. 002',
    image: 'https://lh3.googleusercontent.com/q4DjuVAxe71wr82r1BMgYwtRv20irV3L9SRRW4PZhExsfc5utfD--zo4k1U7BIcZ2o3xVhBI_7Ks80vFfJNMQJ0yRagYknnX-XYPWhbg1xjXUTO-gNqtD5oOQg4yy77ehsQ3Yt_I'
  }
];

class BaitColors extends Component {
  render() {
    return (
      <div className="content">
        <div className="bait-colors-wrapper">
          {
            baitColorsData.map( (el, key) => {
              return(
              <div className="bait-color" key={key}>
                <div className="bait-color__image-wrapper">
                  <img scr={el.image} alt={el.name} title={el.name} />
                </div>
                <h2 className="bait-color__name heading-2">
                  {el.name}
                </h2>
              </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default BaitColors;