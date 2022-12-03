import React, { useEffect, useState } from "react";

import Search from "../../ui/Search";
import AuthPage from "../../../pages/authentication/AuthPage";
import EditUserInfo from "../../item/Modal/EditUserInfo";

import { BiUserCircle } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import {
  logout,
  updateUser,
  getUserInfo,
} from "../../../store/actions/userAction";

import { userActionReducer } from "../../../store/slices/userSlice";

import classes from "./Header.module.css";

function Header({ isVisible }) {
  const isAuthVisible = useSelector((state) => state.user.isLogedIn);
  const dispatch = useDispatch();
  const [isOpenUserEdit, setIsOpenUserEdit] = useState(false);
  const [inputData, setInputData] = useState();
  // const [isAuthVisible, setAuthVisible] = React.useState(false);

  // const isLogedIn = useSelector((state) => state.user.userToken);
  const isLogedIn = localStorage.getItem("access_token");

  //userEdit

  const onLogoutHandler = async (e) => {
    e.preventDefault();
    try {
      unwrapResult(await dispatch(logout()));
      localStorage.clear();
      setIsOpenUserEdit(false);
      toast("Loged Out", {
        type: "success",
      });
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
      setIsOpenUserEdit(false);
    } catch (error) {
      toast(error, {
        type: "error",
      });
    }
  };

  const pesonalInfoHandler = async (e) => {
    e.preventDefault();
    setIsOpenUserEdit(true);
    const info = unwrapResult(await dispatch(getUserInfo()));
    for (let [key, value] of Object.entries(info)) {
      if (key !== "isAdmin" && key !== "created_at" && key !== "updated_at")
        localStorage.setItem(key, value);
    }
  };

  return (
    <>
      <header
        className={`${classes.header} ${
          !isVisible ? classes.hidden_header : ""
        }`}
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
              {isLogedIn ? (
                <BiUserCircle
                  onClick={pesonalInfoHandler}
                  className={classes.user_action_btn}
                />
              ) : (
                <button
                  className={classes.login_action_btn}
                  onClick={() => {
                    // setAuthVisible(true);
                    dispatch(userActionReducer.visibleLogin());
                  }}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>
      {isAuthVisible && (
        <AuthPage
          onClose={() => {
            // setAuthVisible(false);
            dispatch(userActionReducer.visibleLogin());
          }}
          // setAuthVisible={setAuthVisible}
        />
      )}
      {isOpenUserEdit && (
        <EditUserInfo
          onClose={() => {
            setIsOpenUserEdit(false);
            setInputData("");
          }}
          onLogout={onLogoutHandler}
          onUpdate={onUpdateHandler}
          setInputData={setInputData}
        />
      )}
      <ToastContainer position="top-right" newestOnTop />
    </>
  );
}

export default Header;
