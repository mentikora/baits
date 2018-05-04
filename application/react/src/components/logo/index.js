import React from 'react';
import './styles.css';

import logoImg from '../../assets/images/logo.png';

export default () => (
  <div className="logo">
    <img className="logo__image" src={logoImg} alt="Custom Baits" title="Custom Baits" />
  </div>
)
