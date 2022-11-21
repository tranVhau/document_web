import React from "react";
import Slider from "react-slick";

import DocumentItem from "../components/item/DocumentItem";
import SlideBar from "../components/item/Carousel/SlideBar";
import NextArrow from "../components/item/Carousel/NextArrow";
import PrevArrow from "../components/item/Carousel/PrevArrow";

import classes from "./asset/css/HomePage.module.css";

const SLIDER_DATA = [
  {
    id: 1,
    thumbnail:
      "https://res.cloudinary.com//dy9g317c9/image/upload/c_fill,h_600,w_400/v1/document_web/document/efezkbtcoi1wqzqdrpiy.jpg",
    categories: ["computer science", "ecomomy", "math"],
    name: "document name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quisquam voluptates eum non sed, necessitatibus repudiandae ratione possimus, quas eius autem vitae recusandae nobis nulla provident maiores numquam adipisci veritatis!",
    avt: "https://gamek.mediacdn.vn/133514250583805952/2021/2/5/kmss1-16125223517951309982427.jpg",
    author: "Gotoge Koyoharu",
    created_at: "Just Now",
  },
  {
    id: 2,
    thumbnail:
      "https://static.lag.vn/upload/news/22/02/14/knyyy-1-1024x724_PUHV.jpg?w=800&encoder=wic&subsampling=444",
    categories: ["computer science", "ecomomy", "math"],
    name: "Document name",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quisquam voluptates eum non sed, necessitatibus repudiandae ratione possimus, quas eius autem vitae recusandae nobis nulla provident maiores numquam adipisci veritatis!",
    avt: "https://gamek.mediacdn.vn/133514250583805952/2021/2/5/kmss1-16125223517951309982427.jpg",
    author: "Gotoge Koyoharu",
    created_at: "Just Now",
  },
];

const COMIC_ITEM_DATA = [
  {
    id: 1,
    name: "Comic Name",
    thumbnail:
      "https://res.cloudinary.com//dy9g317c9/image/upload/c_fill,h_600,w_400/v1/document_web/document/e1ljhjf2vlpcslfjztls.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quisquam voluptates eum non sed, necessitatibus repudiandae ratione possimus, quas eius autem vitae recusandae nobis nulla provident maiores numquam adipisci veritatis!",
    categories: ["cate1", "cate2", "cate3"],
    avt: "https://qph.cf2.quoracdn.net/main-qimg-6050518b10b77cab9dfc95c4527c61ff-lq",
    author: "By Kishimoto Masashi",
    created_at: "JustNow",
  },
  {
    id: 2,
    name: "Comic Name",
    thumbnail:
      "https://res.cloudinary.com//dy9g317c9/image/upload/c_fill,h_600,w_400/v1/document_web/document/efezkbtcoi1wqzqdrpiy.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quisquam voluptates eum non sed, necessitatibus repudiandae ratione possimus, quas eius autem vitae recusandae nobis nulla provident maiores numquam adipisci veritatis!",
    categories: ["cate1", "cate2", "cate3"],
    avt: "https://qph.cf2.quoracdn.net/main-qimg-6050518b10b77cab9dfc95c4527c61ff-lq",
    author: "By Kishimoto Masashi",
    created_at: "JustNow",
  },
  {
    id: 3,
    name: "Comic Name",
    thumbnail:
      "https://res.cloudinary.com//dy9g317c9/image/upload/c_fill,h_600,w_400/v1/document_web/document/psmcoiydyrvu7ihj9l3o.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quisquam voluptates eum non sed, necessitatibus repudiandae ratione possimus, quas eius autem vitae recusandae nobis nulla provident maiores numquam adipisci veritatis!",
    categories: ["cate1", "cate2", "cate3"],
    avt: "https://qph.cf2.quoracdn.net/main-qimg-6050518b10b77cab9dfc95c4527c61ff-lq",
    author: "By Kishimoto Masashi",
    created_at: "JustNow",
  },
];

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
            {SLIDER_DATA.map((item) => {
              return <SlideBar item={item} key={item.id} />;
            })}
          </Slider>
        </div>

        <div className={classes.post_list}>
          {COMIC_ITEM_DATA.map((comic) => {
            return <DocumentItem comic={comic} key={comic.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;
