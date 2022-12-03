import React, { Fragment, useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import HashLoader from "react-spinners/HashLoader";

import Header from "./header/Header";
import Navigator from "./category/Navigator";
import classes from "./Layout.module.css";
import Footer from "./footer/Footer";

import { useDispatch, useSelector } from "react-redux";

import ShareDocument from "./share/ShareDocument";
import { documentReducerActions } from "../../store/slices/documentSlice";

import { Outlet } from "react-router-dom";

function Layout(props) {
  const dispatch = useDispatch();
  const { loading, shareVisible } = useSelector((state) => state.document);
  // const [shareVisible, setVisible] = useState(false);
  const scroll = useRef(null);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const toggleModal = () => {
    dispatch(documentReducerActions.visibleShareModal());
    // setVisible(!shareVisible);
  };

  const uploadDocumnetcHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Fragment>
      <div className={classes.top_section}>
        <Header isVisible={inView} />
        <Navigator
          onClick={() => {
            scroll.current?.scrollIntoView({ behavior: "smooth" });
          }}
          toggleModal={toggleModal}
        />
      </div>
      <div ref={ref} />

      {/* all content show here */}
      <div className={classes.main}>
        <div
          className={`${loading ? classes.spinner__active : ""} ${
            classes.spinner__wrapper
          }`}
        >
          <div className={classes.spinner}>
            <HashLoader color="#495c83" />
          </div>
        </div>
        <Outlet />
      </div>
      <div ref={scroll}></div>
      <Footer />

      {
        <ShareDocument
          onClose={toggleModal}
          shareVisible={shareVisible}
          onConfirm={uploadDocumnetcHandler}
        />
      }
    </Fragment>
  );
}

export default Layout;
