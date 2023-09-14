import React, { useContext, useState, useEffect } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import TimezoneSelect from "react-timezone-select";
import EventDetails from "./EventDetails";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useDispatch } from "react-redux";
import { setData } from "../store/features/participantsData/participantsDataSlice";
import { formatISO } from "date-fns";



const SetMeeting = () => {
  const [userTimezone, setUserTimezone] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [selectedAvailableTime, setSelectedAvailableTime] = useState(null) || {};
  const { user } = useContext(AuthContext);
  const eventData = useLoaderData();
  const dispatch = useDispatch();

  // const { endDate, endTime, startDate, startTime, eventDuration } =
  //   eventData?.formData;
  // console.log(eventData?.formDate?.startTime)
  console.log(eventData);
  // setSelectedTimezone(startTime);
  const [{ eventName, description, formData, id }] = eventData;

  console.log(selectedTimezone);

  const eventDetails = { eventName, description, formData };
console.log(formData.startTime)
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
    const timeslotsForDay = [daysBetween].map((id) => {
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



  useEffect(() => {
    // Function to get the user's local time zone
    function getUserTimezone() {
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      setUserTimezone(userTimezone);
    }

    getUserTimezone(); // Call the function to set the initial time zone
  }, []);

  // Callback function to handle the selected start time
  const handleStartTimeSelect = (startTime) => {
    // Update the state with the selected start time
    setSelectedAvailableTime(startTime);
  };

  console.log(selectedAvailableTime);
  console.log(userTimezone);

  // 
  // const startTime = formatISO(new Date("2023-09-15T09:00:00.000Z"));
  // const timeAndDate = selectedAvailableTime?.startTime || {};
  // const startTimeDate = formatISO(new Date(timeAndDate));
  // console.log(startTimeDate)

  const data = {
    ...selectedAvailableTime,
    // startTime: selectedAvailableTime?.startTime,
    userTimezone,
  };

  dispatch(setData(data));

  return (
    <>
      <div className="flex flex-col items-center h-full text-center lg:items-start lg:text-left lg:flex-row">
        <div className="h-full p-5 mt-3 rounded-lg shadow-2xl xl:w-2/3 lg:w-4/5 md:">
          <EventDetails eventDetails={eventDetails} />
          <div className="z-10 mt-5">
            <h1 className="mb-2 font-bold">Time zone</h1>
            <TimezoneSelect
              value={userTimezone}
              onChange={(selectedTimezone) =>
                setUserTimezone(selectedTimezone.value)
              }
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
            onStartTimeSelect={handleStartTimeSelect}
            selectedDateDayTitleFormatString="cccc, LLLL do"
            startTimeListStyle="scroll-list"
          />
        </div>
      </div>
      <div className="flex justify-end pr-5 ">
        <Link to={`/event/confirmation/${eventName}/${id}`}>
          <button className="bg-[#5EBEC4] text-white px-4 py-2 rounded-md">
            Next
          </button>
        </Link>
      </div>
    </>
  );
};

export default SetMeeting;
