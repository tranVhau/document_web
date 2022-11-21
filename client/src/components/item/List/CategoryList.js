import React from "react";
import Slider from "react-slick";

import DocumentItem from "../DocumentItem";
import NextArrow from "../Carousel/NextArrow";
import PrevArrow from "../Carousel/PrevArrow";
import SlideBar from "../Carousel/SlideBar";
import classes from "./CategoryList.module.css";

function CategoryList(props) {
  const setting = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={classes.container}>
      <div className={classes.homepage_tags}>
        <h1>
          <i className={classes.category_tag}>{props.category}</i>
        </h1>
        <div className={classes.clear}></div>
      </div>
      <div className={classes.slider}>
        <Slider {...setting}>
          {props.docs.map((comic) => {
            return <DocumentItem comic={comic} key={comic.id} />;
          })}
        </Slider>
      </div>
    </div>
  );
}

export default CategoryList;
