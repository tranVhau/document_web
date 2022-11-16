import React, { useState } from "react";

import classes from "./asset/css/CategoryModal.module.css";

function AuthorModal(props) {
  const [authorInfo, setCateInfo] = useState({}); //retrive data for category page

  // useEffect(() => {
  //   setAvatar();
  // }, [props.editData]);

  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <form className={`${classes.modal} ${classes.fade} `}>
        <header className={classes.header}>
          <h2>{props.isNew ? "New Category" : "Category Detail"}</h2>
        </header>
        <div>
          <div className={classes.content}>
            <label>Category Name</label>
            <input
              type="text"
              onChange={(e) => {
                setCateInfo((prev) => {
                  return { name: e.target.value };
                });
                props.setCateData((prev) => {
                  return {
                    name: e.target.value,
                  };
                });
              }}
              defaultValue={props.editData.name ? props.editData.name : ""}
              required
            ></input>
          </div>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onConfirm} hidden={!props.isNew}>
            Confirm
          </button>
          <button onClick={props.onUpdate} hidden={props.isNew}>
            Update
          </button>
          <button onClick={props.onDelete} hidden={props.isNew}>
            Delete
          </button>
          <button onClick={props.onClose} hidden={false}>
            Cancel
          </button>
        </footer>
      </form>
    </>
  );
}

export default AuthorModal;
