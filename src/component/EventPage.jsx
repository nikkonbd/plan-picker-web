import React, { useEffect, useRef, useState } from "react";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import TimeRangeSelector from "./TimeRangeSelector";
import { BsCalendar4Event, BsListStars } from "react-icons/bs";
import TimezoneSelect from "react-timezone-select";
import { useDispatch, useSelector } from "react-redux";
import { submitFormData } from "../store/features/formSubmission/formSubmissionSlice";
import { useNavigate } from "react-router-dom";
import Demo from "./Demo";



const EventPage = () => {
  const navigate = useNavigate();
  const [eventDuration, setEventDuration] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 0),
      key: "selection",
    },
  ]);

  const [{ startDate, endDate }] = state;
  const [startHour, setStartHour] = useState("");
  const [startMinute, setStartMinute] = useState("");
  const [startAmPm, setStartAmPm] = useState("");
  const [endHours, setEndHours] = useState("");
  const [endMinute, setEndMinute] = useState("");
  const [endAmPm, setEndAmPm] = useState("");
  // const [errorMessage, setErrorMessage] = useState(""); // Added for validation
  const [isDataValid, setIsDataValid] = useState(false);


  const [eventDurationError, setEventDurationError] = useState("");
  const [timezoneError, setTimezoneError] = useState("");
  const [dateRangeError, setDateRangeError] = useState("");
  const [timeRangeError, setTimeRangeError] = useState("");

  const dispatch = useDispatch();
  const objectData = useSelector((state) => state.objectData);

  // Extract number from text
  const text = eventDuration;
  const regex = /\d+/;

  // Use the match function to extract the number
  const matches = text.match(regex);

  // Check if there is a match and extract the number
  const extractedNumber = matches ? matches[0] : null;
  const number = parseInt(extractedNumber);


  // ==========================
  const [customEventDuration, setCustomEventDuration] = useState("");

  const handleEventDurationChange = (e) => {
    const value = e.target.value;
    if (value === "Custom") {
      // If "Custom" is selected, show an input field for custom duration
      setEventDuration("Custom");
      setIsDataValid(true);
      setEventDurationError("");
    } else {
      setEventDuration(value);
      // Clear the custom event duration input field
      setCustomEventDuration("");
      setIsDataValid(false);
      setEventDurationError("");
    }
  };

  const handleCustomEventDurationChange = (e) => {
    const value = e.target.value;
    // Validate if the custom event duration is a number within a valid range
    if (/^\d+$/.test(value)) {
      const number = parseInt(value);
      if (number >= 1 && number <= 240) {
        // Adjust the range as needed
        setCustomEventDuration(value);
      } else {
        setCustomEventDuration(""); // Clear if out of range
      }
      setIsDataValid(true)
      setEventDurationError("");

    } else {
      setCustomEventDuration(""); // Clear if not a valid number
      setIsDataValid(false)
      setEventDurationError("Invalid custom duration. Set a custom duration");
    }
  };

