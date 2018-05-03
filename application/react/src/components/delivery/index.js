import React from 'react';
import './styles.css';

export default () => (
  <section className="about-delivery">
    <div className="content">
      <div className="about-delivery__left-side">
        <h2 className="about-delivery__title heading-2 title-style">
          Доставка & Оплата
        </h2>
        <p className="about-delivery__text text-style">
          Оплатити можна через Приватбанк онлайн або післяоплатою у відділенні при отриманні посилки.
          <br /><br />
          Доставка відділеннями Нової пошти і Meest Express.
          <br /><br />
          Залежно від відстані та завантаження товари зазвичай доставляються протягом 1-3 робочих днів.
          Після відправки Вашого замовлення ми повідомимо Вам номер накладної, за якою Ви завжди зможете відстежити Вашу посилку.
        </p>
      </div>
    </div>
  </section>
);