import React, { Component } from 'react';
import './styles.css';
import './styles-gallery.css';
import testImg from '../../assets/images/product-test-img.jpg';

const baitAsset = [
  "https://images.pexels.com/photos/102730/pexels-photo-102730.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/319934/pexels-photo-319934.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/66107/pexels-photo-66107.jpeg?auto=compress&cs=tinysrgb&w=750&h=1260",
];

const BaitView = ({ match }) => (
  <div className="bait-view">

    {/* bait main image */}
    <div className="bait-view__main-image">
      <img src={testImg} alt=""/>
    </div>

    {/* bait info */}
    <div className="content">
      <div className="bait-view__info">
        <div className="bait-view__title">
          <h1 className="bait-view__name">
            Name {match.params.name}
          </h1>
          <span className="bait-view__weight">
            3g
          </span>
        </div>
        <p className="bait-view__price">
           150 $
        </p>
        <p className="bait-view__description">
          description
        </p>
      </div>
    </div>

    {/* bait gallery */}
    {/* <div className="bait-view-gallery">
      {
        baitAsset.map( el => {
          return <div className="bait-view-gallery__item" key={el}>
            <img src={el} alt={item.name} title={item.name} />
          </div>
        })
      }
    </div> */}

  </div>
)

export default BaitView;
