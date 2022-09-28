import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./CategorySection.module.css";

function CategorySection() {
  return (
    <div className={classes.category}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navLink) => (navLink.isActive ? classes.active : "")}
              to={"/home"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navLink) => (navLink.isActive ? classes.active : "")}
              to={"/categories"}
            >
              Category
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(navLink) => (navLink.isActive ? classes.active : "")}
              to={"/latest"}
            >
              Lastest
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(navLink) => (navLink.isActive ? classes.active : "")}
              to={"/trending"}
            >
              Popular
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(navLink) => (navLink.isActive ? classes.active : "")}
              to={"/share"}
            >
              Share
            </NavLink>
          </li>

          <li>
            <NavLink
              className={(navLink) => (navLink.isActive ? classes.active : "")}
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default CategorySection;
