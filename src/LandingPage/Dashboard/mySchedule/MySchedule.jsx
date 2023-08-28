import React from "react";
import ScheduleCard from "./ScheduleCard";

const MySchedule = () => {
  const today = new Date();
  const date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  const todayScedule = [
    {
      id: 11,
      title: "Interview of company X",
      description: "Demo text for the description",
      address: "Bangladesh",
      date: "01-09-2023",
      start_time: "11 am",
      end_time: "2 pm",
      expected_perticipents: 12,
      total_host: 3,
    },
  ];
  const schedule = [
    {
      id: 1,
      title: "Interview of company X",
      description: "Demo text for the description",
      address: "Bangladesh",
      date: "06-09-2023",
      start_time: "11 am",
      end_time: "2 pm",
      expected_perticipents: 12,
      total_host: 3,
    },
    {
      id: 2,
      title: "Interview of company Y",
      description: "Demo text for the description",
      address: "Dhaka",
      date: "08-09-2023",
      start_time: "11am",
      end_time: "2pm",
      expected_perticipents: 12,
      total_host: 1,
    },
    {
      id: 3,
      title: "Interview of company Y",
      description: "Demo text for the description",
      address: "Dhaka",
      date: "11-09-2023",
      start_time: "11am",
      end_time: "2pm",
      expected_perticipents: 12,
      total_host: 1,
    },
  ];
  return (
    <div>
      <h2 className="text-2xl">Today ({date})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        {todayScedule.map((scheduleData) => (
          <ScheduleCard
            key={scheduleData.id}
            scheduleData={scheduleData}
          ></ScheduleCard>
        ))}
      </div>
      <h2 className="text-2xl relative">
        Upcomming
        <span className="bg-orange-600 animate-pulse text-white px-2 py-1 text-xs rounded-full absolute">
          {schedule.length}
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        {schedule.map((scheduleData) => (
          <ScheduleCard
            key={scheduleData.id}
            scheduleData={scheduleData}
          ></ScheduleCard>
        ))}
      </div>
    </div>
  );
};

export default MySchedule;
