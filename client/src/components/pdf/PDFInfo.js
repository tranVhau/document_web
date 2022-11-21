import React from "react";
import { BsCalendarDate } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";

import classes from "./PDFInfo.module.css";

function PDFInfo() {
  return (
    <div>
      <div className={classes.book_info}>
        <div className={classes.book_avatar}>
          <img src="https://res.cloudinary.com//dy9g317c9/image/upload/c_fill,h_600,w_400/v1/document_web/document/e1ljhjf2vlpcslfjztls.jpg"></img>
        </div>
        <div className={classes.book_other}>
          <h1>Document Name</h1>
          <div>
            <ul className={classes.list_info}>
              <a href="#" className={classes.post_author}>
                <img
                  src="https://res.cloudinary.com/dy9g317c9/image/upload/v1668783258/document_web/img/avatar/author_xfn2aa.jpg"
                  className={classes.post_author_image}
                />
                <div className={classes.pos_author_info}>
                  <h4 className={classes.post_author_name}>
                    Kishimoto Masashi
                  </h4>
                </div>
              </a>
              <li>
                <BsCalendarDate />
                <p className={classes.info_title}>Upload Date</p>
                <p>16/10/2022</p>
              </li>
              <li>
                <AiOutlineStar />
                <p className={classes.info_title}>Rating</p>
                <p>4.8/5</p>
              </li>
              {/* <li>
                <p className={classes.info_title}>Views</p>
                <p>54,501</p>
              </li> */}
            </ul>
            <ul className={classes.cates_list}>
              <li>computer-science</li>
              <li>biology</li>
              <li>physic</li>
              <li>language</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.desc_section}>
        <h3> Introduce </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          blanditiis sint soluta eos. Obcaecati id labore similique asperiores
          maxime dicta quos impedit illum praesentium repudiandae, dignissimos
          officia optio temporibus perferendis.
        </p>
      </div>
    </div>
  );
}

export default PDFInfo;
