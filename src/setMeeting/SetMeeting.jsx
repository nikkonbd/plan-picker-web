import React, { useState } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import TimezoneSelect from "react-timezone-select";
import EventDetails from "./EventDetails";
import { useLoaderData } from "react-router-dom";

const SetMeeting = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [startTimeSelect, setStartTimeSelect] = useState({});
  const eventData = useLoaderData();
  // const { endDate, endTime, startDate, startTime, eventDuration } =
  //   eventData?.formData;
  // console.log(eventData?.formDate?.startTime)
  console.log(eventData);
  // setSelectedTimezone(startTime);
  const [one, two, three] = eventData;
  console.log(one, two, three)

  const events = eventData.map((event) => {
    const data = {
      eventName: event.eventName,
    }
    return data;
  });
  console.log(events)

  console.log(selectedTimezone);

  const availableTimeslots = [0, 1, 2, 3, 4, 5, 6, 7].map((id) => {
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
          18,
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
          <h1 className="mb-2 font-bold">Time zone</h1>
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
          eventDurationInMinutes={10}
          availableTimeslots={availableTimeslots}
          // onStartTimeSelect={startTimeSelect}
          onStartTimeSelect={console.log}
          selectedDateDayTitleFormatString="cccc, LLLL do"
          startTimeListStyle="scroll-list"
        />
      </div>
    </div>
  );
};

export default SetMeeting;
