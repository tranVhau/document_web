import React from "react";
import classes from "./DocumentItem.module.css";
import { NavLink } from "react-router-dom";

function DocumentItem(props) {
  return (
    <div className={classes.post_item}>
      <div className={classes.post_media}>
        <img
          src={props.comic.thumbnail}
          alt="something went wrong"
          className={classes.post_image}
        />
      </div>
      <div className={classes.post_info}>
        {props.comic.categories.map((cate, index) => {
          return (
            <div className={classes.post_category} key={index}>
              {cate}
            </div>
          );
        })}
        <NavLink to={"/document"}>
          <div className={classes.post_title}>{props.comic.name}</div>
        </NavLink>
        <p className={classes.post_desc}>{props.comic.desc}</p>
        <div className={classes.post_author}>
          <img
            src={props.comic.avt}
            alt="something went wrong"
            className={classes.post_author_image}
          />
          <div className={classes.post_author_info}>
            <h4 className={classes.post_author_name}>{props.comic.author}</h4>
            <time className={classes.post_author_time}>
              {props.comic.created_at}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentItem;
