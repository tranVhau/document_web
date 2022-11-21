import React from "react";

import classes from "../DocumentItem.module.css";

function SlideBar(props) {
  return (
    <div className={classes.post_feature}>
      <div className={`${classes.post_feature_media} ${classes.post_media}`}>
        <img
          src={props.item.thumbnail}
          alt="something went wrong"
          className={classes.post_feature_image}
        />
      </div>
      <div className={classes.post_feature_info}>
        {props.item.categories.map((cate, index) => {
          return (
            <div className={classes.post_category} key={index}>
              {cate}
            </div>
          );
        })}
        <h2>
          <div
            className={`${classes.post_feature_title} ${classes.post_title}`}
          >
            {props.item.name}
          </div>
        </h2>
        <p className={classes.post_desc}>{props.item.desc}</p>
        <div className={classes.post_author}>
          <img
            src={props.item.avt}
            alt="something went wrong"
            className={classes.post_author_image}
          />
          <div className={classes.post_author_info}>
            <h4 className={classes.post_author_name}>{props.item.author}</h4>
            <time className={classes.post_author_time}>
              {props.item.created_at}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideBar;
