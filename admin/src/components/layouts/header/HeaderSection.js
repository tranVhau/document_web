import React, { useState } from "react";
import classes from "./HeaderSection.module.css";
import EditUserInfo from "../../Modal/EditUserInfo";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { logout, updateUser } from "../../../store/actions/userAction";

function HeaderSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputData, setInputData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutHandler = async (e) => {
    e.preventDefault();
    try {
      unwrapResult(await dispatch(logout()));
      localStorage.clear();
      toast("Loged Out", {
        type: "success",
      });
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      toast(error, {
        type: "error",
      });
    }
  };

  const onUpdateHandler = async (e) => {
    e.preventDefault();
    console.log(inputData);
    try {
      const formData = new FormData();
      for (let [key, value] of Object.entries(inputData)) {
        console.log(`${key}: ${value}`);
        formData.append(key, value);
      }
      unwrapResult(
        await dispatch(
          updateUser({ id: localStorage.getItem("id"), user: formData })
        )
      );
      toast("User Account Update Successfully", {
        type: "success",
      });
      setInputData("");
      setIsOpen(false);
    } catch (error) {
      toast(error, {
        type: "error",
      });
    }
  };
  return (
    <>
      <header className={classes.header}>
        <div className={classes.menu_icon}>
          <span className="material-icons-outlined">menu</span>
        </div>
        <div className="header_left"></div>
        <div className="header_right">
          <span
            className={`material-icons-outlined ${classes.user__logout}`}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            account_circle
          </span>
        </div>
        {isOpen && (
          <EditUserInfo
            onClose={() => {
              setIsOpen(false);
              setInputData("");
            }}
            onLogout={onLogoutHandler}
            onUpdate={onUpdateHandler}
            setInputData={setInputData}
          />
        )}
      </header>
      <ToastContainer position="bottom-right" newestOnTop />
    </>
  );
}

export default HeaderSection;
