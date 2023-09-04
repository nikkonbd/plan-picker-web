// import React, { useState } from "react";
// import { BsCalendar4Event } from "react-icons/bs";
// import { Radio } from "@material-tailwind/react";
// import { Select, Option } from "@material-tailwind/react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
// import { BsStar, BsListStars } from "react-icons/bs";
// import { BiWorld } from "react-icons/bi";
// import { Checkbox } from "@material-tailwind/react";
// import TimezoneSelect from "react-timezone-select";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";
// import WeeklyHoursForm from "./WeeklyHoursForm";
// import EventCalendar from "../eventCalendar/EventCalendar";
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
//       } h-5 w-5 transition-transform`}
//     >
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
//   const [selectedTimezone, setSelectedTimezone] = useState({});
//   const events = [
//     {
//       id: 1,
//       title: "Meeting",
//       start: new Date(2023, 7, 16, 10, 0),
//       end: new Date(2023, 7, 16, 12, 0),
//       description: "Discuss project updates.",
//     },
//   ];

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
//           <button className="p-2 rounded-md btn">Cancel</button>
//           <button className="px-2 rounded-md btn btn-primary ">Next</button>
//         </div>
//       </div>
//       {/* <div className="divider"></div> */}
//       {/* 2nd part */}
//       {/* <div className='flex flex-col-reverse gap-10 mt-10 md:gap-6 md:flex-row '>
//                 <div className='w-full md:w-1/2 '>
//                     <h2 className='text-2xl font-semibold'>Date Range</h2>
//                     <p className='mt-3 font-semibold text-gray-400' >Invitees can schedule...</p>
//                     <div className='flex flex-col mt-3'>
//                         <div className='flex items-center gap-2'>
//                             <Radio name="type" />
//                             <input
//                                 type="text"
//                                 className="input input-bordered font-semibold w-[50px] md:w-[100px] max-w-xs"
//                                 placeholder='60'
//                             />
//                             <select className="select select-bordered w-[150px] md:w-[200px] max-w-xs">
//                                 <option disabled selected>Calendar Days</option>
//                                 <option>Normal Apple</option>
//                                 <option>Normal Orange</option>
//                                 <option>Normal Tomato</option>
//                             </select>
//                             <p className=''>Intro in Future</p>

//                         </div>
//                         <Radio name="type" label='Within Date Range' />
//                         <Radio name="type" label='Indefinitely into the future ' />
//                     </div>
//                 </div>
//                 <div className='w-full md:w-1/2'>
//                     <p className='text-gray-600'>Set a range of dates when you can accept meetings.</p>
//                 </div>
//             </div> */}
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
//             <select className="select select-bordered">
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
//             <TimezoneSelect
//               value={selectedTimezone}
//               onChange={setSelectedTimezone}
//             />
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
//           <EventCalendar events={events} />
//         </div>
//         <div className="w-full p-4 mt-6 border-2">
//           <div className="flex items-center gap-2">
//             <BsListStars fontSize={20}></BsListStars>
//             <p className="pb-4 text-xl font-semibold label-text">
//               Select Your Availability
//             </p>
//           </div>
//           {/* <WeeklyHoursForm></WeeklyHoursForm> */}
//           <div>
//             <TimeSelect></TimeSelect>
//           </div>
//         </div>
//       </div>

//       {/* 4th part */}
//       {/* <div className="flex flex-col-reverse gap-10 mt-10 md:gap-6 md:flex-row ">
//         <div className="w-full md:w-1/2">
//           <h2 className="text-xl font-semibold">
//             How do you want to offer your availability for this event type?
//           </h2>
//         </div>
//         <div className="w-full md:w-1/2">
//           <p>
//             Select one of your schedules or define custom hours specific to this
//             type of event.
//           </p>
//         </div>
//       </div>
//       <div className="mt-10">
//         <Tabs>
//           <TabList className="flex gap-3">
//             <Tab className="px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-t-lg">
//               Use an existing schedule
//             </Tab>
//             <Tab className="px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-t-lg">
//               Set custom hour
//             </Tab>
//           </TabList>

