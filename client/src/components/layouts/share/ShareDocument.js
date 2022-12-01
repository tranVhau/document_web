import React from "react";
import classes from "./ShareDocument.module.css";

function ShareDocument(props) {
  return (
    <>
      <div
        className={props.shareVisible ? classes.backdrop : ""}
        onClick={props.onClose}
      ></div>
      <div
        className={
          props.shareVisible ? `${classes.modal} ` : `${classes.inVisible}`
        }
      >
        <header className={classes.header}>
          <h2>Share Your Document</h2>
        </header>
        <div className={classes.content}>
          <div>
            <label>Document</label>
            <input type={"file"} accept="application/pdf" />
          </div>
          <div>
            <label>Name</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Description</label>
            <textarea placeholder="Description here..."></textarea>
          </div>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onConfirm}>Share Now !</button>
          <button onClick={props.onClose}>Cancel</button>
        </footer>
      </div>
    </>
  );
}

export default ShareDocument;
