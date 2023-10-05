import React, { useContext, useState, useEffect } from "react";
import { ScheduleMeeting } from "react-schedule-meeting";
import TimezoneSelect from "react-timezone-select";
import EventDetails from "./EventDetails";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useDispatch } from "react-redux";
import { setData } from "../store/features/participantsData/participantsDataSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SetMeeting = () => {
  const { eventId } = useParams();
  const [userTimezone, setUserTimezone] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [selectedAvailableTime, setSelectedAvailableTime] =
    useState(null) || {};
  const { user } = useContext(AuthContext);
  const eventData = useLoaderData();
  const dispatch = useDispatch();
  const uniqueId = uuidv4();
  const navigate = useNavigate();

  const [{ eventName, description, formData, id }] = eventData;

  console.log(selectedTimezone);
  console.log(eventId);

  const eventDetails = { eventName, description, formData };

  // Convert formData.startDate and formData.endDate to Date objects
  const startDate = new Date(formData.startDate);
  const endDate = new Date(formData.endDate);

  console.log(formData.startDate);

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

  const data = {
    ...selectedAvailableTime,
    userTimezone,
    ...eventData,
  };

  dispatch(setData(data));

  // if(selectedAvailableTime) {
  //   navigate(`/event/confirmation/${eventName}/${id}`)
  // }

  //   const selectedStartTime = '10:30 AM'; // Set this dynamically
  // const selectedEndTime = '11:30 AM'; // Set this dynamically

  axios
    .get(
      "https://plan-picker-server-production-96ce.up.railway.app/getAvailability"
    )
    .then((response) => {
      console.log(response.data[0].avilability);
    });

  return (
    <>
      <div className="md:max-w-6xl mx-auto">
        <div className="text-center py-6">
          <h2 className="text-3xl font-semibold">Select Your Own Schedule!</h2>
        </div>
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
      </div>
    </>
  );
};

export default SetMeeting;
