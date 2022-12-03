import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import DocumentItem from "../components/item/DocumentItem";

import { search, getByCategory } from "../store/actions/documentAction";
import { useDispatch, useSelector } from "react-redux";

import FilterSearch from "../components/item/Filter/FilterSearch";
import PaginatedItems from "../components/item/pagination/PaginatedItem";
import classes from "./asset/css/SearchPage.module.css";

import { documentReducerActions } from "../store/slices/documentSlice";

import { ToastContainer, toast } from "react-toastify";
const filterByCate = (document, cateID) => {
  const docArr = [];
  const id = cateID.split("=")[1];
  document?.forEach((element) => {
    if (element.categories.some((cate) => cate.category_id == id)) {
      docArr.push(element);
    }
  });
  return docArr;
};

const sortDocument = (document, action) => {
  const type = action.split("=")[1];
  document.sort((docA, docB) => {
    if (type === "asc") {
      return docA.created_at > docB.created_at ? 1 : -1;
    } else if (type === "desc") {
      return docA.created_at < docB.created_at ? 1 : -1;
    }
  });
};

function SearchPage() {
  const { document } = useSelector((state) => state.document);
  const [filterDoc, setFilterDoc] = useState(document);
  const { keyword, category } = useParams();
  const location = useLocation();

  const dispatch = useDispatch();
  const items = [];

  React.useEffect(() => {
    dispatch(documentReducerActions.sortDocument(location.search));
    if (location.search !== "?sort=asc" || location.search !== "?sort=desc") {
      setFilterDoc(filterByCate(document, location.search));
    }
    // console.log(setFilterDoc(sortDocument(document, location.search)));
    // console.log(filterDoc);
  }, [location.search, dispatch]);

  React.useEffect(() => {
    setFilterDoc(document);
  }, [document]);

  filterByCate(document, location.search);

  React.useEffect(() => {
    if (keyword !== "*") {
      dispatch(search(keyword));
    } else {
      dispatch(getByCategory(category));
    }
  }, [keyword, category, dispatch]);

  filterDoc?.map((doc) => {
    return items.push(<DocumentItem doc={doc} key={doc.id} />);
  });
  return (
    <div>
      <FilterSearch />
      {!document.length ? (
        <div className={classes.not__found}>Not Found</div>
      ) : (
        <PaginatedItems data={items} itemsPerPage={8} />
      )}
    </div>
  );
}

export default SearchPage;
