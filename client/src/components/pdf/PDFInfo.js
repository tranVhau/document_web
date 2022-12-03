import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import moment from "moment";
import classes from "./PDFInfo.module.css";

function PDFInfo({ document }) {
  return (
    <div>
      <div className={classes.book_info}>
        <div className={classes.book_avatar}>
          <img
            src={document.thumbnail?.replace(
              "b_auto,c_pad,h_400,w_600",
              "h_500,w_400"
            )}
          ></img>
        </div>
        <div className={classes.book_other}>
          <h1>{document.name}</h1>
          <div>
            <ul className={classes.list_info}>
              <a href="#" className={classes.post_author}>
                <img src={document.avt} className={classes.post_author_image} />
                <div className={classes.pos_author_info}>
                  <h4 className={classes.post_author_name}>
                    {document.username}
                  </h4>
                </div>
              </a>
              <li>
                <BsCalendarDate />
                <p className={classes.info_title}>Upload Date</p>
                <p>{moment(document.created_at).format("DD/MMM/YYYY")}</p>
              </li>
              <li>
                <AiOutlineStar />
                <p className={classes.info_title}>Rating</p>
                <p>
                  {`${
                    document.avgRate
                      ? Number(document.avgRate).toFixed(1) + "/5"
                      : "-.-" + "/5"
                  }  (${document.sumOfRate})`}
                </p>
              </li>
            </ul>
            <ul className={classes.cates_list}>
              {document.categories?.map((cate, index) => (
                <li key={index}>{cate}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.desc_section}>
        <h3> Introduce </h3>
        <p>{document.desc}</p>
      </div>
    </div>
  );
}

export default PDFInfo;
