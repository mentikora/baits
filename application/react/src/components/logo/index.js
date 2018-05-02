import React, {Component} from 'react';
import './styles.css';

import logoImg from '../../assets/images/logo.jpg';

class Logo extends Component {
  render () {
    return (
      <div className={`logo logo-${this.props.mod}`}>
        <img className="logo__image" src={logoImg} alt="Custom Baits" title="Custom Baits" />
      </div>
    );
  }
}

export default Logo;
