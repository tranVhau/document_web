import React from "react";

import { NavLink } from "react-router-dom";

import classes from "./VerticalBar.module.css";

function VerticalBar() {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebar_title}>
        <NavLink to={"/dashboard"} className={classes.sidebar_brand}>
          <span className="material-icons-outlined">inventory</span> Admin
        </NavLink>
        <span className="material-icons-outlined">close</span>
      </div>

      <ul className={classes.sidebar_list}>
        <NavLink to={"/dashboard"} className={classes.sidebar_list_item}>
          <span className="material-icons-outlined">dashboard</span> Dashboard
        </NavLink>
        <NavLink to={"/doc-manage"} className={classes.sidebar_list_item}>
          <span className="material-icons-outlined">inventory_2</span> Documents
        </NavLink>
        <NavLink to={"/category-manage"} className={classes.sidebar_list_item}>
          <span className="material-icons-outlined">poll</span> Categories
        </NavLink>
        <NavLink to={"/user-manage"} className={classes.sidebar_list_item}>
          <span className="material-icons-outlined">settings</span> Users
        </NavLink>
        <NavLink to={"/approved-log"} className={classes.sidebar_list_item}>
          <span className="material-icons-outlined">settings</span> Approved
        </NavLink>
        <NavLink to={"/pending-post"} className={classes.sidebar_list_item}>
          <span className="material-icons-outlined">settings</span> Pending
          Posts
        </NavLink>
      </ul>
    </aside>
  );
}

export default VerticalBar;
