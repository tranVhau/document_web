import React from "react";

import CategoryList from "../components/item/List/CategoryList";

const COMIC_CATEGORY_ITEM_DATA = [
  {
    category: "Computer Science",
    docs: [
      {
        id: 1,
        name: "Comic Name",
        thumbnail:
          "https://res.cloudinary.com//dy9g317c9/image/upload/c_fill,h_600,w_400/v1/document_web/document/e1ljhjf2vlpcslfjztls.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quisquam voluptates eum non sed, necessitatibus repudiandae ratione possimus, quas eius autem vitae recusandae nobis nulla provident maiores numquam adipisci veritatis!",
        categories: ["Computer science", "Math"],
        avt: "https://res.cloudinary.com/dy9g317c9/image/upload/v1668783258/document_web/img/avatar/author_xfn2aa.jpg",
        author: "By Kishimoto Masashi",
        created_at: "JustNow",
      },
      {
        id: 2,
        name: "Comic Name",
        thumbnail:
          "https://res.cloudinary.com//dy9g317c9/image/upload/c_fill,h_600,w_400/v1/document_web/document/efezkbtcoi1wqzqdrpiy.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quisquam voluptates eum non sed, necessitatibus repudiandae ratione possimus, quas eius autem vitae recusandae nobis nulla provident maiores numquam adipisci veritatis!",
        categories: ["Computer science", "Economy"],
        avt: "https://res.cloudinary.com/dy9g317c9/image/upload/v1668783258/document_web/img/avatar/author_xfn2aa.jpg",
        author: "By Kishimoto Masashi",
        created_at: "JustNow",
      },
      {
        id: 3,
        name: "Comic Name",
        thumbnail:
          "https://res.cloudinary.com//dy9g317c9/image/upload/c_fill,h_600,w_400/v1/document_web/document/psmcoiydyrvu7ihj9l3o.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quisquam voluptates eum non sed, necessitatibus repudiandae ratione possimus, quas eius autem vitae recusandae nobis nulla provident maiores numquam adipisci veritatis!",
        categories: ["Computer science", "Physic", "cate3"],
        avt: "https://res.cloudinary.com/dy9g317c9/image/upload/v1668783258/document_web/img/avatar/author_xfn2aa.jpg",
        author: "By Kishimoto Masashi",
        created_at: "JustNow",
      },
      {
        id: 4,
        name: "Comic Name",
        thumbnail:
          "https://res.cloudinary.com//dy9g317c9/image/upload/c_fill,h_600,w_400/v1/document_web/document/kiw7m3koxwfaaa7rncgb.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quisquam voluptates eum non sed, necessitatibus repudiandae ratione possimus, quas eius autem vitae recusandae nobis nulla provident maiores numquam adipisci veritatis!",
        categories: ["cate1", "cate2", "cate3"],
        avt: "https://res.cloudinary.com/dy9g317c9/image/upload/v1668783258/document_web/img/avatar/author_xfn2aa.jpg",
        authorName: "By Kishimoto Masashi",
        created_at: "JustNow",
      },
    ],
  },
  {
    category: "Economy",
    docs: [
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
      {
        id: 4,
        name: "Comic Name",
        thumbnail:
          "https://res.cloudinary.com//dy9g317c9/image/upload/c_fill,h_600,w_400/v1/document_web/document/kiw7m3koxwfaaa7rncgb.jpg",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quisquam voluptates eum non sed, necessitatibus repudiandae ratione possimus, quas eius autem vitae recusandae nobis nulla provident maiores numquam adipisci veritatis!",
        categories: ["cate1", "cate2", "cate3"],
        avt: "https://qph.cf2.quoracdn.net/main-qimg-6050518b10b77cab9dfc95c4527c61ff-lq",
        authorName: "By Kishimoto Masashi",
        created_at: "JustNow",
      },
    ],
  },
];

function CategoryPage() {
  return (
    <div>
      {COMIC_CATEGORY_ITEM_DATA.map((item, index) => {
        return (
          <CategoryList category={item.category} docs={item.docs} key={index} />
        );
      })}
    </div>
  );
}

export default CategoryPage;
