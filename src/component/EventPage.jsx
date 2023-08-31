import React, { useState } from "react";
import { BsCalendar4Event } from "react-icons/bs";
import { Radio } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BsStar, BsListStars } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { Checkbox } from "@material-tailwind/react";
import TimezoneSelect from "react-timezone-select";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import WeeklyHoursForm from "./WeeklyHoursForm";
import EventCalendar from "../eventCalendar/EventCalendar";
import TimeSelect from "../LandingPage/contact/TimeSelect";

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
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const EventPage = () => {
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const [selectedTimezone, setSelectedTimezone] = useState({});
  const events = [
    {
      id: 1,
      title: "Meeting",
      start: new Date(2023, 7, 16, 10, 0),
      end: new Date(2023, 7, 16, 12, 0),
      description: "Discuss project updates.",
    },
  ];

  return (
    <div className="border px-4 md:px-10 py-6">
      {/* 1st part */}
      <div className=" flex flex-col gap-6 md:flex-row md:justify-between  ">
        <div className="flex gap-3">
          <BsCalendar4Event fontSize={25}></BsCalendar4Event>
          <div>
            <h2 className="text-xl">When can people book this event?</h2>
            <p className="text-gray-400">30 min, 60 rolling calendar days</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center md:justify-between">
          <button className="rounded-md btn p-2">Cancel</button>
          <button className="rounded-md btn  btn-primary px-2 ">Next</button>
        </div>
      </div>
      <div className="divider"></div>
      {/* 3rd part */}
      <div className="md:flex items-center gap-10 flex-col-reverse md:gap-6 md:flex-row mt-10 ">
        <div className="w-full">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <div className="flex items-center gap-2">
                <BsCalendar4Event fontSize={20}></BsCalendar4Event>
                <p className="label-text text-xl font-semibold">
                  Select Event Duration
                </p>
              </div>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Set Duration
              </option>
              <option>15 min</option>
              <option>30 min</option>
              <option>45 min</option>
              <option>60 min</option>
              <option>Custom</option>
            </select>
          </div>
        </div>
        <div className="w-full md:mt-4">
          <div className="timezone__wrapper w-full max-w-xs">
            <div className="flex items-center gap-2">
              <BsCalendar4Event fontSize={20}></BsCalendar4Event>
              <p className="label-text text-xl font-semibold">
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
      <div className="divider"></div>
      {/* Part Calendar */}
      <div className="md:flex gap-10">
        <div className="mt-6 w-full border-2 p-4">
          <div className="flex items-center gap-2 pb-4">
            <BsCalendar4Event fontSize={20}></BsCalendar4Event>
            <p className="label-text text-xl font-semibold">
              Select Event Date
            </p>
          </div>
          <EventCalendar events={events} />
        </div>
        <div className="w-full mt-6 border-2 p-4">
          <div className="flex items-center gap-2">
            <BsListStars fontSize={20}></BsListStars>
            <p className="label-text text-xl font-semibold pb-4">
              Select Your Availability
            </p>
          </div>
          {/* <WeeklyHoursForm></WeeklyHoursForm> */}
          <div>
            <TimeSelect></TimeSelect>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