//           <TabPanel>
//             <div>
//               <div className="mt-8">
//                 <h2 className="font-semibold">
//                   Which schedule do you want to use?
//                 </h2>
//               </div>

//               <div className="relative w-[200px] mt-3">
//                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                   <BsStar></BsStar>
//                 </div>
//                 <select className="block w-full py-2 pl-10 pr-8 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-300">
//                   <option disabled selected>
//                     Working Hours
//                   </option>
//                   <option>Working Hours</option>
//                 </select>
//               </div>
//               <div className="flex gap-4 mt-6">
//                 <BiWorld fontSize={20}></BiWorld>
//                 <h1>Asia/Dhaka</h1>
//               </div>

//               <div className="flex flex-col-reverse gap-6 px-2 py-6 mt-4 border md:px-10 md:gap-10 md:flex-row">
//                 <div className="w-full md:w-1/2">
//                   <h5 className="font-semibold">WEEKLY HOURS</h5>
//                   <div className="mt-4">
//                     <div className="flex gap-32 md:gap-10">
//                       <h1 className="w-5 font-bold">Sun</h1>
//                       <p>Unavailable</p>
//                     </div>
//                     <div className="flex gap-32 mt-3 md:gap-10">
//                       <h1 className="w-5 font-bold">Mon</h1>
//                       <p> 9:00am – 5:00pm</p>
//                     </div>
//                     <div className="flex gap-32 mt-3 md:gap-10">
//                       <h1 className="w-5 font-bold">Tue</h1>
//                       <p> 9:00am – 5:00pm</p>
//                     </div>
//                     <div className="flex gap-32 mt-3 md:gap-10">
//                       <h1 className="w-5 font-bold">Wed</h1>
//                       <p> 9:00am – 5:00pm</p>
//                     </div>
//                     <div className="flex gap-32 mt-3 md:gap-10">
//                       <h1 className="w-5 font-bold">Thu</h1>
//                       <p> 9:00am – 5:00pm</p>
//                     </div>
//                     <div className="flex gap-32 mt-3 md:gap-10">
//                       <h1 className="w-5 font-bold">Fri</h1>
//                       <p> 9:00am – 5:00pm</p>
//                     </div>
//                     <div className="flex gap-32 mt-3 md:gap-10">
//                       <h1 className="w-5 font-bold">Sat</h1>
//                       <p> Unavailable</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-full md:w-1/2">
//                   <h1 className="font-semibold">DATE OVERRIDES</h1>
//                   <p className="pt-4 text-justify text-gray-400 md:pl-6 md:pt-4">
//                     To override your hours on specific dates, update your
//                     schedule under Availability
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </TabPanel>
//           <TabPanel>
//             <div className="py-2 mt-6 ">
//               <div className="border">
//                 <div className="px-3 mb-4">
//                   <div className="timezone__wrapper w-full md:w-[400px]">
//                     <p> Timezone</p>
//                     <TimezoneSelect
//                       value={selectedTimezone}
//                       onChange={setSelectedTimezone}
//                     />
//                   </div>
//                   <div className="mt-6">
//                     <Tabs>
//                       <TabList className="flex gap-3">
//                         <Tab className="flex items-center gap-3 px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-t-lg">
//                           <BsListStars></BsListStars> List View
//                         </Tab>
//                         <Tab className="flex items-center gap-3 px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-t-lg">
//                           <BsCalendar4Event></BsCalendar4Event> Calendar View
//                         </Tab>
//                       </TabList>
//                       <TabPanel>
//                         <div className="flex flex-col gap-10 mt-10 md:gap-8 md:flex-row">
//                           <div className="w-full md:w-1/2">
//                             <WeeklyHoursForm></WeeklyHoursForm>
//                           </div>
//                           <div className="w-full md:w-1/2 ">
//                             <h2 className="px-5 font-semibold">
//                               Add date overrides
//                             </h2>
//                             <h2 className="px-5 mt-3 font-semibold text-gray-600">
//                               Add dates when your availability changes from your
//                               weekly hours
//                             </h2>
//                           </div>
//                         </div>
//                       </TabPanel>
//                       <TabPanel>
//                         <div className="mt-6">
//                           <EventCalendar events={events} />
//                         </div>
//                       </TabPanel>
//                     </Tabs>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </TabPanel>
//         </Tabs>
//       </div>
//       <div className="divider"></div>
//       <div className="flex flex-col-reverse gap-10 mt-10 md:gap-8 md:flex-row">
//         <div className="w-full md:w-1/2">
//           <h3 className="font-semibold">
//             Want to add time before or after your events?
//           </h3>
//           <Checkbox label="Before event" />
//           <div className="w-full max-w-xs px-10">
//             <select className="w-full select select-bordered">
//               <option disabled selected>
//                 5 min
//               </option>
//               <option>5 min</option>
//               <option>10 min</option>
//               <option>15 min</option>
//               <option>20 min</option>
//               <option>25 min</option>
//               <option>30 min</option>
//               <option>35 min</option>
//               <option>40 min</option>
//               <option>45 min</option>
//               <option>50 min</option>
//               <option>25 min</option>
//               <option>1 hrs</option>
//               <option>1 hr 30 min</option>
//               <option>2 hr min</option>
//               <option>2 hr 30 min</option>
//               <option>3 hrs</option>
//             </select>
//           </div>
//           <Checkbox label="After event" />
//           <div className="w-full max-w-xs px-10">
//             <select className="w-full select select-bordered">
//               <option disabled selected>
//                 5 min
//               </option>
//               <option>5 min</option>
//               <option>10 min</option>
//               <option>15 min</option>
//               <option>20 min</option>
//               <option>25 min</option>
//               <option>30 min</option>
//               <option>35 min</option>
//               <option>40 min</option>
//               <option>45 min</option>
//               <option>50 min</option>
//               <option>25 min</option>
//               <option>1 hrs</option>
//               <option>1 hr 30 min</option>
//               <option>2 hr min</option>
//               <option>2 hr 30 min</option>
//               <option>3 hrs</option>
//             </select>
//           </div>
//         </div>
//         <div className="w-full mb-2 md:w-1/2">
//           <p className="text-gray-400">
//             Give yourself some buffer time to prepare for or wrap up from booked
//             Calendly events.
//           </p>
//           <div className="border w-full h-[160px] px-4 py-12">
//             <div className="p-4 shadow-md bg-gray-50">Board</div>
//             <div className="divider"></div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-10">
//         <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
//           <AccordionHeader
//             className="text-blue-600 w-[300px] md:w-[400px]  md:text-xl hover:underline"
//             onClick={() => handleOpen(1)}
//           >
//             Additional rules for your availability
//           </AccordionHeader>
//           <AccordionBody>
//             <div className="flex flex-col-reverse gap-10 mt-10 md:gap-6 md:flex-row ">
//               <div className="w-full md:w-1/2">
//                 <div className="w-full max-w-xs form-control">
//                   <label className="label">
//                     <span className="text-xl font-semibold label-text">
//                       Start time increments
//                     </span>
//                   </label>
//                   <label className="label">
//                     <span className="text-xs font-semibold label-text">
//                       Show available start times in increments of...
//                     </span>
//                   </label>
//                   <select className="select select-bordered">
//                     <option disabled selected>
//                       5 min
//                     </option>
//                     <option>5 min</option>
//                     <option>10 min</option>
//                     <option>15 min</option>
//                     <option>20 min</option>
//                     <option>30 min</option>
//                     <option>45 min</option>
//                     <option>60 min</option>
//                     <option>Custom</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2">
//                 <p className="text-xl text-gray-400">
//                   Set the frequency of available time slots for invitees.
//                 </p>
//               </div>
//             </div>
//             <div className="divider"></div>
//             <div className="flex flex-col-reverse gap-10 mt-10 md:gap-6 md:flex-row ">
//               <div className="w-full md:w-1/2 ">
//                 <label className="label">
//                   <span className="text-xl font-semibold label-text">
//                     Scheduling conditions
//                   </span>
//                 </label>
//                 <label className="label">
//                   <span className="text-xs font-semibold label-text">
//                     Invitees can't schedule within...
//                   </span>
//                 </label>

