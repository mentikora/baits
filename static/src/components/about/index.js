import React, { Component } from 'react';
import './styles.css';

class About extends Component {
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
    const baitTypes = [
      {
        image: 'https://static.pexels.com/photos/192454/pexels-photo-192454.jpeg',
        type: 'Коливалка на форель',
        text: 'Форель мабудь сама непередбачувана риба, її смаки наперед важко вгадати, тому єдиний провірений варіант - це часта зміна приманок. Цей прийом працює по різній рибі, але при ловлі форелі він безперечно самий дієвий. Другий важливий момент - це колір! Перевагу в кольорах риба віддає відносно погоди і прозорості води. Вага теж має значення. Легкі моделі використовуються на маленьких, мілких потічках і струмках, для більших річок відповідно раціональніше використання важчих коливалок.'
      },
      {
        image: 'https://static.pexels.com/photos/294674/pexels-photo-294674.jpeg',
        type: 'Коливалка на окуня',
        text: 'Для течії бажано обирати коливалку прогонисту, з стабільною грою, щоб активно працювала і не входила в штопор. У спокійних водоймах або зовсім без течії раціональне використання коливалочок з вираженою і розмашистою грою, здатною працювати на повільній проводці. Чим більше рослинності, тим доцільніше ставити коливалку мінімальної ваги, яка могла б працювати на мінімальних швидкостях підмотки, тобто максимально довго залишатися в полі зору потенційної “жертви”. Вага підбирається виходячи з конкретних умов ловлі, в більшості випадках це 1-3г. Колір відіграє важливу роль і напряму впливає на кількість і якість покльовок.'
      },
      {
        image: 'https://static.pexels.com/photos/235419/pexels-photo-235419.jpeg',
        type: 'Коливалка на головня',
        text: 'Риба надзвичайно обережна і потребує до себе особливих навичок, таких як вміння безшумно підібратися на дальність закидування приманки, бездоганного вміння володіння снастю, адже часто приманку слід посилати в чітко заданий квадрат, де саме знаходиться риба. Успішна ловля передбачає грунтовний підхід, з досконалим вивченням поведінки головня і місць його імовірних стоянок, розуміння, яка має бути приманка і як її подати. Головень риба всеядна, раціон її неймовірно широкий: рослинність, різні комахи, жуки, мальком  і т.п. Звідси і слід починати підбір “уловистої” коливалки.'
      }
    ];

    return (
      <section className="about">

        {/* about us*/}
        <div className="about__us">

          <div className="about__us-text-wrapper">
            <div className="content">
              <p className="about__us-text">
                Приманка звісно сама рибу не ловить, але <b>#Custom_Baits</b> постарається зробити все для цього
              </p>
            </div>
          </div>
        </div>

        {/* about delivery*/}
        <div className="about__delivery">
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
        </div>

        {/* about baits*/}
        <div className="about__bait-types">
          {
            baitTypes.map( (el, index) => <div className={`bait-types-item bait-types-item-${index}`}>
              <div className="content">

                <div className="bait-types-item__image-wrapper" style={{backgroundImage: `url(${el.image})`}}>
                </div>
                <div className="bait-types-item__content">
                  <h1 className="bait-types-item__title heading-2">
                    {el.type}
                  </h1>
                  <p className="bait-types-item__text">
                    {el.text}
                  </p>
                </div>
              </div>
              
            </div>)
          }
          
        </div>
      </section>
    );
  }
}

export default About;