import React, { Component } from 'react';
import './styles.css';

class BaitView extends Component {
  render(...props) {
    let item = this.props;
    return (
      <div className="content">
        <div className="bait-view">
          <div className="bait-view-gallery">
            <div className="bait-view-gallery__item">
              <img src="https://images.pexels.com/photos/102730/pexels-photo-102730.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
            </div>
            <div className="bait-view-gallery__item">
              <img src="https://images.pexels.com/photos/319934/pexels-photo-319934.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
            </div>
            <div className="bait-view-gallery__item">
              <img src="https://images.pexels.com/photos/66107/pexels-photo-66107.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
            </div>
            <div className="bait-view-gallery__item">
              <img src="https://images.pexels.com/photos/67100/pexels-photo-67100.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
            </div>
            <div className="bait-view-gallery__item">
              <img src="https://images.pexels.com/photos/39313/fishermen-silhouette-sunset-39313.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
            </div>
            <div className="bait-view-gallery__item">
              <img src="https://images.pexels.com/photos/636303/pexels-photo-636303.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
            </div>
            <div className="bait-view-gallery__item">
              <img src="https://images.pexels.com/photos/159496/fish-aquarium-school-of-fish-under-water-159496.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
            </div>
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
      </div>
    );
  }
}

export default BaitView;