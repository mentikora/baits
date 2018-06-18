import React, { Component } from 'react';
import { injectData } from '../../hocs/injectData';
import Slider from 'react-slick';
import './styles.css';

class Feedback extends Component {
  render() {

    const data = this.props.data;

    const settings = {
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      infinite: false,
      swipeToSlide: true
    };

    return (
      <div className="feedback-wrapper">
        <div className="content">
          <h2 className="feedback-wrapper__title heading-2 title-style">
            Feedback
          </h2>

          <Slider {...settings}>
            {
              data.comments.map( comment => (
                <div key={ comment.id } className="feedback-item">
                  <div className="feedback-item__image-wrapper">
                    <img src={ comment.file_url } alt={ comment.name }/>
                  </div>
                  <h3 className="feedback-item__name heading-3">
                    { comment.name }
                  </h3>
                  <q className="feedback-item__text text-style">
                    { comment.body }
                  </q>
                </div>
                
              ))
            }
          </Slider>
        </div>

      </div>
    )
  }
}

export default injectData(["comments"])(Feedback);