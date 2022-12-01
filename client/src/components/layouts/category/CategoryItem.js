import React from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

//import classes from "./CategoryItem.module.css";
import { getAllDocument } from "../../../store/actions/documentAction";

function CategoryItem(props) {
  const navigate = useNavigate();
  const getDocumentByCategoryHandler = (e) => {
    e.preventDefault();
    navigate(`/documents/*/${props.item.id}`);
  };
  return (
    <li>
      <NavLink onClick={getDocumentByCategoryHandler}>
        {props.item.name}
      </NavLink>
    </li>
  );
}

export default CategoryItem;
