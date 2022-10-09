import React from "react";

import classes from "./FilterSearch.module.css";
// import OptionFilterItem from "./OptionFilterItem";

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

function FilterSearch() {
  return (
    <div className={`${classes.story_list_bl01} ${classes.box}`}>
      <table>
        <tbody>
          <tr>
            <th>Thể loại truyện</th>
          </tr>
          <tr>
            <td>
              <div className={`${classes.select} ${classes.is_warning}`}>
                <select className={classes.cate_options}>
                  {DUMMY_CATEGORIES.map((item, index) => {
                    return <option key={index}> {item.name}</option>;
                  })}
                </select>
              </div>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Tình trạng</th>
          </tr>
          <tr>
            <td>
              <ul className={classes.choose}>
                <li>
                  <a href="">Đang tiến hành</a>
                </li>
                <li>
                  <a href="">Hoàn thành</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Quốc gia</th>
          </tr>
          <tr>
            <td>
              <ul className={classes.choose}>
                <li>
                  <a title="Truyện Việt Nam" href="">
                    Việt Nam
                  </a>
                </li>
                <li>
                  <a title="Truyện Trung Quốc" href="">
                    Trung Quốc
                  </a>
                </li>
                <li>
                  <a title="Truyện Hàn Quốc" href="">
                    Hàn Quốc
                  </a>
                </li>
                <li>
                  <a title="Truyện Nhật Bản" href="">
                    Nhật Bản
                  </a>
                </li>
                <li>
                  <a title="Truyện Mỹ" href="">
                    Mỹ
                  </a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FilterSearch;
