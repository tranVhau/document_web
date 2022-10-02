import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Category from "../category/Category";

import classes from "./Navigator.module.css";

function Navigator() {
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
              <NavLink
                className={(navLink) =>
                  navLink.isActive ? classes.active : ""
                }
                to={"/categories"}
              >
                Category
              </NavLink>
            </li>

            <li>
              <NavLink
                className={(navLink) =>
                  navLink.isActive ? classes.active : ""
                }
                to={"/latest"}
              >
                Lastest
              </NavLink>
            </li>

            <li>
              <NavLink
                className={(navLink) =>
                  navLink.isActive ? classes.active : ""
                }
                to={"/trending"}
              >
                Popular
              </NavLink>
            </li>

            <li>
              <NavLink
                className={(navLink) =>
                  navLink.isActive ? classes.active : ""
                }
                to={"/share"}
              >
                Share
              </NavLink>
            </li>

            <li>
              <NavLink
                className={(navLink) =>
                  navLink.isActive ? classes.active : ""
                }
                to={"/contact"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <Category hidden={visibleCate} />
    </>
  );
}

export default Navigator;