// =====================
  const handleTimezoneChange = (timezone) => {
    // Validate if a timezone is selected (not empty or null)
    if (timezone) {
      setSelectedTimezone(timezone);
      setIsDataValid(true)
      setTimezoneError("");
    } else {
      setSelectedTimezone({}); // Clear the selected timezone
      setIsDataValid(false)
       setTimezoneError("Please select a timezone.");
    }
  };


  // ===========================
  const handleDateRangeChange = (item) => {
    const { selection } = item;
    // Validate if the start date is before or equal to the end date
    if (selection.startDate <= selection.endDate) {
      setState([selection]);
      setIsDataValid(true)
      setDateRangeError("")
    } else {
      // Handle invalid date range (e.g., show an error message)
      setDateRangeError(
        "Invalid date range. Start date must be before or equal to end date."
      );
      setIsDataValid(false)
    }
  };


  // =====================
  const handleSelectTime = (selectTime) => {
    const { endAmPm, endHour, endMinute, startAmPm, startHour, startMinute } =
      selectTime;

    // Create date objects for start and end times
    const startTime = new Date();
    startTime.setHours(
      startAmPm === "AM" ? startHour : startHour + 12,
      startMinute,
      0
    );
    const endTime = new Date();
    endTime.setHours(endAmPm === "AM" ? endHour : endHour + 12, endMinute, 0);

    // Validate if start time is before end time
    if (startTime < endTime) {
      // Validate if start and end times are within acceptable ranges
      if (startAmPm === "AM" || (startAmPm === "PM" && startHour <= 11)) {
        if (endAmPm === "AM" || (endAmPm === "PM" && endHour <= 11)) {
          // Set the selected times if they are valid
          setStartHour(startHour);
          setStartMinute(startMinute);
          setStartAmPm(startAmPm);
          setEndHours(endHour);
          setEndMinute(endMinute);
          setEndAmPm(endAmPm);
          setIsDataValid(true);
          setTimeRangeError("")
        } else {
          // Handle invalid end time (e.g., show an error message)
          setTimeRangeError("Invalid end time. Please select a valid end time.");
          setIsDataValid(false)
        }
      } else {
        // Handle invalid start time (e.g., show an error message)
        setTimeRangeError(
          "Invalid start time. Please select a valid start time."
        );
        setIsDataValid(false);
      }
      
    } else {
      // Handle invalid time range (e.g., show an error message)
      setTimeRangeError(
        "Invalid time range. End time must be after start time."
      );
      setIsDataValid(false)
    }
  };


  // =====================



  const handleSubmit = async () => {
    if(isDataValid) {

      const formData = {
        selectedTimezone,
        eventDuration: number,
        startTime: startHour + ":" + startMinute + " " + startAmPm,
        endTime: endHours + ":" + endMinute + " " + endAmPm,
        startDate,
        endDate,
      };
  
      const obj = {...objectData, formData };
      dispatch(submitFormData(obj));
    }
  };

  const handleCancel = () => {
    navigate("/dashboard/schedule");
  };

  

  return (
    <div className="px-4 py-6 border md:px-10">
      {/* 1st part */}
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="flex gap-3">
          <BsCalendar4Event fontSize={25}></BsCalendar4Event>
          <div>
            <h2 className="text-xl">When can people book this event?</h2>
            <p className="text-gray-400">30 min, 60 rolling calendar days</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 md:justify-between">
          <button
            onClick={() => handleCancel()}
            className="px-3 rounded-md btn bg-[#61677A] hover:bg-[#464955] text-white">
            Cancel
          </button>
          <button className="">
            <Demo handleSubmit={handleSubmit} isDataValid={isDataValid} />
          </button>
        </div>
      </div>

      <div className="divider"></div>
      {/* 3rd part */}
      <div className="flex-col-reverse items-center gap-10 mt-10 mb-10 md:flex md:gap-6 md:flex-row ">
        <div className="w-full">
          <div className="w-full max-w-xs form-control">
            <label className="label">
              <div className="flex items-center gap-2">
                <BsCalendar4Event fontSize={20}></BsCalendar4Event>
                <p className="text-xl font-semibold label-text">
                  Select Event Duration
                </p>
              </div>
            </label>
            <select
              className="select select-bordered"
              value={eventDuration}
              onChange={handleEventDurationChange}
              required>
              <option value="" disabled>
                Select Duration
              </option>
              <option>15 min</option>
              <option>30 min</option>
              <option>45 min</option>
              <option>60 min</option>
              <option>Custom</option>
            </select>
            {eventDuration === "Custom" && (
              <input
                type="text"
                className="input input-bordered"
                placeholder="Enter custom duration (1-240 min)"
                value={customEventDuration}
                onChange={handleCustomEventDurationChange}
              />
            )}
            {eventDurationError && <div className="text-red-500">{eventDurationError}</div>}
          </div>
        </div>
        <div className="w-full mt-4">
          <div className="w-full">
            <div className="flex items-center gap-2">
              <BsCalendar4Event fontSize={20}></BsCalendar4Event>
              <p className="text-xl font-semibold label-text">
                Select Timezone
              </p>
            </div>
            <TimezoneSelect
              value={selectedTimezone}
              onChange={handleTimezoneChange}
            />
            {timezoneError && <div className="text-red-500">{timezoneError}</div>}
          </div>
        </div>
      </div>
      {/* Part Calendar */}
      <div className="gap-6 p-6 border-2 md:flex">
        <div className="w-full p-4 mt-6">
          <div className="flex items-center gap-2 pb-4">
            <BsCalendar4Event fontSize={20}></BsCalendar4Event>
            <p className="text-xl font-semibold label-text">
              Select Event Date
            </p>
          </div>

          <DateRangePicker
            // onChange={(item) => setState([item.selection])}
            onChange={handleDateRangeChange}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={state}
            direction="horizontal"
            className="flex flex-col w-full gap-6 md:flex-row"
            />
            {dateRangeError && <div className="text-red-500">{dateRangeError}</div>}
        </div>
        <div className="w-full mt-6">
          <div>
            <TimeRangeSelector handleSelectTime={handleSelectTime} />
           
            {timeRangeError && <div className="text-red-500">{timeRangeError}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
