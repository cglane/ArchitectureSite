

import React from 'react';
import Slider from 'react-slick';
import Carousel from 'nuka-carousel'


class CounterCarousel extends React.Component {

  render () {
    const images = this.props.imagePaths.map((path, index) => {
      return (<img key={index} src={path} />      )
    })
  return (
    <Carousel className="automatic-carousel"
              width="100%"
              autoplay={true}
              >
      {images}
  </Carousel>
  )
}
}
export default CounterCarousel