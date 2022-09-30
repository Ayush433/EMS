import { PieChart } from "@material-ui/icons";
import React from "react";
import FeaturedInfo from "./FeaturedInfo";
import WidgetSm from "./Widgetsm";
import Chart from "./Chart";
import Layout from "../components/Layout";
import User from "./User";

export default function DashboardHome() {
  return (
    <Layout>
      <FeaturedInfo />
      <WidgetSm />
      <Chart />
    </Layout>
  );
}
