import React from "react";
import classes from "./EditUser.module.css";
import Select from "react-select";

const accountTypeOptions = [
  { value: "admin", label: "Admin" },
  { value: "admin1", label: "admin1" },
];

function EditUser(props) {
  const accountInputHandler = () => {};

  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <div className={`${classes.modal} ${classes.fade} `}>
        <header className={classes.header}>
          <h2>Edit User</h2>
        </header>
        <div className={classes.content}>
          <div>
            <label>Account</label>
            <Select
              closeMenuOnSelect={true}
              defaultValue={[accountTypeOptions[0]]}
              options={accountTypeOptions}
              onChange={accountInputHandler}
            />
          </div>
          <div>
            <label>Email </label>
            <input type="email"></input>
          </div>
          <div>
            <label>Password</label>
            <input type="Password" required></input>
          </div>
          <div>
            <label>Username</label>
            <input type="text"></input>
          </div>
          <div>
            <label>Address</label>
            <input type="text"></input>
          </div>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onConfirm}>Update</button>
          <button onClick={props.onDelete}>Delete</button>
          <button onClick={props.onClose}>Cancel</button>
        </footer>
      </div>
    </>
  );
}

export default EditUser;
