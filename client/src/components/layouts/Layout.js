import React, { Fragment, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import Header from "./header/Header";
import Navigator from "./category/Navigator";
import classes from "./Layout.module.css";
import Footer from "./footer/Footer";

import ShareDocument from "./share/ShareDocument";

import { Outlet } from "react-router-dom";

function Layout(props) {
  const [shareVisible, setVisible] = useState(false);
  const scroll = useRef(null);
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const toggleModal = () => {
    setVisible(!shareVisible);
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
        <Outlet />
      </div>
      <div ref={scroll}></div>
      <Footer />

      {<ShareDocument onClose={toggleModal} shareVisible={shareVisible} />}
    </Fragment>
  );
}

export default Layout;
