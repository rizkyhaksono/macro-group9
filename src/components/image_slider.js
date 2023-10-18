"use client";

import React from "react";
import { Slide } from "react-slideshow-image";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";

const ImageSlider = ({ images }) => {
  return (
    <div className="slide-container">
      <Slide>
        {images.map((image, index) => (
          <div className="swiper-slide" key={index}>
            <Image src={image} alt={`Slide ${index}`} className="rounded-xl" width={1500} height={1000} />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlider;
