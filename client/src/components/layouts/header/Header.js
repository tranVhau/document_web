import React from "react";

import Button from "../../ui/Button";

import Search from "../../ui/Search";

import classes from "./Header.module.css";

function Header({ isVisible }) {
  return (
    <header
      className={`${classes.header} ${!isVisible ? classes.hidden_header : ""}`}
    >
      <div className={classes.logo}>
        <img
          alt="someting went wrong"
          src={require("./asset/LogoDocumentWeb.png")}
        ></img>
      </div>
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
