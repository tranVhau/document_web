import React from "react";
import classes from "./asset/css/StandardMain.module.css";

import HistoryTable from "../components/tables/HistoryTable";
import Button from "../components/UI/Button";

function ApprovedLogPage() {
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
        accessor: "Contributor",
      },

      {
        Header: "Approved by",
        accessor: "approved",
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      {
        firstname: "firstname1",
        lastName: "hau1",
        age: 10,
        city: "...",
        status: "...",
      },
      {
        firstname: "firstname10",
        lastName: "hau2",
        age: 11,
        city: "...",
        status: "...",
      },
      {
        firstname: "firstname9",
        lastName: "hau3",
        age: 10,
        city: "...",
        status: "...",
      },
      {
        firstname: "firstname8",
        lastName: "hau4",
        age: 11,
        city: "...",
        status: "...",
      },
      {
        firstname: "firstname7",
        lastName: "hau5",
        age: 10,
        city: "...",
        status: "...",
      },
      {
        firstname: "firstname6",
        lastName: "hau6",
        age: 11,
        city: "...",
        status: "...",
      },
      {
        firstname: "firstname5",
        lastName: "hau7",
        age: 10,
        city: "...",
        status: "...",
      },
      {
        firstname: "firstname4",
        lastName: "hau8",
        age: 11,
        city: "...",
        status: "...",
      },
      {
        firstname: "firstname3",
        lastName: "hau9",
        age: 10,
        city: "...",
        status: "...",
      },
      {
        firstname: "firstname2",
        lastName: "hau10",
        age: 11,
        city: "...",
        status: "...",
      },
    ],
    []
  );

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
            <HistoryTable columns={columns} data={data}></HistoryTable>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApprovedLogPage;
