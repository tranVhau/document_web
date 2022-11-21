import React, { useEffect } from "react";
import classes from "./asset/css/StandardMain.module.css";

import HistoryTable from "../components/tables/HistoryTable";

import { useDispatch, useSelector } from "react-redux";
import { getAllHistory } from "../store/actions/historyAction";

function ApprovedLogPage() {
  const dispatch = useDispatch();
  const { history } = useSelector((state) => state.history);
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
        accessor: "user",
      },

      {
        Header: "Approved by",
        accessor: "admin_name",
      },
    ],
    []
  );
  const fetchAllHistory = () => {
    dispatch(getAllHistory());
  };

  useEffect(() => {
    fetchAllHistory();
  }, []);

  console.log(history);

  return (
    <>
      <div className={classes.main_title}>
        <p className={classes.font_weight_bold}>APPROVED HISTORY</p>
      </div>

      <div className={classes.col_md_12}>
        <div className={classes.tile}>
          <div className={classes.tile_body}>
            <div className={`${classes.row} ${classes.element_button}`}>
              <div className={classes.col_sm_2}></div>
            </div>
            <HistoryTable columns={columns} data={history}></HistoryTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApprovedLogPage;
