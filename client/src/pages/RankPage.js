import React from "react";

import HorizonItem from "../components/item/HorizonItem";

import classes from "../components/item/HorizonItem.module.css";

const COMIC_ITEM_DATA = [
  {
    id: 1,
    name: "Comic Name",
    thumbnail:
      "https://res.cloudinary.com//dy9g317c9/image/upload/c_fill,h_600,w_400/v1/document_web/document/e1ljhjf2vlpcslfjztls.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quisquam voluptates eum non sed, necessitatibus repudiandae ratione possimus, quas eius autem vitae recusandae nobis nulla provident maiores numquam adipisci veritatis!",
    categories: ["computer science", "math"],
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
    categories: ["history", "culture", "asia"],
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
    categories: ["animal", "wild life", "plant"],
    avt: "https://qph.cf2.quoracdn.net/main-qimg-6050518b10b77cab9dfc95c4527c61ff-lq",
    author: "By Kishimoto Masashi",
    created_at: "JustNow",
  },
];

function RankPage() {
  return (
    <div className={classes.container}>
      <div className={classes.tag_name}>
        <h1 className={classes.cate_tag}>Popular</h1>
      </div>
      {COMIC_ITEM_DATA.map((doc) => {
        return <HorizonItem doc={doc} key={doc.id} />;
      })}
    </div>
  );
}

export default RankPage;
