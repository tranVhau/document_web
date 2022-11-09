import React from "react";

import ResizableBox from "./wrapper-chart/ResizableBox";
import { Chart } from "react-charts";

function LineChart() {
  const startDate = new Date("2022-10-01");
  const endDate = new Date("2022-10-07");

  var arr = new Array();
  var dt = new Date(startDate);
  while (dt <= endDate) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }

  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        dataType: "time",
        data: [
          {
            primary: arr[0],
            secondary: 10,
          },
          {
            primary: arr[1],
            secondary: 20,
          },
          {
            primary: arr[2],
            secondary: 15,
          },
          {
            primary: arr[3],
            secondary: 30,
          },
          {
            primary: arr[4],
            secondary: 40,
          },
          {
            primary: arr[5],
            secondary: 20,
          },
          {
            primary: arr[6],
            secondary: 100,
          },
        ],
      },
    ],
    [arr]
  );

  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );
  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  return (
    <>
      <br />
      <br />
      <ResizableBox>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>
    </>
  );
}

export default LineChart;
