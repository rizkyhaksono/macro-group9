import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const ImageSlider = ({ images }) => {
  return (
    <div className="slide-container">
      <Slide>
        {images.map((image, index) => (
          <div className="swiper-slide" key={index}>
            <img src={image} alt={`Slide ${index}`} className="" />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlider;
