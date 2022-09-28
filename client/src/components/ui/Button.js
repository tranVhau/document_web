import React from "react";

import classes from "./Button.module.css";

function Button(props) {
  return <div className={classes.btn}>{props.children}</div>;
}

export default Button;
