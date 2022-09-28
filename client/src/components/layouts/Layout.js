import React, { Fragment } from "react";

import Header from "./Header";
import CategorySection from "./CategorySection";

import classes from "./Layout.module.css";
import Footer from "./Footer";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <CategorySection />
      <div className={classes.main}>{props.children}</div>

      <Footer />
    </Fragment>
  );
}

export default Layout;
