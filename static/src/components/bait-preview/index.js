import React, { Component } from 'react';
import './styles.css';

class BaitPreview extends Component {
  render(...props) {
  	let item = this.props;
  	return (
  		<div className="bait-preview">
  			<div className="bait-preview__image">
  				<img src={item.image} alt={item.name} title={item.name} />
  			</div>
  			<h1 className="bait-preview__name heading-2">
  				{item.name}
  			</h1>
  			<div className="bait-preview__weight">
  				{item.weight}
  			</div>
  			<div className="bait-preview__price">
  				{item.price}
  			</div>
  		</div>
		); 
  }
}

export default BaitPreview;