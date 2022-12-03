import React, { useState, useEffect } from "react";

import ResizableBox from "./wrapper-chart/ResizableBox";
import { Chart } from "react-charts";

function BarChart(props) {
  const [dat, setData] = useState(props.data);
  // console.log(dat);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  console.log(dat);
  // const data = [
  //   {
  //     label: "Series 1",
  //     data: [
  //       // {
  //       //   primary: "Darknhantam",
  //       //   secondary: 100,
  //       // },
  //       // {
  //       //   primary: "Darknhantam2",
  //       //   secondary: 180,
  //       // },
  //       // {
  //       //   primary: "Darknhantam3",
  //       //   secondary: 120,
  //       // },
  //     ],
  //   },
  // ];

  // useEffect(() => {
  //   dat?.forEach((element) => {
  //     let obj = {
  //       primary: element.name,
  //       secondary: element.avgRate,
  //     };
  //     // temData.push(obj);
  //     data[0].data.push(obj);
  //   });
  // }, [dat]);

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
            dat,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </ResizableBox>
    </>
  );
}

export default BarChart;
