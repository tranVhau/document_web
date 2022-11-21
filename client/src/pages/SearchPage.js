import React from "react";
import DocumentItem from "../components/item/DocumentItem";

import FilterSearch from "../components/item/Filter/FilterSearch";
import PaginatedItems from "../components/item/pagination/PaginatedItem";

const COMIC_ITEM_DATA = [
  {
    id: 1,
    name: "Comic Name",
    thumbnail:
      "https://res.cloudinary.com//dy9g317c9/image/upload/c_fill,h_600,w_400/v1/document_web/document/e1ljhjf2vlpcslfjztls.jpg",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quisquam voluptates eum non sed, necessitatibus repudiandae ratione possimus, quas eius autem vitae recusandae nobis nulla provident maiores numquam adipisci veritatis!",
    categories: ["economy", "math", "physic"],
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
    categories: ["economy", "biology"],
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
    categories: ["economy", "other", "self help"],
    avt: "https://qph.cf2.quoracdn.net/main-qimg-6050518b10b77cab9dfc95c4527c61ff-lq",
    author: "By Kishimoto Masashi",
    created_at: "JustNow",
  },
];

function SearchPage() {
  const items = [];
  COMIC_ITEM_DATA.map((comic) => {
    return items.push(<DocumentItem comic={comic} key={comic.id} />);
  });
  return (
    <>
      <FilterSearch />
      <PaginatedItems data={items} itemsPerPage={4} />
    </>
  );
}

export default SearchPage;
