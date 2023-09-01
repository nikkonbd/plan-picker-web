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
      address: "Chittagong, Bangladesh",
      date: "01-09-2023",
      start_time: "9 pm",
      end_time: "10 pm",
      expected_perticipents: 2,
      total_host: 1,
    },
  ];
  const schedule = [
    {
      id: 1,
      title: "Interview of company X",
      description: "Demo text for the description",
      address: "Khulna, Bangladesh",
      date: "06-09-2023",
      start_time: "11 am",
      end_time: "2 pm",
      expected_perticipents: 5,
      total_host: 2,
    },
    {
      id: 2,
      title: "Interview of company Y",
      description: "Demo text for the description",
      address: "Dhaka, Bangladesh",
      date: "08-09-2023",
      start_time: "4 pm",
      end_time: "8 pm",
      expected_perticipents: 20,
      total_host: 1,
    },
    {
      id: 3,
      title: "Interview of company Z",
      description: "Demo text for the description",
      address: "Dhaka, Bangladesh",
      date: "11-09-2023",
      start_time: "9 am",
      end_time: "11 am",
      expected_perticipents: 18,
      total_host: 1,
    },
  ];
  return (
    <div>
      <h2 className="text-2xl">Today ({date})</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {todayScedule.map((scheduleData) => (
          <ScheduleCard
            key={scheduleData.id}
            scheduleData={scheduleData}></ScheduleCard>
        ))}
      </div>
      <h2 className="text-2xl relative">
        Upcomming
        <span className="bg-orange-600 animate-pulse text-white px-2 py-1 text-xs rounded-full absolute">
          {schedule.length}
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {schedule.map((scheduleData) => (
          <ScheduleCard
            key={scheduleData.id}
            scheduleData={scheduleData}></ScheduleCard>
        ))}
      </div>
    </div>
  );
};

export default MySchedule;
