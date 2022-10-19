import React from "react";

import classes from "./HorizonItem.module.css";

function HorizonItem() {
  return (
    <>
      <div className={classes.post_feature}>
        <a className={`${classes.post_eature_media}  ${classes.post_media}`}>
          <img
            className={classes.post_feature_image}
            src="https://i.doanhnhansaigon.vn/2021/10/23/25dacnhantam48-1634975033_750x0.jpg"
          />
        </a>
        <div className={classes.post_feature_info}>
          <a className={classes.post_category}>Văn học</a>
          <h2>
            <a
              className={`${classes.post_feature_title} ${classes.post_title}`}
            >
              Đắc Nhân Tâm
            </a>
          </h2>
          <p className={classes.post_desc}>
            Đắc nhân tâm (Được lòng người), tên tiếng Anh là How to Win Friends
            and Influence People là một quyển sách nhằm tự giúp bản thân
            (self-help) bán chạy nhất từ trước đến nay. Quyển sách này do Dale
            Carnegie viết và đã được xuất bản lần đầu vào năm 1936, nó đã được
            bán 15 triệu bản trên khắp thế giới.
          </p>
          <a className={classes.post_author}>
            <img
              src="data:image/jpeg;base64,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"
              className={classes.post_author_image}
            />
            <div className={classes.post_author_info}>
              <h4 className={classes.post_author_name}>By Dale Carnegie</h4>
              <div className={classes.post_author_time}>Just now</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default HorizonItem;
