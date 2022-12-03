import React from "react";
import { useForm } from "react-hook-form";

import classes from "../AuthForm.module.css";

function LoginForm() {
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <div className={classes.control}>
        <label htmlFor="email">Your Email</label>
        <input type="email" id="email" {...register("email")} required />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Your Password</label>
        <input
          type="password"
          id="password"
          {...register("password")}
          required
        />
      </div>
    </div>
  );
}

export default LoginForm;
