import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Carusel = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__480.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/736x/cd/7b/5c/cd7b5c8d4687b5c98a445127926a56e2--kingfisher-bird-hd-picture.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      
    </Carousel>
    );
};

export default Carusel;