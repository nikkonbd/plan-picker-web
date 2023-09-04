import React, { useState } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import TimezoneSelect from "react-timezone-select";
import EventDetails from "./EventDetails";

const SetMeeting = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({});

  console.log(selectedTimezone);

  const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
    return {
      id,
      startTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          9,
          0,
          0,
          0
        )
      ),
      endTime: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          17,
          0,
          0,
          0
        )
      ),
    };
  });

  return (
    <div className="flex flex-col items-center h-full text-center lg:items-start lg:text-left lg:flex-row">
      <div className="h-full p-5 mt-3 rounded-lg shadow-2xl xl:w-2/3 lg:w-4/5 md:">
        <EventDetails />

        <div className="z-10 mt-5">
          <h1 className="mb-2 font-bold ">Time zone</h1>
          <TimezoneSelect
            value={selectedTimezone}
            onChange={setSelectedTimezone}
          />
        </div>
      </div>
      <div className="-z-0">
        <ScheduleMeeting
          borderRadius={10}
          primaryColor="#3f5b85"
          eventDurationInMinutes={30}
          availableTimeslots={availableTimeslots}
          onStartTimeSelect={console.log}
          selectedDateDayTitleFormatString="cccc, LLLL do"
          startTimeListStyle="scroll-list"
          
        />
      </div>
    </div>
  );
};

export default SetMeeting;
