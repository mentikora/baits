import React, {Component} from 'react';
import './styles.css';

class Logo extends Component {
  render () {
    return (
      <div className={`logo logo-${this.props.mod}`}>
        <p className="logo__custom">
          Custom
        </p>
        <p className="logo__normal">
          Baits
        </p>
        <p className="logo__small">
          from fishermen to fishermen
        </p>
      </div>
    );
  }
}

export default Logo;
