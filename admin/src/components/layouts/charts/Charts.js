import React from "react";

import StatisticCard from "../statistic/StatisticCard";
function Charts() {
  return (
    <main class="main-container">
      <div class="main-title">
        <p class="font-weight-bold">DASHBOARD</p>
      </div>

      <div class="main_cards">
        <StatisticCard />
        <StatisticCard />
        <StatisticCard />
      </div>

      <div class="charts">
        <div class="charts-card">
          <p class="chart-title">Top 5 Document</p>
          <div id="bar-chart"></div>
        </div>

        <div class="charts_card">
          <p class="chart_title">Evaluate</p>
          <div id="area_chart"></div>
        </div>
      </div>
    </main>
  );
}

export default Charts;
