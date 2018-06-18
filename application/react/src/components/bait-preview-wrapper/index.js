import React, { Component } from 'react';
import './styles.css';

import { Link } from 'react-router-dom'; 
import { injectData } from '../../hocs/injectData';

class BaitPreviewWrapper extends Component {
  render() {

    const data = this.props.data;
    
    return (
      <div className="bait-preview-wrapper content">
        
        {
          data.baits.map( (el, key) => (
            <div className="bait-preview" key={key}>
              <Link to={`/baits/${el.id}`} className="bait-preview__link">
                <div className="bait-preview__content">
                  <h2 className="bait-preview__title">
                    <span className="bait-preview__name heading-2">
                      {el.name}
                    </span>
                    <span className="bait-preview__weight">
                      {el.weight} g
                    </span>
                  </h2>
                  <p className="bait-preview__text text-style">
                    {el.body}
                  </p>
                  <span className="bait-preview__price">
                    {el.price} uah
                  </span>
                </div>
                <div className="bait-preview__image">
                  <img src={el.url} alt={el.name} title={el.name} />
                </div>
                {
                  el.status &&
                  <div className={`bait-preview__status bait-preview__status--${el.status}`}>
                    {el.status}
                  </div>
                }
              </Link>
            </div>
          ))
        }
        
      </div>
    );
  }
}

export default injectData(['baits'])(BaitPreviewWrapper);



