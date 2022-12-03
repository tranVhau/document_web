import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Category from "../category/Category";

import classes from "./Navigator.module.css";

function Navigator(props) {
  const [visibleCate, setVisibleCate] = useState(false);
  return (
    <>
      <div className={classes.navigator}>
        <nav>
          <ul>
            <li>
              <NavLink
                className={(navLink) =>
                  navLink.isActive ? classes.active : ""
                }
                to={"/home"}
              >
                Home
              </NavLink>
            </li>
            <li
              onMouseEnter={() => setVisibleCate(true)}
              onMouseLeave={() => setVisibleCate(false)}
            >
              <div className={classes.contact}>Category</div>
            </li>

            {/* <li>
              <NavLink
                className={(navLink) =>
                  navLink.isActive ? classes.active : ""
                }
                to={"/latest"}
              >
                Lastest
              </NavLink>
            </li> */}

            <li>
              <NavLink
                className={(navLink) =>
                  navLink.isActive ? classes.active : ""
                }
                to={"/popular"}
              >
                Popular
              </NavLink>
            </li>

            <li>
              <div className={classes.contact} onClick={props.toggleModal}>
                Share
              </div>
            </li>

            <li>
              <div className={classes.contact} onClick={props.onClick}>
                About
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <Category hidden={visibleCate} />
    </>
  );
}

export default Navigator;
