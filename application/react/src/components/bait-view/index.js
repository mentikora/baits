import React, { Component } from 'react';
import './styles.css';
import testImg from '../../assets/images/product-test-img.jpg';

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

  render(...props) {

    let item = this.props;

    return (
      <div className="bait-view">

        <div className="bait-view__main-image">
          <img src={testImg} alt=""/>
        </div>

        <div className="bait-view__info">
          <h1 className="bait-view__name">
            { item.name }
          </h1>
          <span className="bait-view__weight">
            { item.weight }
          </span>
          <p className="bait-view__price">
            {item.price} $
          </p>
          <p className="bait-view__description">
            description
          </p>
        </div>

        {/* <div className="bait-view-gallery">
          {
            baitAsset.map( el => {
              return <div className="bait-view-gallery__item" key={el}>
                <img src={el} alt={item.name} title={item.name} />
              </div>
            })
          }
          
        </div> */}

        {/* <div className="bait-view__content">
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
            description
          </div>
        </div> */}

      </div>
    );
  }
}

export default BaitView;
