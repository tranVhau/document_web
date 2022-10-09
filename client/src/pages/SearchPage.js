import React from "react";

import FilterSearch from "../components/item/Filter/FilterSearch";
import DocumentItem from "../components/item/DocumentItem";

import classes from "./SearchPage.module.css";
function SearchPage() {
  return (
    <>
      <FilterSearch />
      <div className={classes.post_list}>
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
      </div>
    </>
  );
}

export default SearchPage;
