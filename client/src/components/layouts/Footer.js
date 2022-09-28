import React from "react";

import classes from "./Footer.module.css";
function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.logo}>LOGO</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a>Footer here</a>
          </li>
          {/* <li>
            <NavLink
              to={"/home"}
              className={(navLink) => (navLink.isActive ? classes.active : "")}
            >
              Home
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