//                 <div className="flex flex-col mt-3">
//                   <div className="flex items-center gap-2">
//                     <input
//                       type="text"
//                       className="input input-bordered font-semibold w-[50px] md:w-[100px] max-w-xs"
//                       placeholder="4"
//                     />
//                     <select className="select select-bordered w-[150px] md:w-[200px] max-w-xs">
//                       <option disabled selected>
//                         Hours
//                       </option>
//                       <option>Minutes</option>
//                       <option>Hours</option>
//                       <option>Days</option>
//                     </select>
//                     <p className="">of an event start time.</p>
//                   </div>
//                   <div className="w-full max-w-xs mt-10 form-control">
//                     <label className="label">
//                       <span className="flex items-center gap-3 font-bold label-text">
//                         Maximum allowed events per day for this type of event
//                       </span>
//                     </label>

//                     <input
//                       type="text"
//                       className="w-1/3 max-w-xs font-semibold input input-bordered"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2">
//                 <p className="text-gray-600">
//                   Set a range of dates when you can accept meetings.
//                 </p>
//               </div>
//             </div>
//             <div className="divider"></div>

//             <div className="flex flex-col-reverse gap-10 mt-10 md:gap-6 md:flex-row ">
//               <div className="w-full md:w-1/2 ">
//                 <h2 className="text-2xl font-semibold">Time zone display</h2>

