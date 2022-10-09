import React from "react";
import Slider from "react-slick";

import DocumentItem from "../DocumentItem";
import NextArrow from "../Carousel/NextArrow";
import PrevArrow from "../Carousel/PrevArrow";
import SlideBar from "../Carousel/SlideBar";
import classes from "./CategoryList.module.css";

function CategoryList() {
  const setting = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className={classes.container}>
      <div className={classes.homepage_tags}>
        <h1>
          <i>Computer Science</i>
        </h1>
        <div className={classes.clear}></div>
      </div>
      <div className={classes.slider}>
        <Slider {...setting}>
          <DocumentItem />
          <DocumentItem />
          <DocumentItem />
          <DocumentItem />
          <DocumentItem />
          <DocumentItem />
        </Slider>
      </div>
    </div>
  );
}

export default CategoryList;