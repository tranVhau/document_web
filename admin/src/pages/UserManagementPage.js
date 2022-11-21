import React, { useEffect } from "react";

import Button from "../components/UI/Button";
import Usertable from "../components/tables/UserTabe";
import EditUser from "../components/Modal/EditUser";

import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../store/actions/userAction";

import classes from "./asset/css/StandardMain.module.css";

function UserManagementPage() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
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

  const fetchAllUsers = () => {
    dispatch(getAllUsers());
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  console.log(users);

  const [state, setState] = React.useState(true);
  const [rowSelected, setRowSelected] = React.useState("");

  useEffect(() => {
    setState(!state);
  }, [rowSelected]);

  const closeHandler = () => {
    setRowSelected("");
    alert("firstname`s row selected " + rowSelected);
  };

  return (
    <>
      <div className={classes.main_title}>
        <p className={classes.font_weight_bold}>COMIC MANAGEMENT</p>
      </div>

      <div className={classes.col_md_12}>
        <div className={classes.tile}>
          <div className={classes.tile_body}>
            <div className={`${classes.row} ${classes.element_button}`}>
              <div className={classes.col_sm_2}>
                <Button
                  className={classes.add_btn}
                  onClick={() => alert("add btn effected")}
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
      {rowSelected && <EditUser onClose={closeHandler} />}
    </>
  );
}

export default UserManagementPage;
