import React, { useState } from "react";
import classes from "./EditUser.module.css";
import Select from "react-select";
import { useForm } from "react-hook-form";

const accountTypeOptions = [
  { value: "User", label: "User", id: 0 },
  { value: "Admin", label: "Admin", id: 1 },
];

function EditUser(props) {
  const [image, setImage] = useState(
    props.userSelectedData.avt
      ? props.userSelectedData.avt
      : "https://res.cloudinary.com/dy9g317c9/image/upload/v1668783258/document_web/img/avatar/author_xfn2aa.jpg"
  );
  const { register, handleSubmit } = useForm();

  const accountInputHandler = (e) => {
    props.setInputData((prev) => ({
      ...prev,
      isAdmin: e.id,
    }));
  };
  const imageInputHandler = (e) => {
    const img = e.target.files[0];
    setImage(URL.createObjectURL(img));
    props.setInputData((prev) => ({
      ...prev,
      avt: img,
    }));
  };

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
          <h2>{props.isNew ? "New User" : "User Detail"}</h2>
        </header>

        <form onChange={handleSubmit(onSubmit)}>
          <div className={classes.content}>
            <div className={classes.preview__image}>
              <img src={image}></img>
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
              <input
                type="email"
                {...register("email")}
                defaultValue={props.userSelectedData.email}
              ></input>
            </div>
            <div>
              <label>Name</label>
              <input
                type="text"
                {...register("name")}
                defaultValue={props.userSelectedData.name}
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
            <button onClick={props.onDelete} hidden={props.isNew}>
              Delete
            </button>
            <button onClick={props.onConfirm} hidden={!props.isNew}>
              Confirm
            </button>
            <button onClick={props.onClose}>Cancel</button>
          </footer>
        </form>
      </div>
    </>
  );
}

export default EditUser;
