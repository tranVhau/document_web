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
        <StatisticCard title={"Documents"} value={20} />
        <StatisticCard title={"AVG Rate"} value={4.7} />
        <StatisticCard title={"Users"} value={20} />
        <StatisticCard title={"Pending Posts"} value={10} />
      </div>
      <>
        <div className={classes.charts}>
          <div className={classes.charts_card}>
            <p className={classes.chart_title}>Top 5 Document</p>
            <div id="bar-chart">
              <BarChart />
            </div>
          </div>

          <div className={classes.charts_card}>
            <p className={classes.chart_title}>Pending Posts</p>
            <div id="area_chart">
              <LineChart />
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default DashBoardPage;
