import React from "react";
import { useForm } from "react-hook-form";

import classes from "../AuthForm.module.css";

function SignUpForm() {
  const { register, handleSubmit } = useForm();

  return (
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
  );
}

export default SignUpForm;
