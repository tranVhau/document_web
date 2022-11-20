import React, { useEffect, useState } from "react";

import DocumentTable from "../components/tables/DocumentTable";

import classes from "./asset/css/StandardMain.module.css";
import { NavLink } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { getAllDocument, delDocument } from "../store/actions/documentAction";
import "react-alert-confirm/dist/index.css";
import confirm from "react-alert-confirm";

function DocManagementPage() {
  const [rowSelected, setRowSelected] = useState({});
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
        Header: "Contributor",
        accessor: "username",
      },
    ],
    []
  );

  const dispatch = useDispatch();
  const { document } = useSelector((state) => state.document);

  const fetchAllDocument = () => {
    dispatch(getAllDocument());
  };

  useEffect(() => {
    fetchAllDocument();
  }, []);

  const deleteDocHandler = () => {
    dispatch(delDocument(rowSelected.id));
    toast("Document Delete Successfully", {
      type: "success",
    });
    fetchAllDocument();
  };

  useEffect(() => {
    if (rowSelected.status === "delete") {
      confirm({
        title: "Delete",
        language: "en",
        content: <h2>Confirm To Delete</h2>,
        onOk: deleteDocHandler,
      });
    }
  }, [rowSelected]);

  return (
    <>
      <div className={classes.main_title}>
        <p className={classes.font_weight_bold}>DOCUMENT MANAGEMENT</p>
      </div>

      <div className={classes.col_md_12}>
        <div className={classes.tile}>
          <div className={classes.tile_body}>
            <div className={`${classes.row} ${classes.element_button}`}>
              <div className={classes.col_sm_2}>
                <NavLink to={"/new-doc"} className={classes.add_btn}>
                  Add
                </NavLink>
              </div>
            </div>
            <DocumentTable
              columns={columns}
              data={document}
              isDoc={true}
              navi="/edit-doc"
              setRowSelected={setRowSelected}
              pending={false}
            ></DocumentTable>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" newestOnTop />
    </>
  );
}

export default DocManagementPage;
