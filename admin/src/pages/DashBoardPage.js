import React, { useState, useEffect } from "react";

import StatisticCard from "../components/layouts/statistic/StatisticCard";
// import BarChart from "../components/charts/BarChart";

import classes from "./asset/css/StandardMain.module.css";
// import { overview } from "../store/actions/historyAction";
// import { popular } from "../store/actions/documentAction";
// import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import axiosClient from "../api/axiosClient";

import { useDispatch } from "react-redux";
import { getAllPendingDocument } from "../store/actions/documentAction";

import { render } from "react-dom";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  LineChart,
  Line,
  Tooltip,
  Legend,
} from "recharts";

function DashBoardPage() {
  const dispatch = useDispatch();
  const [pendingData, setPendingData] = useState();
  const [dashboardData, setdashboardData] = useState();
  const [topDocument, setTopDocument] = useState();

  const fetch5Doc = async () => {
    const res = await axiosClient.get(
      `http://localhost:8000/api/doc-popular/5`
    );
    setTopDocument(res.data);
  };

  const fetchOverview = async () => {
    const res = await axiosClient.get(`http://localhost:8000/api/overview`);
    setdashboardData(...res.data);
  };

  const fetchPendingData = async () => {
    setPendingData(unwrapResult(await dispatch(getAllPendingDocument())));
  };

  // const fetchDocument = async () => {
  //   try {
  //     setTopDocument(unwrapResult(await dispatch(popular(5))));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  useEffect(() => {
    fetchOverview();
    fetch5Doc();
    fetchPendingData();
  }, []);

  return (
    <>
      <div className={classes.main_title}>
        <p className={classes.font_weight_bold}>DASHBOARD</p>
      </div>
      <div className={classes.info_cards}>
        <StatisticCard
          title={"Documents"}
          value={dashboardData?.all_document}
        />
        <StatisticCard
          title={"AVG Rate"}
          value={Number(dashboardData?.avg_rate).toFixed(2)}
        />
        <StatisticCard title={"Users"} value={dashboardData?.all_user} />
        <StatisticCard
          title={"Pending Posts"}
          value={dashboardData?.all_pending}
        />
      </div>
      <>
        <div className={classes.charts}>
          <div className={classes.charts_card}>
            <p className={classes.chart_title}>Top 5 Document</p>
            <div className={classes.bar_chart}>
              <BarChart width={520} height={400} data={topDocument}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar label={true} dataKey="avgRate" fill="#8884d8" />
                <Tooltip />
                <Legend />
              </BarChart>
            </div>
          </div>

          <div className={classes.charts_card}>
            <p className={classes.chart_title}>Pending Posts</p>
            <div>
              <LineChart width={520} height={400} data={data}>
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
              </LineChart>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default DashBoardPage;
