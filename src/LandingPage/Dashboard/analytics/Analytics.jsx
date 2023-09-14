import React, { useState } from "react";

import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Analytics = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    setAllUsers(res.data);
    return res.data;
  });

  const userCountsByMonth = {};
  allUsers.forEach((user) => {
    const month = user.monthName;
    if (!userCountsByMonth[month]) {
      userCountsByMonth[month] = 1;
    } else {
      userCountsByMonth[month]++;
    }
  });

  // console.log(userCountsByMonth);
  const event = { June: 14, August: 18, July: 25, September: 20 };

  const data = Object.keys(userCountsByMonth).map((month) => ({
    month: month,
    users: userCountsByMonth[month],
    events: event[month],
  }));
  // console.log(data);

  return (
    <div>
      <div style={{ width: "100%", height: 500 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="events" fill="#00c8ff" />
            <Bar dataKey="users" fill="#02ccbb" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
