import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";

import documentAPI from "../../../api/documentAPI";

import classes from "./FilterSearch.module.css";
// import OptionFilterItem from "./OptionFilterItem";

// const DUMMY_CATEGORIES = [
//   { name: "Economy", url: "cate/ecomomy" },
//   { name: "Chemistry", url: "cate/chemistry" },
//   { name: "History", url: "cate/history" },
//   { name: "Geography", url: "cate/geography" },
//   { name: "Computer Science", url: "cate/cs" },
//   { name: "Biology", url: "cate/biology" },
//   { name: "Language", url: "cate/language" },
//   { name: "Maths", url: "cate/maths" },
// ];

function FilterSearch() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isAscending, setIsAscending] = useState(true);
  const [categories, setCategoyList] = useState();

  const fetchCategory = async () => {
    const res = await documentAPI.getAllCategory();
    setCategoyList(res.data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const changeSortStatusHandler = (e) => {
    e.preventDefault();
    setIsAscending(!isAscending);
    isAscending
      ? (location.search = `?sort=asc`)
      : (location.search = `?sort=desc`);
    navigate(`${location.pathname}${location.search}`);
  };

  const categoryChangeHandler = (e) => {
    e.preventDefault();
    navigate(`${location.pathname}?cate=${e.target.value}`);
  };

  return (
    <div className={`${classes.story_list_bl01} ${classes.box}`}>
      <h4>Filter:</h4>
      <table>
        <tbody>
          <tr>
            <th>Categories</th>
          </tr>
          <tr>
            <td>
              <div className={`${classes.select} ${classes.is_warning}`}>
                <select
                  onChange={categoryChangeHandler}
                  className={classes.cate_options}
                >
                  {categories?.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Sort By Date</th>
          </tr>
          <tr>
            <td>
              <ul className={classes.choose}>
                <li>
                  <NavLink onClick={changeSortStatusHandler}>
                    {isAscending ? "Ascending" : "Descending"}
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink onClick={changeSortStatusHandler}>
                    Descending
                  </NavLink>
                </li> */}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FilterSearch;
