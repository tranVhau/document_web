import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { getUserInfo } from "../../store/actions/userAction";

import classes from "./EditUserInfo.module.css";

function EditUserInfo(props) {
  const [currUser, setCurrUser] = useState();
  const dispatch = useDispatch();
  // const [image, setImage] = useState(localStorage.getItem("avt"));
  const { register, handleSubmit } = useForm();

  const getCurrUserInfo = async () => {
    setCurrUser(unwrapResult(await dispatch(getUserInfo())));
  };

  useEffect(() => {
    getCurrUserInfo();
  }, []);

  const imageInputHandler = (e) => {
    const img = e.target.files[0];
    setCurrUser((prev) => {
      return {
        ...prev,
        avt: URL.createObjectURL(img),
      };
    });
    props.setInputData((prev) => ({
      ...prev,
      avt: img,
    }));
  };

  console.log(currUser);

  const onSubmit = (data) => {
    props.setInputData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose}></div>
      <div className={`${classes.modal} ${classes.fade} `}>
        <header className={classes.header}>
          <h2>Change Personal Info</h2>
        </header>

        <form onChange={handleSubmit(onSubmit)}>
          <div className={classes.content}>
            <div className={classes.preview__image}>
              <img src={currUser?.avt}></img>
              <div className={classes.input__avt}>
                <label>User Avatar</label>
                <input
                  className={classes.avt__upload}
                  type="file"
                  accept="image/*"
                  onChange={imageInputHandler}
                ></input>
              </div>
            </div>
            <div>
              <label>Email </label>
              <input
                type="email"
                {...register("email")}
                placeholder={currUser?.email}
              ></input>
            </div>
            <div>
              <label>Name</label>
              <input
                type="text"
                {...register("name")}
                placeholder={currUser?.name}
              ></input>
            </div>
            <div>
              <label>Password</label>
              <input type="Password" required {...register("password")}></input>
            </div>
          </div>
          <footer className={classes.actions}>
            <button onClick={props.onUpdate} hidden={props.isNew}>
              Update
            </button>
            <button onClick={props.onLogout} hidden={props.isNew}>
              Logout
            </button>
            <button onClick={props.onClose}>Cancel</button>
          </footer>
        </form>
      </div>
    </>
  );
}

export default EditUserInfo;
