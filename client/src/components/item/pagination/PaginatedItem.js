import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Items from "./Items";

import classes from "./PaginatedItem.module.css";
import classes_1 from "../../../pages/asset/css/SearchPage.module.css";

function PaginatedItems({ itemsPerPage, data }) {
  const [items, setItem] = useState(data);

  useEffect(() => {
    setItem(data);
  }, [data]);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;

    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number (event.selected) ${event.selected}, which is offset (newOffset) ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className={classes_1.post_list}>
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="»"
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={pageCount}
        previousLabel="«"
        renderOnZeroPageCount={null}
        //css paginate
        containerClassName={classes.container}
        pageClassName={classes.page_item}
        pageLinkClassName={classes.page_link}
        previousClassName={classes.page_item}
        previousLinkClassName={classes.page_link}
        nextClassName={classes.page_item}
        nextLinkClassName={classes.page_link}
        activeClassName={classes.page_item_active}
      />
    </>
  );
}

export default PaginatedItems;
