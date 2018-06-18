import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext([]);

export class VsoProvider extends Component {
  state = {
    vso: null,
    loading: true,
  };

  init = vso => this.setState({ vso, loading: false });

  // componentDidMount = () => fetch('http://custombaits.com.ua/app_info').then(res => res.json()).then(vso => this.init(vso));
  componentDidMount = () => setTimeout(() => Promise.resolve({
    "baits": [
      {
        "advantages": [], 
        "availability": 75, 
        "body": "Приманка універсальна за призначенням .Працює і в стоячих водоймах і на течії. Гра розмашиста .Помимо рівномірно проводки ,гарно відзивається на проводку з прискореннями , а також дуже ефективними є легкі ривочки під час проводки ,періодичні збої в грі ,паузи .Окремої уваги заслуговує проводка з опусканням на дно на кілька секунд,подальшим підривом з протяжкою в повільному темпі.", 
        "id": 1, 
        "name": "WOODOO", 
        "price": 75, 
        "promoPhoto": null, 
        "status": 1, 
        "title": "WOODOO", 
        "url": "http://custombaits.com.ua/imgsizer/_?h=150&m=crop&q=95&u=http%3A%2F%2Fcustombaits.com.ua%2F_uploads%2Fphotos%2FScreen_Shot_2018-05-07_at_18.33.04.png&w=150&s=DRO9YdGa2HniKe7CTl1KrYPwzzY", 
        "weight": 3.0
      },
      {
        "advantages": [], 
        "availability": 75, 
        "body": "Приманка універсальна за призначенням .Працює і в стоячих водоймах і на течії. Гра розмашиста .Помимо рівномірно проводки ,гарно відзивається на проводку з прискореннями , а також дуже ефективними є легкі ривочки під час проводки ,періодичні збої в грі ,паузи .Окремої уваги заслуговує проводка з опусканням на дно на кілька секунд,подальшим підривом з протяжкою в повільному темпі.", 
        "id": 2, 
        "name": "Tolique", 
        "price": 17500, 
        "promoPhoto": null, 
        "status": 2, 
        "title": "Tolique", 
        "url": "http://custombaits.com.ua/imgsizer/_?h=150&m=crop&q=95&u=http%3A%2F%2Fcustombaits.com.ua%2F_uploads%2Fphotos%2FScreen_Shot_2018-05-07_at_18.33.04.png&w=150&s=DRO9YdGa2HniKe7CTl1KrYPwzzY", 
        "weight": 7000.0
      }
    ], 
    "colors": [
      {
        "availability": true, 
        "code": "Col. 001", 
        "id": 1, 
        "name": "Trout", 
        "status": 1, 
        "url": "http://custombaits.com.ua/imgsizer/_?h=150&m=crop&q=95&u=http%3A%2F%2Fcustombaits.com.ua%2F_uploads%2Fphotos%2FScreen_Shot_2018-05-07_at_18.34.08.png&w=150&s=ABW1Ogngs35Mi6CTQkU13BpqG7Y"
      }
    ], 
    "comments": [
      {
        "body": "Ездили в выходной день оттачивать мастерство подрастающему поколению :) . Ваня, несмотря на юный возраст, уже наш человек - Малыш готов ехать на рыбалку в любое время суток и в любую погоду :) .Рыбка капризничала и была трудовая , потому как рыбалка закончилась грозой. Но поймали все, а самое главное Ваня ! Смотрю на него и вспоминаю себя 50 лет назад... Вообщем рыбалка удалась!", 
        "file_url": "http://custombaits.com.ua/imgsizer/_?h=150&m=crop&q=95&u=http%3A%2F%2Fcustombaits.com.ua%2F_uploads%2Fphotos%2FScreen_Shot_2018-05-07_at_18.35.53.png&w=150&s=g8l8lEWa9FPceLYqAmJOxwfYEJ8", 
        "id": 1, 
        "name": "Yray Yraev 1", 
        "social_url": "https://www.facebook.com/ynyrchenko?fref=gs&dti=281932905522681&hc_location=group_dialog", 
        "title": "Ездили в выходной "
      },
      {
        "body": "Ездили в выходной день оттачивать мастерство подрастающему поколению :) . Ваня, несмотря на юный возраст, уже наш человек - Малыш готов ехать на рыбалку в любое время суток и в любую погоду :) .Рыбка капризничала и была трудовая , потому как рыбалка закончилась грозой. Но поймали все, а самое главное Ваня ! Смотрю на него и вспоминаю себя 50 лет назад... Вообщем рыбалка удалась!", 
        "file_url": "http://custombaits.com.ua/imgsizer/_?h=150&m=crop&q=95&u=http%3A%2F%2Fcustombaits.com.ua%2F_uploads%2Fphotos%2FScreen_Shot_2018-05-07_at_18.35.53.png&w=150&s=g8l8lEWa9FPceLYqAmJOxwfYEJ8", 
        "id": 2, 
        "name": "Yray Yraev 2", 
        "social_url": "https://www.facebook.com/ynyrchenko?fref=gs&dti=281932905522681&hc_location=group_dialog", 
        "title": "Ездили в выходной "
      },
      {
        "body": "Ездили в выходной день оттачивать мастерство подрастающему поколению :) . Ваня, несмотря на юный возраст, уже наш человек - Малыш готов ехать на рыбалку в любое время суток и в любую погоду :) .Рыбка капризничала и была трудовая , потому как рыбалка закончилась грозой. Но поймали все, а самое главное Ваня ! Смотрю на него и вспоминаю себя 50 лет назад... Вообщем рыбалка удалась!", 
        "file_url": "http://custombaits.com.ua/imgsizer/_?h=150&m=crop&q=95&u=http%3A%2F%2Fcustombaits.com.ua%2F_uploads%2Fphotos%2FScreen_Shot_2018-05-07_at_18.35.53.png&w=150&s=g8l8lEWa9FPceLYqAmJOxwfYEJ8", 
        "id": 3, 
        "name": "Yray Yraev 3", 
        "social_url": "https://www.facebook.com/ynyrchenko?fref=gs&dti=281932905522681&hc_location=group_dialog", 
        "title": "Ездили в выходной "
      },
      {
        "body": "Ездили в выходной день оттачивать мастерство подрастающему поколению :) . Ваня, несмотря на юный возраст, уже наш человек - Малыш готов ехать на рыбалку в любое время суток и в любую погоду :) .Рыбка капризничала и была трудовая , потому как рыбалка закончилась грозой. Но поймали все, а самое главное Ваня ! Смотрю на него и вспоминаю себя 50 лет назад... Вообщем рыбалка удалась!", 
        "file_url": "http://custombaits.com.ua/imgsizer/_?h=150&m=crop&q=95&u=http%3A%2F%2Fcustombaits.com.ua%2F_uploads%2Fphotos%2FScreen_Shot_2018-05-07_at_18.35.53.png&w=150&s=g8l8lEWa9FPceLYqAmJOxwfYEJ8", 
        "id": 4, 
        "name": "Yray Yraev 4", 
        "social_url": "https://www.facebook.com/ynyrchenko?fref=gs&dti=281932905522681&hc_location=group_dialog", 
        "title": "Ездили в выходной "
      }
    ], "delivery_body": "Оплатити можна через Приватбанк онлайн або післяоплатою у відділенні при отриманні посилки.\r\n\r\nДоставка відділеннями Нової пошти і Meest Express.\r\n\r\nЗалежно від відстані та завантаження товари зазвичай доставляються протягом 1-3 робочих днів. Після відправки Вашого замовлення ми повідомимо Вам номер накладної, за якою Ви завжди зможете відстежити Вашу посилку.", "delivery_title": "ДОСТАВКА & ОПЛАТА", "fb_social": "https://www.facebook.com/groups/281932905522681/", "header_image": "http://custombaits.com.ua/_uploads/photos/20543684_1218599451619732_3309551342390567848_o.jpg", "header_slogan": "Custom Baits. ", "heads_body": "Риба надзвичайно обережна і потребує до себе особливих навичок, таких як вміння безшумно підібратися на дальність закидування приманки, бездоганного вміння володіння снастю, адже часто приманку слід посилати в чітко заданий квадрат, де саме знаходиться риба. Успішна ловля передбачає грунтовний підхід, з досконалим вивченням поведінки головня і місць його імовірних стоянок, розуміння, яка має бути приманка і як її подати. Головень риба всеядна, раціон її неймовірно широкий: рослинність, різні комахи, жуки, мальком і т.п. Звідси і слід починати підбір “уловистої” коливалки.", "heads_title": "Коливалка на головня", "heads_url": "http://custombaits.com.ua/_uploads/photos/Screen_Shot_2018-05-07_at_18.21.08.png", "id": 1, "inst_social": "https://www.facebook.com/groups/281932905522681/", "perch_body": "Для течії бажано обирати коливалку прогонисту, з стабільною грою, щоб активно працювала і не входила в штопор. У спокійних водоймах або зовсім без течії раціональне використання коливалочок з вираженою і розмашистою грою, здатною працювати на повільній проводці. Чим більше рослинності, тим доцільніше ставити коливалку мінімальної ваги, яка могла б працювати на мінімальних швидкостях підмотки, тобто максимально довго залишатися в полі зору потенційної “жертви”. Вага підбирається виходячи з конкретних умов ловлі, в більшості випадках це 1-3г. Колір відіграє важливу роль і напряму впливає на кількість і якість покльовок.", "perch_title": "Коливалка на окуня", "perch_url": "http://custombaits.com.ua/_uploads/photos/Screen_Shot_2018-05-07_at_18.20.57.png", "phone": "+38 (067) 3411534", "phone_1": "+38 (050) 9509098", "phone_name": "Сергій Мудрий", "phone_name_1": "Max Vitruk", "trout_body": "Форель мабудь сама непередбачувана риба, її смаки наперед важко вгадати, тому єдиний провірений варіант - це часта зміна приманок. Цей прийом працює по різній рибі, але при ловлі форелі він безперечно самий дієвий. Другий важливий момент - це колір! Перевагу в кольорах риба віддає відносно погоди і прозорості води. Вага теж має значення. Легкі моделі використовуються на маленьких, мілких потічках і струмках, для більших річок відповідно раціональніше використання важчих коливалок.", "trout_title": "Коливалка на форель", "trout_url": "http://custombaits.com.ua/_uploads/photos/Screen_Shot_2018-05-07_at_18.21.02.png", "video_text": "CUSTOM BAITS", "video_title": "CUSTOM BAITS", "video_url": "https://www.youtube.com/watch?v=RBqSabaz9Vk", "youtube_social": "https://www.facebook.com/groups/281932905522681/"}).then(vso => this.init(vso)), 500);  
    
  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

export const VsoConsumer = Consumer;