//                 <div className="flex flex-col mt-3 text-base text-black">
//                   <Radio
//                     className=""
//                     name="type"
//                     label="Automatically detect and show the times in my invitee time zone"
//                   />
//                   <Radio
//                     name="type"
//                     label="Lock the timezone (best for in-person events)"
//                   />
//                 </div>
//               </div>
//               <div className="w-full md:w-1/2">
//                 <p className="px-4 text-gray-600 ">
//                   If you’re meeting in person, you should lock this to the time
//                   zone of your event location. Otherwise, Calendly detects your
//                   time zones to make sure everyone meets at the correct time.
//                 </p>
//               </div>
//             </div>
//             <div className="divider"></div>
//             <div className="flex flex-col gap-10 mt-10 md:gap-8 md:flex-row">
//               <div className="w-full font-semibold md:w-1/2">
//                 <h3 className="text-xl font-bold">Secret event</h3>
//                 <Checkbox label="Make this a secret event" />

//                 <p className="px-8">
//                   Only invitees who have this Calendly link can schedule with
//                   you.
//                 </p>
//               </div>
//               <div className="w-full mb-2 md:w-1/2">
//                 <p className="text-gray-400">
//                   Use this to hide the event on your main scheduling page.
//                 </p>
//               </div>
//             </div>
//           </AccordionBody>
//         </Accordion>
//         <div className="divider"></div>
//         <div className="flex justify-center md:justify-end">
//           <div className="flex gap-4">
//             <button className="p-2 rounded-md btn">Cancel</button>
//             <button className="px-2 rounded-md btn btn-primary ">Next</button>
//           </div>
//         </div>
//       </div> */}
//     </div>
//   );
// };

// export default EventPage;

// import React, { useState } from "react";
// import { BsCalendar4Event } from "react-icons/bs";

// import "react-tabs/style/react-tabs.css";
// import { BsStar, BsListStars } from "react-icons/bs";

// import TimezoneSelect from "react-timezone-select";

// import EventCalendar from "../eventCalendar/EventCalendar";
// import TimeSelect from "../LandingPage/contact/TimeSelect";
// import { useDispatch, useSelector } from "react-redux";
// import { submitFormData } from "../store/features/formSubmission/formSubmissionSlice";
// import { addDays } from "date-fns";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
// import TimeRangeSelector from "./TimeRangeSelector";

// // import { secoundSubmitFormData } from "../store/features/secoundFormSubmission/SecoundFormSubmissionSlice";

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

//   console.log(state)

//   const dispatch = useDispatch();
//   // const { isLoading, isSuccess, error } = useSelector(
//   //   (state) => state.formSubmission
//   // );

//   const objectData = useSelector((state) => state.objectData);
//   console.log(objectData);

