import React from "react";

import { useTable, usePagination, useGlobalFilter } from "react-table";
import classes from "./TableStyle.module.css";
import moment from "moment";

import { NavLink } from "react-router-dom";

function Table({ columns, data, isDoc, setRowSelected, navi }) {
  const tableBtn = (hooks) => {
    hooks.visibleColumns.push((columns) => [
      ...columns,
      {
        Header: "Thumbnail",
        accessor: "thumbnail",
        id: "thumb",
        Cell: (row) => {
          return (
            <div className={classes.img_wrapper}>
              <img
                className={classes.img}
                alt="document thumbnail"
                src={row.row.original.thumbnail}
              ></img>
            </div>
          );
        },
      },
      {
        Header: "Aprroved At",
        accessor: "updated_at",
        id: "publish",
        Cell: (row) => {
          const date = moment(row.row.original.updated_at).format(
            "DD/MMM/YYYY-HH:MM"
          );

          return <div>{date}</div>;
        },
      },
      {
        Header: "Actions",
        accessor: "Action",
        id: "action0",
        Cell: (row) => {
          return (
            <NavLink
              to={navi + "/" + row.row.original.id}
              className={classes.view_btn}
              onClick={() =>
                setRowSelected({
                  id: row.row.original.id,
                  name: row.row.original.name,
                })
              }
            >
              view
            </NavLink>
          );
        },
      },
    ]);
  };

  const tableInstance = useTable(
    {
      columns: columns,
      data: data,
      initialState: {
        hiddenColumns: ["id"],
      },
    },
    useGlobalFilter, // useGlobalFilter!
    usePagination,
    tableBtn
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    setPageSize,
    preGlobalFilteredRows,
    state: { pageIndex, pageSize, globalFilter },
  } = tableInstance;
  // console.log(tableInstance);
  React.useEffect(() => {
    // console.log(globalFilter);
  }, [globalFilter]);

  return (
    <>
      <div className={classes.header_table_bar}>
        <select
          className={classes.select_field}
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <input
          className={classes.search_input}
          type="text"
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder={`search in ${preGlobalFilteredRows.length} records`}
        />
      </div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  {/* Render the columns filter UI */}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={classes.footer_table_bar}>
        <div className={classes.pagination}>
          <div className={classes.nav_paginate}>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"← prev"}
            </button>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {"next →"}
            </button>

            <span>
              Page{""}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>
            </span>
          </div>
        </div>

        <div className={classes.result_status}>
          Showing the results in {rows.length} rows
        </div>
      </div>
    </>
  );
}
export default Table;
