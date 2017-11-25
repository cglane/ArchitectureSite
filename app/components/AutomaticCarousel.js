
import React from 'react';
import Slider from 'react-slick';

class AutomaticCarousel extends React.Component {
  render () {
    const settings = {
      dots: false,
      arrows:false,
      infinite: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 200,
      className: 'custom-carousel-class',
    };
    const images = this.props.imagePaths.map((path, index) => {
      return (<div key={index}><img src={require(`../../images/${path}`)} /></div>      )
    })
    return (
      <Slider className="automatic-carousel" {...settings}>
        {images}
      </Slider>
    );
  }
}
export default AutomaticCarousel