import React, { useState } from "react";

import CategoryItem from "./CategoryItem";

import classes from "./Category.module.css";

const DUMMY_CATEGORIES = [
  { name: "Economy", url: "cate/ecomomy" },
  { name: "Chemistry", url: "cate/chemistry" },
  { name: "History", url: "cate/history" },
  { name: "Geography", url: "cate/geography" },
  { name: "Computer Science", url: "cate/cs" },
  { name: "Biology", url: "cate/biology" },
  { name: "Language", url: "cate/language" },
  { name: "Maths", url: "cate/maths" },
];

function Category(props) {
  const [visibleCate, setVisibleCate] = useState(false);
  return (
    <div
      onMouseEnter={() => setVisibleCate(true)}
      onMouseLeave={() => setVisibleCate(false)}
      className={`${classes.cateWrap} ${
        visibleCate || props.hidden ? "" : classes.hideCate
      } `}
    >
      <div className={classes.category}>
        <ul>
          {DUMMY_CATEGORIES.map((item, index) => {
            return <CategoryItem item={item} key={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Category;
