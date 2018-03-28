import React, { Component } from 'react';
import './styles.css';

class BaitView extends Component {
  render(...props) {
    let item = this.props;
    return (
      <div className="bait-view">
        <div className="bait-view-gallery">
          gallery
        </div>
        <div className="bait-view__name">
          name
        </div>
        <div className="bait-view__weight">
          weight
        </div>
        <div className="bait-view__description">
          description
        </div>
        <div className="bait-view__price">
          price
        </div>
      </div>
    );
  }
}

export default BaitView;