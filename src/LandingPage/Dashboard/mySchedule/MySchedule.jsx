import React from "react";
import ScheduleCard from "./ScheduleCard";
import { useEffect, useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";

const MySchedule = () => {
  const { user } = useContext(AuthContext);
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Axios GET request
    axios
      .get(`http://localhost:5000/getEventByEmail/${user?.email}`)
      .then((response) => {
        setSchedule(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means the effect runs once after initial render

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

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
