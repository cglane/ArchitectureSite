
import React from 'react';
import Slider from 'react-slick';
const basePath = 'http://virginiadawsonlanearchitect.com/albums/';  

class CounterCarousel extends React.Component {
  render (props) {
    const settings = {
      dots: true,
      dotsClass: 'dots-counter-carousel',      
      infinite: true,
      speed: 500,
      arrows: false,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'counter-carousel-class',
      customPaging: function(i) {
        return <span>{i}</span>
      },
    };
    const images = this.props.imagePaths.map((path, index) => {
      return (<div key={index}><img src={path} /></div>      )
    })
    return (
      <Slider className="counter-carousel" {...settings}>
        {images}
      </Slider>
    );
  }
}
export default CounterCarousel