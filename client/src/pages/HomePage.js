import React from "react";
import Slider from "react-slick";

import DocumentItem from "../components/item/DocumentItem";
import SlideBar from "../components/item/Carousel/SlideBar";
import NextArrow from "../components/item/Carousel/NextArrow";
import PrevArrow from "../components/item/Carousel/PrevArrow";

import classes from "./HomePage.module.css";

function HomePage() {
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className={`${classes.container} `}>
        <div className={classes.slider}>
          <Slider {...setting}>
            <SlideBar />
            <SlideBar />
            <SlideBar />
            <SlideBar />
          </Slider>
        </div>

        <div className={classes.post_list}>
          <DocumentItem />
          <DocumentItem />
          <DocumentItem />
          <DocumentItem />
          <DocumentItem />
          <DocumentItem />
        </div>
      </div>
    </>
  );
}

export default HomePage;
