import React from 'react';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';

class Slider extends React.Component {
  render() {
    const params = {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      },
      pagination: {
        el: '.swiper-pagination'
      }
    };
    return(
      <center>
      <Swiper {...params}>
        <div><img src='https://cdn.wallpapersafari.com/84/25/QF2YjH.jpg'/></div>
        <div><img src='https://cdn.wallpapersafari.com/84/25/QF2YjH.jpg'/></div>
        <div><img src='https://cdn.wallpapersafari.com/84/25/QF2YjH.jpg'/></div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
      </center>
    )
  }
}

export default Slider;