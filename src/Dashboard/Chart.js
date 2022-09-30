import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
  Bar,
} from "recharts";
import "../styles/Chart.css";

const Chart = () => {
  const data = [
    { name: "Toyota", value: 2000 },
    { name: "BMW", value: 1500 },
    { name: "Ford", value: 1000 },
    { name: "Hyundai", value: 500 },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Popular Car Brand In The World</h2>
      <div className="Chart">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};
export default Chart;
