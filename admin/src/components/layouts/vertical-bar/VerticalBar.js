import React from "react";

import { NavLink } from "react-router-dom";
import { TbDashboard, TbBooks } from "react-icons/tb";
import { BiCategoryAlt, BiUser, BiHistory } from "react-icons/bi";
import { MdOutlinePending, MdAdminPanelSettings } from "react-icons/md";

import classes from "./VerticalBar.module.css";

function VerticalBar() {
  return (
    <aside className={classes.sidebar}>
      <div className={classes.sidebar_title}>
        <NavLink to={"/dashboard"} className={classes.sidebar_brand}>
          <span className="material-icons-outlined">
            <MdAdminPanelSettings />
          </span>{" "}
          Admin
        </NavLink>
        <span className="material-icons-outlined">close</span>
      </div>

      <ul className={classes.sidebar_list}>
        <NavLink to={"/dashboard"} className={classes.sidebar_list_item}>
          <span className="material-icons-outlined">
            <TbDashboard />
          </span>{" "}
          Dashboard
        </NavLink>
        <NavLink to={"/doc-manage"} className={classes.sidebar_list_item}>
          <span className="material-icons-outlined">
            <TbBooks />
          </span>{" "}
          Documents
        </NavLink>
        <NavLink to={"/category-manage"} className={classes.sidebar_list_item}>
          <span className="material-icons-outlined">
            <BiCategoryAlt />
          </span>{" "}
          Categories
        </NavLink>
        <NavLink to={"/user-manage"} className={classes.sidebar_list_item}>
          <span className="material-icons-outlined">
            <BiUser />
          </span>{" "}
          Users
        </NavLink>
        <NavLink to={"/approved-log"} className={classes.sidebar_list_item}>
          <span className="material-icons-outlined">
            <BiHistory />
          </span>{" "}
          Approved
        </NavLink>
        <NavLink to={"/pending-post"} className={classes.sidebar_list_item}>
          <span className="material-icons-outlined">
            <MdOutlinePending />
          </span>{" "}
          Pending Posts
        </NavLink>
      </ul>
    </aside>
  );
}

export default VerticalBar;
