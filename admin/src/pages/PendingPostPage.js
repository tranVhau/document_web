import React, { useState, useEffect } from "react";
import classes from "./asset/css/StandardMain.module.css";

import Button from "../components/UI/Button";
import DocumentTable from "../components/tables/DocumentTable";

import { useDispatch, useSelector } from "react-redux";

import { getAllPendingDocument } from "../store/actions/documentAction";

function PendingPostPage() {
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
    dispatch(getAllPendingDocument());
  };

  useEffect(() => {
    fetchAllDocument();
  }, []);

  return (
    <>
      <div className={classes.main_title}>
        <p className={classes.font_weight_bold}>PENDING POSTS</p>
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
            <DocumentTable
              columns={columns}
              data={document}
              navi="/pending-action"
              pending={true}
            ></DocumentTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default PendingPostPage;
