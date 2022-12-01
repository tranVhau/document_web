import React from "react";

import classes from "../DocumentItem.module.css";
import moment from "moment";

function SlideBar(props) {
  const calBetweenTimes = (past) => {
    const time = moment(moment()).diff(past, "day");
    if (time > 0) {
      return `${time} days ago`;
    } else if (time === 0) {
      return `${time} hours ago`;
    } else {
      return moment(past).format("DD/MMM/YYYY");
    }
  };
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
              {cate.category_name}
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
              {calBetweenTimes(props.item.created_at)}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideBar;
