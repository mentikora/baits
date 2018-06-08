import React from 'react';
import './styles.css';

export default () => {
  return <div className="preloader">
    <div className="preloader__block">
      <div className="preloader__circle preloader__circle-1"></div>
      <div className="preloader__circle preloader__circle-2"></div>
      <div className="preloader__circle preloader__circle-3"></div>
      <div className="preloader__circle preloader__circle-4"></div>
      <div className="preloader__circle preloader__circle-5"></div>
    </div>
  </div>
}