import React from "react";
import classes from "./HeaderSection.module.css";

function HeaderSection() {
  return (
    <header className={classes.header}>
      <div className={classes.menu_icon}>
        <span className="material-icons-outlined">menu</span>
      </div>
      <div className="header_left">
        <span className="material-icons-outlined">search</span>
      </div>
      <div className="header_right">
        <span className="material-icons-outlined">notifications</span>
        <span className="material-icons-outlined">email</span>
        <span className="material-icons-outlined">account_circle</span>
      </div>
    </header>
  );
}

export default HeaderSection;
