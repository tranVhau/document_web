import React from "react";

import FilterSearch from "../components/item/Filter/FilterSearch";
import PaginatedItems from "../components/item/pagination/PaginatedItem";

function SearchPage() {
  return (
    <>
      <FilterSearch />
      <PaginatedItems itemsPerPage={4} />
    </>
  );
}

export default SearchPage;
