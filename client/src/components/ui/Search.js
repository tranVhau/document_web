import React, { useState, useRef } from "react";

import { useNavigate } from "react-router-dom";
import classes from "./Search.module.css";

function Search() {
  const navigate = useNavigate();
  const inputElement = useRef();

  const searchHandler = (e) => {
    if (e.key === "Enter") {
      navigate(`/documents/${inputElement.current.value}`);
      inputElement.current.value = "";
    }
  };
  return (
    <input
      onKeyDown={searchHandler}
      className={classes.search}
      placeholder="Search"
      ref={inputElement}
    ></input>
  );
}

export default Search;
