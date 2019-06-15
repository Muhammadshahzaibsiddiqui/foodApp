import React from 'react';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';

class DealSlider extends React.Component {
  render() {
    const params = {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      };
    return(
      <center>
      <Swiper {...params}>
        <div><img src='https://cdn.wallpapersafari.com/84/25/QF2YjH.jpg' /></div>
        <div><img src='https://cdn.wallpapersafari.com/84/25/QF2YjH.jpg'/></div>
        <div><img src='https://cdn.wallpapersafari.com/84/25/QF2YjH.jpg'/></div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
      </center>
    )
  }
}

export default DealSlider;