import React from "react";
import classes from "./DocumentItem.module.css";
import { NavLink } from "react-router-dom";
import moment from "moment";
import { AiFillStar } from "react-icons/ai";

function DocumentItem(props) {
  const calBetweenTimes = (past) => {
    const time = moment(moment()).diff(past, "day");
    if (time > 0 && time < 3) {
      return `${time} days ago`;
    } else if (time === 0) {
      return `${time} hours ago`;
    } else {
      return moment(past).format("DD/MMM/YYYY");
    }
  };

  return (
    <div className={classes.post_item}>
      <div className={classes.post_media}>
        <span className={classes.start_mark}>
          {`${
            props.doc.avgRate
              ? Number(props.doc.avgRate).toFixed(1) + "/5"
              : "-.-" + "/5"
          }`}
          <AiFillStar />
        </span>
        <img
          src={props.doc?.thumbnail}
          alt="something went wrong"
          className={classes.post_image}
        />
      </div>
      <div className={classes.post_info}>
        {props.doc?.categories.map((cate, index) => {
          return (
            <div className={classes.post_category} key={index}>
              {cate.category_name}
            </div>
          );
        })}
        <div className={classes.info__Wrapper}>
          <NavLink to={`/document/${props.doc?.id}`}>
            <div className={classes.post_title}>{props.doc?.name}</div>
          </NavLink>
          <p className={classes.post_desc}>{props.doc?.desc}</p>
          <div className={classes.post_author}>
            <img
              src={props.doc?.avt}
              alt="something went wrong"
              className={classes.post_author_image}
            />
            <div className={classes.post_author_info}>
              <h4 className={classes.post_author_name}>
                {props.doc?.username}
              </h4>
              <time className={classes.post_author_time}>
                {calBetweenTimes(props.doc?.created_at)}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocumentItem;
