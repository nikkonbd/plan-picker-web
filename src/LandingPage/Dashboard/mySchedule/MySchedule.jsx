import React from "react";
import ScheduleCard from "./ScheduleCard";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";

const MySchedule = () => {
  const { user } = useContext(AuthContext);
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://plan-picker-server.vercel.app/getEventByEmail/${user?.email}`
      )
      .then((response) => {
        const data = response.data;
        setSchedule(data);
        setLoading(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user?.email, schedule]);

  if (loading) {
    setLoading(false);
    return <p>Loading...</p>;
  }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  // const today = new Date();
  // const date =
  // today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  return (
    <div>
      <h2 className="relative text-2xl">
        My Schedule
        <span className="absolute px-2 py-1 text-xs text-white bg-orange-600 rounded-full animate-pulse">
          {schedule.length}
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-5 my-5 md:grid-cols-2 lg:grid-cols-2">
        {schedule.map((scheduleData) => (
          <ScheduleCard
            key={scheduleData._id}
            scheduleData={scheduleData}></ScheduleCard>
        ))}
      </div>
    </div>
  );
};

export default MySchedule;
