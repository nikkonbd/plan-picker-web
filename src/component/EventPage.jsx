// import React, { useState } from "react";
// import { addDays } from "date-fns";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
// import TimeRangeSelector from "./TimeRangeSelector";
// import { BsCalendar4Event, BsListStars } from "react-icons/bs";
// import TimezoneSelect from "react-timezone-select";
// import { useDispatch, useSelector } from "react-redux";
// import { submitFormData } from "../store/features/formSubmission/formSubmissionSlice";
// import { useNavigate } from "react-router-dom";
// import TimeSelect from "../LandingPage/contact/TimeSelect";

// function Icon({ id, open }) {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth={2}
//       stroke="currentColor"
//       className={`${
//         id === open ? "rotate-180" : ""
//       } h-5 w-5 transition-transform`}>
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//       />
//     </svg>
//   );
// }

// const EventPage = () => {
//   const [open, setOpen] = React.useState(0);
//   const handleOpen = (value) => setOpen(open === value ? 0 : value);
//   const navigate = useNavigate();

//   const [eventDuration, setEventDuration] = useState("");
//   const [selectedTimezone, setSelectedTimezone] = useState({});
//   const [selectedTime, setSelectedTime] = useState({});
//   const [state, setState] = useState([
//     {
//       startDate: new Date(),
//       endDate: addDays(new Date(), 7),
//       key: "selection",
//     },
//   ]);

//   const dispatch = useDispatch();
//   const objectData = useSelector((state) => state.objectData);

//   const handleSubmit = () => {
//     const formData = {
//       selectedTimezone,
//       eventDuration,
//       selectedTime,
//     };

//     const obj = { ...objectData, formData };

//     dispatch(submitFormData(obj));
//     console.log(obj);
//   };

//   const handleCancel = () => {
//     navigate("/dashboard/schedule")
//   }

//   return (
//     <div className="px-4 py-6 border md:px-10">
//       {/* 1st part */}
//       <div className="flex flex-col gap-6 md:flex-row md:justify-between">
//         <div className="flex gap-3">
//           <BsCalendar4Event fontSize={25}></BsCalendar4Event>
//           <div>
//             <h2 className="text-xl">When can people book this event?</h2>
//             <p className="text-gray-400">30 min, 60 rolling calendar days</p>
//           </div>
//         </div>
//         <div className="flex justify-center gap-4 md:justify-between">
//           <button onClick={() => handleCancel()} className="p-2 rounded-md btn">Cancel</button>
//           <button
//             onClick={() => handleSubmit()}
//             className="px-2 rounded-md btn btn-primary">
//             Next
//           </button>
//         </div>
//       </div>

//       <div className="divider"></div>
//       {/* 3rd part */}
//       <div className="flex-col-reverse items-center gap-10 mt-10 md:flex md:gap-6 md:flex-row ">
//         <div className="w-full">
//           <div className="w-full max-w-xs form-control">
//             <label className="label">
//               <div className="flex items-center gap-2">
//                 <BsCalendar4Event fontSize={20}></BsCalendar4Event>
//                 <p className="text-xl font-semibold label-text">
//                   Select Event Duration
//                 </p>
//               </div>
//             </label>
//             <select
//               className="select select-bordered"
//               value={eventDuration}
//               onChange={(e) => setEventDuration(e.target.value)}>
//               <option disabled selected>
//                 Set Duration
//               </option>
//               <option>15 min</option>
//               <option>30 min</option>
//               <option>45 min</option>
//               <option>60 min</option>
//               <option>Custom</option>
//             </select>
//           </div>
//         </div>
//         <div className="w-full md:mt-4">
//           <div className="w-full max-w-xs timezone__wrapper">
//             <div className="flex items-center gap-2">
//               <BsCalendar4Event fontSize={20}></BsCalendar4Event>
//               <p className="text-xl font-semibold label-text">
//                 Select Timezone
//               </p>
//             </div>
//             {/* <EventCalendar events={events} /> */}
//           </div>
//           <div className="w-full mt-6 border-2 p-4">
//             <div className="flex items-center gap-2">
//               <BsListStars fontSize={20}></BsListStars>
//               <p className="label-text text-xl font-semibold pb-4">
//                 Select Your Availability
//               </p>
//             </div>
//             {/* <WeeklyHoursForm></WeeklyHoursForm> */}
//             <div>
//               <TimeSelect></TimeSelect>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="divider"></div>
//       {/* Part Calendar */}
//       <div className="gap-10 md:flex">
//         <div className="w-full p-4 mt-6 border-2">
//           <div className="flex items-center gap-2 pb-4">
//             <BsCalendar4Event fontSize={20}></BsCalendar4Event>
//             <p className="text-xl font-semibold label-text">
//               Select Event Date
//             </p>
//           </div>

//           <DateRangePicker
//             onChange={(item) => setState([item.selection])}
//             showSelectionPreview={true}
//             moveRangeOnFirstSelection={false}
//             months={1}
//             ranges={state}
//             direction="horizontal"
//             className="flex flex-col w-full"
//           />
//         </div>
//         <div className="w-full p-4 mt-6 border-2">
//           <div className="flex items-center gap-2">
//             <BsListStars fontSize={20}></BsListStars>
//             <p className="pb-4 text-xl font-semibold label-text">
//               Select Your Availability
//             </p>
//           </div>
//           <div>
//             <TimeRangeSelector />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventPage;

import React, { useEffect, useState } from "react";
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

  const [selectedTime, setSelectedTime] = useState({});
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
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
  const [meetLink, setMeetLink] = useState({});

  const dispatch = useDispatch();
  const objectData = useSelector((state) => state.objectData);

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

    dispatch(submitFormData(obj));
    console.log(obj.id);

    // Axios POST request for Create Meeting
    axios.post("http://localhost:5000/createMeeting", obj).then((response) => {
      if (response.status === 200) {
        const data = response.data;
        alert("Meeting created successfully!");
        console.log(data);
        setMeetLink(data);
      } else {
        alert("Failed to create meeting.");
      }
    });


    axios.get(`http://localhost:5000/addEvent/${obj.id}`).then((response) => {
      if (response.status === 200) {
        const data = response.data;
        // alert("Meeting created successfully!");
        setMeetLink(data);
      } else {
        alert("Failed to create meeting.");
      }
    });



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
        <div className="flex justify-center gap-4 md:justify-between">
          <button onClick={() => handleCancel()} className="p-2 rounded-md btn">
            Cancel
          </button>
          <button
            onClick={() => handleSubmit()}
            className="px-2 rounded-md btn btn-primary">
            Next
          </button>
        </div>
      </div>

      <div className="divider"></div>
      {/* 3rd part */}
      <div className="flex-col-reverse items-center gap-10 mt-10 md:flex md:gap-6 md:flex-row ">
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
          <div className="w-full max-w-xs timezone__wrapper">
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
      <div className="divider"></div>
      {/* Part Calendar */}
      <div className="gap-10 md:flex">
        <div className="w-full p-4 mt-6 border-2">
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
            className="flex flex-col w-full"
          />
        </div>
        <div className="w-full p-4 mt-6 border-2">
          <div className="flex items-center gap-2">
            <BsListStars fontSize={20}></BsListStars>
            <p className="pb-4 text-xl font-semibold label-text">
              Select Your Availability
            </p>
          </div>
          <div>
            <TimeRangeSelector handleSelectTime={handleSelectTime} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
