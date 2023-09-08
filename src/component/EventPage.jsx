import React, { useEffect, useRef, useState } from "react";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import TimeRangeSelector from "./TimeRangeSelector";
import { BsCalendar4Event, BsListStars } from "react-icons/bs";
import TimezoneSelect from "react-timezone-select";
import { useDispatch, useSelector } from "react-redux";
import { submitFormData } from "../store/features/formSubmission/formSubmissionSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import WeeklyHoursForm from "./WeeklyHoursForm";
import EventCalendar from "../eventCalendar/EventCalendar";
import TimeSelect from "../LandingPage/contact/TimeSelect";
import { Helmet } from "react-helmet-async";
import Demo from "./Demo";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

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
  const [callEvent, setCallEvnt] = useState(false);
  const [eventData, setEventData] = useState("");
  // console.log(eventData.id);

  const dispatch = useDispatch();
  const objectData = useSelector((state) => state.objectData);
  const { isLoading, isSuccess, error } = useSelector(
    (state) => state.formSubmission
  );

  const insertedId = useSelector((state) => state.formSubmission.insertedId);

  console.log("Inserted ID:", insertedId);

  console.log(isSuccess);

  //extract number from text
  const text = eventDuration;
  const regex = /\d+/;

  // Use the match function to extract the number
  const matches = text.match(regex);

  // Check if there is a match and extract the number
  const extractedNumber = matches ? matches[0] : null;
  const number = parseInt(extractedNumber);

  const handleSubmit = async () => {
    const formData = {
      selectedTimezone,
      eventDuration: number,
      startTime: startHour + ":" + startMinute + " " + startAmPm,
      endTime: endHours + ":" + endMinute + " " + endAmPm,
      startDate,
      endDate,
    };

    const obj = { ...objectData, formData };

    setEventData(obj);
    dispatch(submitFormData(obj));

    setCallEvnt(!callEvent);
  };

  const handleCancel = () => {
    navigate("/dashboard/schedule");
  };

  const handleSelectTime = (selectTime) => {
    console.log(selectTime);
    const { endAmPm, endHour, endMinute, startAmPm, startHour, startMinute } =
      selectTime;
    setStartHour(startHour);
    setStartMinute(startMinute);
    setStartAmPm(startAmPm);
    setEndHours(endHour);
    setEndMinute(endMinute);
    setEndAmPm(endAmPm);
  };

  // useEffect(() => {
  // if (insertedId) {
  //     axios
  //       .get(`https://plan-picker-server.vercel.app/getEvent/${insertedId}`)
  //       .then((response) => {
  //         const data = response.data;
  //         // setEventData(data);
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //     }
  //   }, [insertedId]);

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
            <Demo handleSubmit={handleSubmit} eventData={eventData} />
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
              onChange={(e) => setEventDuration(e.target.value)}>
              <option selected>Set Duration</option>
              <option>15 min</option>
              <option>30 min</option>
              <option>45 min</option>
              <option>60 min</option>
              <option>Custom</option>
            </select>
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
              onChange={setSelectedTimezone}
            />
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
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={state}
            direction="horizontal"
            className="flex flex-col w-full gap-6 md:flex-row"
          />
        </div>
        <div className="w-full mt-6">
          <div>
            <TimeRangeSelector handleSelectTime={handleSelectTime} />
            {/* <TimeRangeSelector /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
