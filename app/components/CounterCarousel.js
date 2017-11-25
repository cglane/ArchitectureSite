
import React from 'react';
import Slider from 'react-slick';

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
      className: 'custom-caousel-class',
      customPaging: function(i) {
        return <span>{i}</span>
      },
    };
    const images = this.props.imagePaths.map((path, index) => {
      return (<div key={index}><img src={require(`../../images/${path}`)} /></div>      )
    })
    return (
      <Slider className="counter-carousel" {...settings}>
        {images}
      </Slider>
    );
  }
}
export default CounterCarousel