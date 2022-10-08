import React from "react";

import classes from "../DocumentItem.module.css";

function SlideBar() {
  return (
    <div className={classes.post_feature}>
      <a
        href="#"
        className={`${classes.post_feature_media} ${classes.post_media}`}
      >
        <img
          src="https://static.lag.vn/upload/news/22/02/14/knyyy-1-1024x724_PUHV.jpg?w=800&encoder=wic&subsampling=444"
          alt=""
          className={classes.post_feature_image}
        />
      </a>
      <div className={classes.post_feature_info}>
        <a href="#" className={classes.post_category}>
          Kinh dị, Giả tưởng, siêu nhiên
        </a>
        <h2>
          <a
            href="#"
            className={`${classes.post_feature_title} ${classes.post_title}`}
          >
            Kimetsu No Yaiba
          </a>
        </h2>
        <p className={classes.post_desc}>
          Truyện kể về hành trình trở thành kiếm sĩ diệt quỷ của thiếu niên
          Kamado Tanjirō sau khi gia đình cậu bị quỷ sát hại và em gái Nezuko
          của cậu bị biến thành quỷ. Và cả 2 đã lên đường tìm cách cho người em
          trở lại thành người
        </p>
        <a href="#" className={classes.post_author}>
          <img
            src="https://gamek.mediacdn.vn/133514250583805952/2021/2/5/kmss1-16125223517951309982427.jpg"
            alt=""
            className={classes.post_author_image}
          />
          <div className={classes.post_author_info}>
            <h4 className={classes.post_author_name}>Gotoge Koyoharu</h4>
            <time className={classes.post_author_time}>Just now</time>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SlideBar;
