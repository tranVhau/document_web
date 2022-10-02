import React from "react";
import { NavLink } from "react-router-dom";

//import classes from "./CategoryItem.module.css";

function CategoryItem(props) {
  return (
    <li>
      <NavLink to={props.item.url}>{props.item.name}</NavLink>
    </li>
  );
}

export default CategoryItem;
