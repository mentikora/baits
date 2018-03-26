import React, { Component } from 'react';
//import { BrowserRouter as Router, Link } from 'react-router-dom';
import './styles.css';

class BaitPreview extends Component {
  render(...props) {
  	let item = this.props;
  	return (
  		<div className="bait-preview">
        <a href="javascript:void(0);" className="bait-preview__link">
    			<div className="bait-preview__image">
    				<img src={item.image} alt={item.name} title={item.name} />
    			</div>
          <div className="bait-preview__content">
            <h1 className="bait-preview__title">
              <span className="bait-preview__name heading-2">
                {item.name}
              </span>
              <span className="bait-preview__weight">
                {item.weight}
              </span>
            </h1>
      			<div className="bait-preview__price">
      				{item.price} $
      			</div>
          </div>
        </a>
  		</div>
		);
  }
}

export default BaitPreview;