//   const events = [
//     {
//       id: 1,
//       title: "Meeting",
//       start: new Date(2023, 7, 16, 10, 0),
//       end: new Date(2023, 7, 16, 12, 0),
//       description: "Discuss project updates.",
//     },
//   ];

//   const handleSubmit = () => {
//     const formData = {
//       selectedTimezone,
//       eventDuration,
//       selectedTime,
//     };

//     const obj = { ...objectData, formData };

//     dispatch(submitFormData(obj));
//     // dispatch(submitFormData(formObjectData));
//     console.log(obj);
//   };

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
//           <button className="p-2 rounded-md btn">Cancel</button>
//           <button
//             onClick={() => handleSubmit()}
//             className="px-2 rounded-md btn btn-primary ">
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
//             <TimezoneSelect
//               value={selectedTimezone}
//               onChange={setSelectedTimezone}
//             />
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
//           {/* <EventCalendar events={events} /> */}

//           <DateRangePicker
//             onChange={(item) => setState([item.selection])}
//             showSelectionPreview={true}
//             moveRangeOnFirstSelection={false}
//             months={2}
//             ranges={state}
//             direction="vertical"
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
//             {/* <TimeSelect setSelectedTime={setSelectedTime}></TimeSelect> */}
//             <TimeRangeSelector/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventPage;

import React, { useState } from "react";
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
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
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

  const dispatch = useDispatch();
  const objectData = useSelector((state) => state.objectData);

  const handleSubmit = () => {
    const formData = {
      selectedTimezone,
      eventDuration,
      selectedTime,
    };

    const obj = { ...objectData, formData };

    dispatch(submitFormData(obj));
    console.log(obj);
  };
  
  const handleCancel = () => {
    navigate("/dashboard/schedule")
  }

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
          <button onClick={() => handleCancel()} className="p-2 rounded-md btn">Cancel</button>
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
          {/* <DateRangePicker
            onChange={(item) => setState([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={state}
            direction="vertical"
          /> */}
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
            <TimeRangeSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;

// import React, { useState } from "react";
// import { BsCalendar4Event } from "react-icons/bs";
// import "react-tabs/style/react-tabs.css";
// import { BsListStars } from "react-icons/bs";
// import TimezoneSelect from "react-timezone-select";

// import WeeklyHoursForm from "./WeeklyHoursForm";
// import EventCalendar from "../eventCalendar/EventCalendar";

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
//       } h-5 w-5 transition-transform`}
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//       />
//     </svg>
//   );
// }

// const EventPage = () => {
//   // const [open, setOpen] = React.useState(0);
//   // const handleOpen = (value) => setOpen(open === value ? 0 : value);
//   const [selectedTimezone, setSelectedTimezone] = useState({});
//   const events = [
//     {
//       id: 1,
//       title: "Meeting",
//       start: new Date(2023, 7, 16, 10, 0),
//       end: new Date(2023, 7, 16, 12, 0),
//       description: "Discuss project updates.",
//     },
//   ];

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
//           <button className="p-2 rounded-md btn">Cancel</button>
//           <button className="px-2 rounded-md btn btn-primary ">Next</button>
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
//             <select className="select select-bordered">
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
//             <TimezoneSelect
//               value={selectedTimezone}
//               onChange={setSelectedTimezone}
//             />
//           </div>
//         </div>
//       </div>
//       <div className="divider"></div>
//       {/* Part Calendar */}
//       <div className="">
//       <div className="w-full mt-6">
//         <div className="flex items-center gap-2">
//           <BsCalendar4Event fontSize={20}></BsCalendar4Event>
//           <p className="text-xl font-semibold label-text">Select Event Date</p>
//         </div>
//         <EventCalendar events={events} />
//       </div>
//       <div className="w-full mt-4">
//         <div className="flex items-center gap-2">
//           <BsListStars fontSize={20}></BsListStars>
//           <p className="text-xl font-semibold label-text">Select Event Date</p>
//         </div>
//         <WeeklyHoursForm></WeeklyHoursForm>
//       </div>
//       </div>

//     </div>
//   );
// };

// export default EventPage;
