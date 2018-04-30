import React, { Component } from 'react';
import './styles.css';

const baitAsset = [
  "https://images.pexels.com/photos/102730/pexels-photo-102730.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/319934/pexels-photo-319934.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/66107/pexels-photo-66107.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/67100/pexels-photo-67100.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/39313/fishermen-silhouette-sunset-39313.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/636303/pexels-photo-636303.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/159496/fish-aquarium-school-of-fish-under-water-159496.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
];

class BaitView extends Component {

  goBack = () => {
    window.history.back();
  }

  render(...props) {

    let item = this.props;

    return (
      <div className="content">
        <div className="bait-view">
          <button 
            onClick={this.goBack}
            className="button--back"
          >
            <svg height='32' id='Layer_1' viewBox='0 0 32 32' width='32' xmlns='http://www.w3.org/2000/svg'>
              <path d='M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958 C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2 c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z'/>
            </svg>
            go back
          </button>

          <div className="bait-view-gallery">
            {
              baitAsset.map( el => {
                return <div className="bait-view-gallery__item" key={el}>
                  <img src={el} alt={item.name} title={item.name} />
                </div>
              })
            }
            
          </div>

          <div className="bait-view__content">
            <h1 className="bait-view__title heading-1">
              <span className="bait-view__name">
                {item.name}
              </span>
              <span className="bait-view__weight">
                {item.weight}
              </span>
            </h1>
            <div className="bait-view__price">
              {item.price} $
            </div>
            <div className="bait-view__description">
              {
                item.description.split('.').map( (item, key) => <span key={key}>{item}</span>)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BaitView;
