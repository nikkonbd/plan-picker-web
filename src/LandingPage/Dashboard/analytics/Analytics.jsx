import React from "react";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
} from "recharts";

const Analytics = () => {
  // data for chart
  const data = [
    {
      name: "JAN",
      user: 4,
      event: 8,
    },
    {
      name: "FEB",
      user: 10,
      event: 5,
    },
    {
      name: "MAR",
      user: 5,
      event: 9,
    },
    {
      name: "APR",
      user: 7,
      event: 9,
    },
    {
      name: "MAY",
      user: 4,
      event: 12,
    },
    {
      name: "JUN",
      user: 11,
      event: 15,
    },
    {
      name: "JUL",
      user: 8,
      event: 11,
    },
    {
      name: "AUG",
      user: 16,
      event: 14,
    },
  ];
  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer>
        <LineChart
          width={500}
          height={5}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="event" stroke="#0040c9" />
          <Line type="monotone" dataKey="user" stroke="#009d3c" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
