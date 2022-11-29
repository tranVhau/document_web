import React, { useEffect, useState } from "react";

import Button from "../components/UI/Button";
import Usertable from "../components/tables/UserTabe";
import EditUser from "../components/Modal/EditUser";
import { ToastContainer, toast } from "react-toastify";

import { useDispatch } from "react-redux";
import {
  getAllUsers,
  newUser,
  updateUser,
  deleteUser,
} from "../store/actions/userAction";

import classes from "./asset/css/StandardMain.module.css";
import { unwrapResult } from "@reduxjs/toolkit";

function UserManagementPage() {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [isNewAction, setIsNewAction] = useState(false);
  const [inputData, setInputData] = useState({ isAdmin: 0 });
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "email",
        accessor: "email",
      },
    ],
    []
  );

  const fetchAllUsers = async () => {
    setUsers(unwrapResult(await dispatch(getAllUsers())));
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  const [state, setState] = React.useState(true);
  const [rowSelected, setRowSelected] = React.useState("");

  useEffect(() => {
    setState(!state);
  }, [rowSelected]);

  // new user
  const newUserHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (let [key, value] of Object.entries(inputData)) {
        console.log(`${key}: ${value}`);
        formData.append(key, value);
      }
      unwrapResult(await dispatch(newUser({ user: formData })));
      toast("User Account Created Successfully", {
        type: "success",
      });
      setRowSelected("");
      fetchAllUsers();
    } catch (error) {
      toast(error, {
        type: "error",
      });
    }
  };

  //update user
  const updateUserHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (let [key, value] of Object.entries(inputData)) {
        console.log(`${key}: ${value}`);
        formData.append(key, value);
      }
      unwrapResult(
        await dispatch(updateUser({ id: rowSelected.id, user: formData }))
      );
      toast("User Account Update Successfully", {
        type: "success",
      });
      setRowSelected("");
      fetchAllUsers();
    } catch (error) {
      toast(error, {
        type: "error",
      });
    }
  };
  //delete user
  const deleteUserHandler = async (e) => {
    e.preventDefault();
    try {
      unwrapResult(await dispatch(deleteUser(rowSelected.id)));
      toast("User Account Deleted Successfully", {
        type: "success",
      });
      setRowSelected("");
      fetchAllUsers();
    } catch (error) {
      toast(error, {
        type: "error",
      });
    }
  };

  return (
    <>
      <div className={classes.main_title}>
        <p className={classes.font_weight_bold}>USER MANAGEMENT</p>
      </div>

      <div className={classes.col_md_12}>
        <div className={classes.tile}>
          <div className={classes.tile_body}>
            <div className={`${classes.row} ${classes.element_button}`}>
              <div className={classes.col_sm_2}>
                <Button
                  className={classes.add_btn}
                  onClick={() => {
                    setRowSelected(!rowSelected);
                    setIsNewAction(true);
                  }}
                >
                  Add
                </Button>
              </div>
            </div>
            <Usertable
              columns={columns}
              data={users}
              setRowSelected={setRowSelected}
              navi={"/user"}
            ></Usertable>
          </div>
        </div>
      </div>
      {rowSelected && (
        <EditUser
          onClose={() => {
            setRowSelected("");
            setIsNewAction(false);
          }}
          onConfirm={newUserHandler}
          onDelete={deleteUserHandler}
          onUpdate={updateUserHandler}
          setInputData={setInputData}
          isNew={isNewAction}
          userSelectedData={rowSelected}
        />
      )}
      <ToastContainer position="bottom-right" newestOnTop />
    </>
  );
}

export default UserManagementPage;
