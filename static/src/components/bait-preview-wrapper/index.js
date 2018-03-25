import React, { Component } from 'react';
import BaitPreview from '../bait-preview';
import './styles.css';

class BaitPreviewWrapper extends Component {
  render() {
  	return (
			<div>
	  		<BaitPreview />
	  		<BaitPreview />
  		</div>
		); 
  }
}

export default BaitPreviewWrapper;