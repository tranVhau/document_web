import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { userLogin, registerUser } from "../../store/actions/userAction";
import { userActionReducer } from "../../store/slices/userSlice";

import classes from "./AuthForm.module.css";
import { unwrapResult } from "@reduxjs/toolkit";

const AuthPage = (props) => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    // dispatch(userActionReducer.visibleLogin());
  };

  // useEffect(() => {
  //   if (userToken) {
  //     toast("Welcome Back!", {
  //       type: "success",
  //     });

  //     // setTimeout(() => {
  //     //   navigate("/dashboard");
  //     // }, 3000);
  //   }
  //   // navigate("/dashboard");
  // }, [userToken]);

  const submitForm = async (data) => {
    try {
      if (isLogin) {
        unwrapResult(await dispatch(userLogin(data)));
        toast("Welcome Back!", {
          type: "success",
        });
        setTimeout(() => {
          dispatch(userActionReducer.visibleLogin());
        }, 1000);
      } else {
        unwrapResult(await dispatch(registerUser(data)));
        toast("Register Successfully!", {
          type: "success",
        });
      }
    } catch (error) {
      toast(error, {
        type: "error",
      });
    }
    // console.log(data);
  };

  return (
    <>
      <div className={classes.back__drop} onClick={props.onClose}></div>
      <section className={classes.auth} onSubmit={handleSubmit(submitForm)}>
        <h1>{isLogin ? "USER LOGIN" : "SIGN UP"}</h1>
        <form>
          {isLogin ? (
            <div>
              <div className={classes.control}>
                <label htmlFor="email">Your Email</label>
                <input type="email" {...register("email")} required />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Your Password</label>
                <input type="password" {...register("password")} required />
              </div>
            </div>
          ) : (
            <div>
              <div className={classes.control}>
                <label htmlFor="email">Enter Email</label>
                <input type="email" {...register("email")} required />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Enter Username</label>
                <input type="text" {...register("name")} required />
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Enter Password</label>
                <input type="password" {...register("password")} required />
              </div>
            </div>
          )}
          <div className={classes.actions}>
            {/* <button disabled={loading}>
              {isLogin ? "Login" : "Create Account"}
            </button> */}
            <button>{isLogin ? "Login" : "Create Account"}</button>
            <button
              type="reset"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create An Account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
      <ToastContainer position="top-right" newestOnTop />
    </>
  );
};

export default AuthPage;
