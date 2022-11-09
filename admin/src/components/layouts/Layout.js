import React from "react";

import HeaderSection from "./header/HeaderSection";
import VerticalBar from "./vertical-bar/VerticalBar";

import classes from "./Layouts.module.css";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <div className={classes.grid_container}>
      <HeaderSection />
      <VerticalBar />
      <div className={classes.main_container}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
