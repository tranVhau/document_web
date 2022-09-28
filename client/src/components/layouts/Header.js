import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

import Search from "../ui/Search";

import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>LOGO</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Search />
          </li>

          <li>
            <Button>Register</Button>
          </li>

          <li>
            <Button>Login</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
