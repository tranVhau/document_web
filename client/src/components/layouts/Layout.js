import React, { Fragment } from "react";

import Header from "./header/Header";
import Navigator from "./category/Navigator";
import classes from "./Layout.module.css";
import Footer from "./footer/Footer";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <Navigator />

      <div className={classes.main}>{props.children}</div>

      <Footer />
    </Fragment>
  );
}

export default Layout;
