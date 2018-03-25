import React, { Component } from 'react';
import './styles.css';

class AboutDelivery extends Component {
	render() {
		const delivery = [
		  {
		    title: 'Доставка',
		    text: 'text 1'
		  },
		  {
		    title: 'Оплата',
		    text: 'text 2'
		  }
		];
		return (
			<section className="about-delivery">
				{
				  delivery.map(el => <div className="delivery-item">
				    <h2 className="delivery-item__title heading-2">
				      {el.title}
				    </h2>
				    <p className="delivery-item__text">
				      {el.text}
				    </p>
				  </div>)
				}
			</section>
		);
	}
}

export default AboutDelivery;