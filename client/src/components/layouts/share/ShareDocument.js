import React from "react";
import classes from "./ShareDocument.module.css";
import { useForm } from "react-hook-form";

import { newDocument } from "../../../store/actions/documentAction";

import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

function ShareDocument(props) {
  const dispatch = useDispatch();
  const { register, handleSubmit, unregister } = useForm();

  const submitForm = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("desc", data.desc);
      formData.append("src", data.src[0]);
      // formData.append("user_id", userData.id);
      formData.append("isPublic", 0);
      unwrapResult(await dispatch(newDocument({ document: formData })));
      toast("We're So Appreciated With Your Contribution!", {
        type: "success",
      });

      props.onClose();
      // unregister(["name", "desc", "src"]);
    } catch (error) {
      toast(error, {
        type: "error",
      });
    }
  };

  return (
    <>
      <div
        className={props.shareVisible ? classes.backdrop : ""}
        onClick={props.onClose}
      ></div>
      <form onSubmit={handleSubmit(submitForm)}>
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
              <input
                type={"file"}
                accept="application/pdf"
                title="Document Name"
                {...register("src")}
              />
            </div>
            <div>
              <label>Name</label>
              <input
                type="text"
                title="Document Name"
                {...register("name")}
              ></input>
            </div>
            <div>
              <label>Description</label>
              <textarea
                placeholder="Description here..."
                {...register("desc")}
              ></textarea>
            </div>
          </div>
          <footer className={classes.actions}>
            <button type="submit">Share Now!</button>
            <button onClick={props.onClose}>Cancel</button>
          </footer>
        </div>
      </form>
      <ToastContainer position="top-right" newestOnTop />
    </>
  );
}

export default ShareDocument;
