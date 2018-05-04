import React, { Component } from 'react';
import './styles.css';

import Slider from 'react-slick';

const baitColorsData = [
  {
    id: '1',
    name: 'col. 001',
    image: 'https://lh3.googleusercontent.com/FGeKbLHGLLIMca88F6R3xZvfhLqzz-YieUHljxwLQk1SC-umUQgoj23piCnBHnmzSgLsdSmTGzd6UUPEcLd7G6oBa6_3iChcaFY2lna5oUxjVJHi2tuekBjSIvADmfQEQu-BmuuI',
  },
  {
    id: '2',
    name: 'col. 025',
    image: 'https://lh6.googleusercontent.com/s-2iZxLp1fiyKKwq2Wu91heAj3AzwnwMPWZKm4CHvUlysUvcwUwdyHLzSEdEqQzvKe6oP83O2wqTgs6_wpzx-A2b3aoEs0t6yU49SyCFldQlw2L1eoTRhn16nZWapXYE9LGk15eo',
  },
  {
    id: '3',
    name: 'col. 015',
    image: 'https://lh6.googleusercontent.com/DXFQIheP10xQxFhmMX_XP_1yVBxZycbqjyMn94A0il-_yiT0ILGOKyjTwVDZNNvH95jPiYs2Q_HROKAM3AVstf1CVZWexGMzvqvfTRCOm92DLH9xF-cqAriCA48RKWRnGPPdaQUg',
  },
  {
    id: '4',
    name: 'col. 063',
    image: 'https://lh4.googleusercontent.com/iosXvDwohItqPkb4NAObw19c1RtKfWSxt6Q5BKGrjAHNs5FPhwwP9L98_vV0WXjBBNlCkqPjl2cyipmzFEKVZirM_qBAKeSgIq-H8AMhFcHVDfDOdX6vqkp6hXpC8mum_AUwk1gq',
  },
  {
    id: '5',
    name: 'col. 016',
    image: 'https://lh4.googleusercontent.com/7oM6M8OQddg5lg9PZXLEbrDSrg_jD724SnLrFpXsE7Xw0x6qUlOCZGkJw49vxp_zlmfsChN4MDSvFheeD3J-c71hiYIeyIir_fbdpNZ5JEtA2mJCro8Q6YDvBdeLkyv6SLZhTG2m',
  },
  {
    id: '6',
    name: 'col. 021',
    image: 'https://lh3.googleusercontent.com/Fy_RvuCj2NfYevbccoWCyASMEZjkBlZk5OKeAepJ3fVU2It3VmMwpWgJTt_ynqsUqnV1dwMDritpWfRJyUpKMfAmSGHRRCd2g_sZrwAFOkXbOo8sLP5tfz7GMDNwc4-13_gz4hRi',
  },
  {
    id: '7',
    name: 'col. 013',
    image: 'https://lh3.googleusercontent.com/t6Bk3XV_pEBhvKw-i_9iqgcTHmZzvo7zIERERf-7_c2P1cEieeyYBS-LXp7INgW1822P3-HpmyK-ox6H-Pxv1h5bTmMZNViVWnhb724skWpjqgBp8rwUDFk0d4RmC5_yg8EdizrG',
  },
  {
    id: '8',
    name: 'col. 022',
    image: 'https://lh3.googleusercontent.com/MODDXf1KYS7JFSOG636S4yoYUrE3SV-Kepy0sk82Vt6bqsOHxNvUHmRqoUo_rfW7qQb-jioYadNldwMvkNszI9h6zitMptMpeccCd0hdT32Z8rSZ3rJ3GCgs4-I3NNuvlMlillQo',
  },

];

class BaitColors extends Component {
  render() {

    const settings = {
      dots: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      infinite: true,
      variableWidth: true,
      swipeToSlide: true
    };

    return (
      <div className="bait-color-slider">
        <div className="content">
          <h2 className="bait-color-slider__title heading-2 title-style">
            Кольорова гамма
          </h2>
        </div>

        { 
          baitColorsData.length > 0 && <Slider {...settings}>
            {
              baitColorsData.map( el => (
                <div key={el.id} className="bait-color">
                  <div className="bait-color__image-wrapper">
                    <img src={el.image} alt={el.name}/>
                  </div>
                  <h3 className="bait-color__name heading-3">
                    {el.name}
                  </h3>
                </div>
              ))
            }
          </Slider>
        }

      </div>
    );
  }
}

export default BaitColors;