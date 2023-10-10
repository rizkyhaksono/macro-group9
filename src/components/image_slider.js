import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const ImageSlider = ({ images }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".swiper-container", {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    // Handle next button click
    document.querySelector(".swiper-button-next").addEventListener("click", () => {
      swiperRef.current.slideNext();
    });

    // Handle previous button click
    document.querySelector(".swiper-button-prev").addEventListener("click", () => {
      swiperRef.current.slidePrev();
    });
  }, []);

  return (
    <div className="container mx-auto swiper-container">
      <div className="swiper-wrapper">
        {images.map((image, index) => (
          <div className="swiper-slide" key={index}>
            <img src={image} alt={`Slide ${index}`} className="" />
          </div>
        ))}
      </div>
      <div className="swiper-pagination"></div>
      <div className="xl:mr-24 swiper-button-next"></div>
      <div className="xl:ml-24 swiper-button-prev"></div>
    </div>
  );
};

export default ImageSlider;
