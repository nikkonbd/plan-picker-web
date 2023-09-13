import React, { useContext, useState } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import TimezoneSelect from "react-timezone-select";
import EventDetails from "./EventDetails";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const SetMeeting = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [startTimeSelect, setStartTimeSelect] = useState({});
  const { user } = useContext(AuthContext);
  const eventData = useLoaderData();
  // const { endDate, endTime, startDate, startTime, eventDuration } =
  //   eventData?.formData;
  // console.log(eventData?.formDate?.startTime)
  console.log(eventData);
  // setSelectedTimezone(startTime);
  const [{ eventName, description, formData }] = eventData;

  console.log(eventName);

  const events = eventData.map((event) => {
    const data = {
      eventName: event.eventName,
    };
    return data;
  });
  console.log(events);

  console.log(selectedTimezone);

  const eventDetails = { eventName, description, formData };

  // // Convert formData.startDate and formData.endDate to Date objects
  // const startDate = new Date(formData.startDate);
  // const endDate = new Date(formData.endDate);

  // // Calculate the number of days between startDate and endDate
  // const daysBetween = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

  // // Generate an array of numbers from 0 to daysBetween
  // const dynamicNumbersArray = Array.from(
  //   { length: daysBetween + 1 },
  //   (_, index) => index
  // );

  // // Now, dynamicNumbersArray contains numbers from 0 to daysBetween
  // console.log(dynamicNumbersArray);

  // Convert formData.startDate and formData.endDate to Date objects
  const startDate = new Date(formData.startDate);
  const endDate = new Date(formData.endDate);

  // Calculate the number of days between startDate and endDate
  const daysBetween = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));

  // Create an array of timeslots for each day
  const availableTimeslots = [];

  for (let i = 0; i <= daysBetween; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    // Create timeslots for this day
    const timeslotsForDay = [0, 1, 2, 3, 4, 5, 6, 7].map((id) => {
      const startTime = new Date(currentDate);
      startTime.setHours(9, 0, 0, 0);

      const endTime = new Date(currentDate);
      endTime.setHours(18, 0, 0, 0);

      return {
        id: `${currentDate.toISOString()}_slot_${id}`,
        startTime,
        endTime,
      };
    });

    availableTimeslots.push(...timeslotsForDay);
  }

  console.log(availableTimeslots);

  // const availableTimeslots = [0, 1, 2, 3, 4, 5, 6, 7].map((id) => {
  //   return {
  //     id,
  //     startTime: new Date(
  //       new Date(new Date().setDate(new Date().getDate() + id)).setHours(
  //         9,
  //         0,
  //         0,
  //         0
  //       )
  //     ),

  //     endTime: new Date(
  //       new Date(new Date().setDate(new Date().getDate() + id)).setHours(
  //         18,
  //         0,
  //         0,
  //         0
  //       )
  //     ),
  //   };
  // });

  console.log(availableTimeslots);

  return (
    <div className="flex flex-col items-center h-full text-center lg:items-start lg:text-left lg:flex-row">
      <div className="h-full p-5 mt-3 rounded-lg shadow-2xl xl:w-2/3 lg:w-4/5 md:">
        <EventDetails eventDetails={eventDetails} />
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
          eventDurationInMinutes={formData?.eventDuration}
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
