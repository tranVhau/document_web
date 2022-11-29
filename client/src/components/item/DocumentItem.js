import React from "react";
import classes from "./DocumentItem.module.css";
import { NavLink } from "react-router-dom";

function DocumentItem(props) {
  return (
    <div className={classes.post_item}>
      <div className={classes.post_media}>
        <img
          src={props.doc.thumbnail}
          alt="something went wrong"
          className={classes.post_image}
        />
      </div>
      <div className={classes.post_info}>
        {props.doc.categories.map((cate, index) => {
          return (
            <div className={classes.post_category} key={index}>
              {cate}
            </div>
          );
        })}
        <NavLink to={`/document/${props.doc.id}`}>
          <div className={classes.post_title}>{props.doc.name}</div>
        </NavLink>
        <p className={classes.post_desc}>{props.doc.desc}</p>
        <div className={classes.post_author}>
          <img
            src={props.doc.avt}
            alt="something went wrong"
            className={classes.post_author_image}
          />
          <div className={classes.post_author_info}>
            <h4 className={classes.post_author_name}>{props.doc.author}</h4>
            <time className={classes.post_author_time}>
              {props.doc.created_at}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentItem;
