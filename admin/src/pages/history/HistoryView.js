import React, { useEffect, useState } from "react";
import PdfSection from "../../components/document/pdf/PdfSection";
import { BsCalendarDate } from "react-icons/bs";
import { FaFeather, FaClipboardCheck } from "react-icons/fa";

import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getHistory } from "../../store/actions/historyAction";
import { unwrapResult } from "@reduxjs/toolkit";

import classes from "../asset/css/HistoryView.module.css";
import moment from "moment";

function HistoryView() {
  const [history, setHistory] = useState([]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const fetchHistory = async (id) => {
    setHistory(...unwrapResult(await dispatch(getHistory(id))));
  };

  useEffect(() => {
    fetchHistory(id);
  }, []);

  console.log(history);
  return (
    <>
      <h2>History View</h2>
      <div className={classes.make__center}>
        <div>
          <div className={classes.book_info}>
            <div className={classes.book_avatar}>
              <img src={history.thumbnail}></img>
            </div>
            <div className={classes.book_other}>
              <h3>{history.name}</h3>
              <div>
                <ul className={classes.list_info}>
                  <li className={classes.post_author}>
                    <FaFeather />
                    <p className={classes.info_title}>Contributor:</p>
                    <img
                      src={history.user_avt}
                      className={classes.post_author_image}
                    />
                    <div className={classes.pos_author_info}>
                      <h4 className={classes.post_author_name}>
                        {history.user}
                      </h4>
                    </div>
                  </li>
                  <li className={classes.post_author}>
                    <FaClipboardCheck />
                    <p className={classes.info_title}>Approver:</p>
                    <img
                      src={history.admin_avt}
                      className={classes.post_author_image}
                    />
                    <div className={classes.pos_author_info}>
                      <h4 className={classes.post_author_name}>
                        {history.admin_name}
                      </h4>
                    </div>
                  </li>
                  <li>
                    <BsCalendarDate />
                    <p className={classes.info_title}>Upload Date</p>
                    <p>{moment(history.created_at).format("DD/MM/YYYY")}</p>
                  </li>
                </ul>
                <ul className={classes.cates_list}>
                  {history.categories
                    ? history.categories.map((category) => {
                        return <li>{category}</li>;
                      })
                    : ""}
                </ul>
              </div>
            </div>
          </div>
          <div className={classes.desc_section}>
            <h3> Description: </h3>
            <p>{history.desc}</p>
          </div>
        </div>
      </div>
      <PdfSection urlFile={history.src} />
    </>
  );
}

export default HistoryView;
