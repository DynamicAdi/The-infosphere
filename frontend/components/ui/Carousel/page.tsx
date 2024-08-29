"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import styles from "./carousel.module.scss";

interface CarouselProps {
  children: React.ReactNode;
  infinite?: boolean;
  autoplay?: boolean;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  slidesToShow?: number;
  arrows?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  infinite = true,
  autoplay = false,
  autoplaySpeed = 2000,
  pauseOnHover = true,
  slidesToShow = 4,
  arrows = false,
}) => {
  const settings = {
    dots: false,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    adaptiveHeight: true,
    infinite: infinite,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: pauseOnHover,
    slidesToShow: slidesToShow,
    arrows: arrows,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          arrows: arrows || true,
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 970,
        settings: {
          arrows: arrows || true,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 680,
        settings: {
          arrows: arrows || false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 560,
        settings: {
          arrows: arrows || false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className={`${styles.slider} ${arrows && styles.sliderWithArrows}`}
      >
        {children}
      </Slider>
    </>
  );
};

export default Carousel;
