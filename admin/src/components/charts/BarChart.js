import React from "react";

import ResizableBox from "./wrapper-chart/ResizableBox";
import { Chart } from "react-charts";

function BarChart() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          {
            primary: "Darknhantam",
            secondary: 100,
          },
          {
            primary: "Darknhantam2",
            secondary: 180,
          },
          {
            primary: "Darknhantam3",
            secondary: 120,
          },
        ],
      },
    ],
    []
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
      {/* <button onClick={randomizeData}>Randomize Data</button> */}
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

export default BarChart;
