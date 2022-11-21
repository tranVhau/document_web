import React from "react";

import classes from "./HorizonItem.module.css";

function HorizonItem(props) {
  return (
    <>
      <div className={classes.post_feature}>
        <div className={`${classes.post_eature_media}  ${classes.post_media}`}>
          <img
            className={classes.post_feature_image}
            alt="something went wrong"
            src={props.doc.thumbnail}
          />
        </div>
        <div className={classes.post_feature_info}>
          {props.doc.categories.map((cate, index) => {
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
              {props.doc.name}
            </div>
          </h2>
          <p className={classes.post_desc}>{props.doc.desc}</p>
          <div className={classes.post_author}>
            <img
              src={props.doc.avt}
              alt="something went wrong"
              className={classes.post_author_image}
            />
            <div className={classes.post_author_info}>
              <h4 className={classes.post_author_name}>{props.doc.author}</h4>
              <div className={classes.post_author_time}>
                {props.doc.created_at}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HorizonItem;
