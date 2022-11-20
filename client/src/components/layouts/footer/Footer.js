import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Footer.module.css";
function Footer() {
  return (
    <footer className={classes.footer}>
      <ul className={classes.footer__nav}>
        <li className={classes.footer__item}>
          <NavLink className={classes.footer__link}>About</NavLink>
        </li>
        <li className={classes.footer__item}>
          <NavLink className={classes.footer__link}>Pricing</NavLink>
        </li>
        <li className={classes.footer__item}>
          <NavLink className={classes.footer__link}>Terms of Use</NavLink>
        </li>
        <li className={classes.footer__item}>
          <NavLink className={classes.footer__link}>Privacy Policy</NavLink>
        </li>

        <li className={classes.footer__item}>
          <NavLink className={classes.footer__link}>Contact Us</NavLink>
        </li>
      </ul>
      <div className={classes.footer__logo}>
        <img
          className={classes.footer__logo}
          src={require("../header/asset/LogoDocumentWeb.png")}
        />
      </div>
      <p className={classes.footer__copyright}>
        &copy; Copyright by Group TTTN
      </p>
    </footer>
  );
}

export default Footer;
