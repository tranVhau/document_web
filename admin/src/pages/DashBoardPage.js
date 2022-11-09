import React from "react";

import StatisticCard from "../components/layouts/statistic/StatisticCard";
import BarChart from "../components/charts/BarChart";

import classes from "./asset/css/StandardMain.module.css";
import LineChart from "../components/charts/LineChart";

function DashBoardPage() {
  return (
    <>
      <div className={classes.main_title}>
        <p className={classes.font_weight_bold}>DASHBOARD</p>
      </div>
      <div className={classes.info_cards}>
        <StatisticCard title={"likes"} value={14212} />
        <StatisticCard title={"likes"} value={14212} />
        <StatisticCard title={"likes"} value={14212} />
        <StatisticCard title={"likes"} value={14212} />
      </div>
      <>
        <div>
          <BarChart />
        </div>
        <div>
          <LineChart />
        </div>
      </>
    </>
  );
}

export default DashBoardPage;
