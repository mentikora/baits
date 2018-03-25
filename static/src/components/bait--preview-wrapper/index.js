import React, { Component } from 'react';
import Bait from './item/';
import './styles.css';

class BaitWrapper extends Component {
  render() {
  	return (
			<div>
	  		<Bait />
	  		<Bait />
  		</div>
		); 
  }
}

export default BaitWrapper;