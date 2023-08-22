import React, { useState } from 'react';
import { BsCalendar4Event } from "react-icons/bs";
import { Radio } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { BsStar } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { Checkbox } from "@material-tailwind/react";
import TimezoneSelect from "react-timezone-select";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import WeeklyHoursForm from './WeeklyHoursForm';

function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

const EventPage = () => {
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const [selectedTimezone, setSelectedTimezone] = useState({});

    return (
        <div className='border px-2 md:px-10 py-6'>
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
            {/* 2nd part */}
            <div className='flex gap-10 flex-col-reverse md:gap-6 md:flex-row mt-10 '>
                <div className='w-full md:w-1/2 '>
                    <h2 className='text-2xl font-semibold'>Date Range</h2>
                    <p className='font-semibold text-gray-400 mt-3' >Invitees can schedule...</p>
                    <div className='mt-3 flex flex-col'>
                        <div className='flex items-center  gap-2'>
                            <Radio name="type" />
                            <input
                                type="text"
                                className="input input-bordered font-semibold w-[50px] md:w-[100px] max-w-xs"
                                placeholder='60'
                            />
                            <select className="select select-bordered w-[150px] md:w-[200px] max-w-xs">
                                <option disabled selected>Calendar Days</option>
                                <option>Normal Apple</option>
                                <option>Normal Orange</option>
                                <option>Normal Tomato</option>
                            </select>
                            <p className=''>Intro in Future</p>

                        </div>
                        <Radio name="type" label='Within Date Range' />
                        <Radio name="type" label='Indefinitely into the future ' />
                    </div>
                </div>
                <div className=' w-full md:w-1/2'>
                    <p className='text-gray-600'>Set a range of dates when you can accept meetings.</p>
                </div>
            </div>
            <div className="divider"></div>
            {/* 3rd part */}
            <div className='flex gap-10 flex-col-reverse md:gap-6 md:flex-row mt-10 '>
                <div className='w-full md:w-1/2'>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-xl font-semibold">Duration</span>

                        </label>
                        <select className="select select-bordered">
                            <option disabled selected>30 min</option>
                            <option>15 min</option>
                            <option>30 min</option>
                            <option>45 min</option>
                            <option>60 min</option>
                            <option>Custom</option>
                        </select>

                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <p>Define how long your event will be. It can be as long as 12 hours.</p>
                </div>
            </div>
            <div className="divider"></div>
            {/* 4th part */}
            <div className='flex gap-10 flex-col-reverse md:gap-6 md:flex-row mt-10 '>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-xl font-semibold'>How do you want to offer your availability for this event type?</h2>

                </div>
                <div className='w-full md:w-1/2'>
                    <p>
                        Select one of your schedules or define custom hours specific to this type of event.</p>
                </div>
            </div>
            <div className='mt-10'>

                <Tabs>
                    <TabList className="flex gap-3">
                        <Tab className="px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded-t-lg">
                            Use an existing schedule
                        </Tab>
                        <Tab className="px-4 py-2 bg-gray-200 text-gray-700 border border-gray-300 rounded-t-lg">
                            Set custom hour
                        </Tab>

                    </TabList>

                    <TabPanel>

                        <div>
                            <div className='mt-8'>
                                <h2 className='font-semibold'>Which schedule do you want to use?</h2>
                            </div>

                            <div className="relative w-[200px] mt-3">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                                    <BsStar></BsStar>
                                </div>
                                <select className="block w-full py-2 pl-10 pr-8 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-300">
                                    <option disabled selected>Working Hours</option>
                                    <option  >Working Hours</option>
                                </select>
                            </div>
                            <div className='mt-6 flex gap-4'>
                                <BiWorld fontSize={20}></BiWorld>
                                <h1 >Asia/Dhaka</h1>
                            </div>

                            <div className='border px-2 md:px-10 py-6 flex flex-col-reverse gap-6 md:gap-10 md:flex-row mt-4'>
                                <div className='w-full md:w-1/2'>
                                    <h5 className='font-semibold'>WEEKLY HOURS</h5>
                                    <div className='mt-4'>
                                        <div className='flex gap-32 md:gap-10'>
                                            <h1 className='font-bold w-5'>Sun</h1>
                                            <p>Unavailable</p>
                                        </div>
                                        <div className='flex gap-32 md:gap-10 mt-3'>
                                            <h1 className='font-bold w-5'>Mon</h1>
                                            <p> 9:00am – 5:00pm</p>
                                        </div>
                                        <div className='flex gap-32 md:gap-10 mt-3'>
                                            <h1 className='font-bold w-5'>Tue</h1>
                                            <p> 9:00am – 5:00pm</p>
                                        </div>
                                        <div className='flex gap-32 md:gap-10 mt-3'>
                                            <h1 className='font-bold w-5'>Wed</h1>
                                            <p> 9:00am – 5:00pm</p>
                                        </div>
                                        <div className='flex gap-32 md:gap-10 mt-3'>
                                            <h1 className='font-bold w-5'>Thu</h1>
                                            <p> 9:00am – 5:00pm</p>
                                        </div>
                                        <div className='flex gap-32 md:gap-10 mt-3'>
                                            <h1 className='font-bold w-5'>Fri</h1>
                                            <p> 9:00am – 5:00pm</p>
                                        </div>
                                        <div className='flex gap-32 md:gap-10 mt-3'>
                                            <h1 className='font-bold w-5'>Sat</h1>
                                            <p> Unavailable</p>
                                        </div>

                                    </div>
                                </div>

                                <div className='w-full md:w-1/2'>
                                    <h1 className='font-semibold'>DATE OVERRIDES</h1>
                                    <p className='text-gray-400 pt-4 text-justify md:pl-6 md:pt-4'>
                                        To override your hours on specific dates, update your schedule under Availability
                                    </p>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        {/* todo */}
                        <div className=" py-2">
                            <div className='border'>
                                <div>
                                    <div className='timezone__wrapper w-full md:w-[400px]'>
                                        <p> Timezone</p>
                                        <TimezoneSelect
                                            value={selectedTimezone}
                                            onChange={setSelectedTimezone}
                                        />
                                    </div>
                                    <div>
                                        <WeeklyHoursForm></WeeklyHoursForm>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </TabPanel>

                </Tabs>
            </div>
            <div className="divider"></div>
            {/* 5th part */}
            <div className='flex gap-10 flex-col-reverse md:gap-8 md:flex-row mt-10'>

                <div className='w-full md:w-1/2'>
                    <h3 className='font-semibold'>Want to add time before or after your events?</h3>
                    <Checkbox label="Before event" />
                    <div className='px-10 w-full max-w-xs'>
                        <select className="select select-bordered w-full">
                            <option disabled selected>5 min</option>
                            <option>5 min</option>
                            <option>10 min</option>
                            <option>15 min</option>
                            <option>20 min</option>
                            <option>25 min</option>
                            <option>30 min</option>
                            <option>35 min</option>
                            <option>40 min</option>
                            <option>45 min</option>
                            <option>50 min</option>
                            <option>25 min</option>
                            <option>1 hrs</option>
                            <option>1 hr 30 min</option>
                            <option>2 hr min</option>
                            <option>2 hr 30 min</option>
                            <option>3 hrs</option>
                        </select>
                    </div>
                    <Checkbox label="After event" />
                    <div className='px-10 w-full max-w-xs'>
                        <select className="select select-bordered w-full">
                            <option disabled selected>5 min</option>
                            <option>5 min</option>
                            <option>10 min</option>
                            <option>15 min</option>
                            <option>20 min</option>
                            <option>25 min</option>
                            <option>30 min</option>
                            <option>35 min</option>
                            <option>40 min</option>
                            <option>45 min</option>
                            <option>50 min</option>
                            <option>25 min</option>
                            <option>1 hrs</option>
                            <option>1 hr 30 min</option>
                            <option>2 hr min</option>
                            <option>2 hr 30 min</option>
                            <option>3 hrs</option>
                        </select>
                    </div>
                </div>
                <div className='w-full md:w-1/2 mb-2'>
                    <p className='text-gray-400'>
                        Give yourself some buffer time to prepare for or wrap up from booked Calendly events.</p>
                    <div className='border w-full h-[160px] px-4 py-12'>
                        <div className='shadow-md p-4 bg-gray-50'>Board</div>
                        <div className="divider"></div>
                    </div>
                </div>
            </div>

            {/* 6th part */}


            <div className='mt-10'>
                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader className='text-blue-600 w-[300px] md:w-[400px]  md:text-xl hover:underline' onClick={() => handleOpen(1)}>Additional rules for your availability</AccordionHeader>
                    <AccordionBody>
                        {/* accordian 1st part */}
                        <div className='flex gap-10 flex-col-reverse md:gap-6 md:flex-row mt-10 '>
                            <div className='w-full md:w-1/2'>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Start time increments</span>
                                    </label>
                                    <label className="label">
                                        <span className="label-text text-xs font-semibold">Show available start times in increments of...</span>
                                    </label>
                                    <select className="select select-bordered">
                                        <option disabled selected>5 min</option>
                                        <option>5 min</option>
                                        <option>10 min</option>
                                        <option>15 min</option>
                                        <option>20 min</option>
                                        <option>30 min</option>
                                        <option>45 min</option>
                                        <option>60 min</option>
                                        <option>Custom</option>
                                    </select>

                                </div>
                            </div>
                            <div className='w-full md:w-1/2'>
                                <p className='text-xl text-gray-400'>
                                    Set the frequency of available time slots for invitees.</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        {/* accordian 2nd part */}
                        <div className='flex gap-10 flex-col-reverse md:gap-6 md:flex-row mt-10 '>
                            <div className='w-full md:w-1/2 '>
                                {/* <h2 className='text-xl font-bold'>Scheduling conditions</h2>
                                <p className='font-semibold  mt-3' >Invitees can't schedule within...</p> */}
                                <label className="label">
                                    <span className="label-text text-xl font-semibold">Scheduling conditions</span>
                                </label>
                                <label className="label">
                                    <span className="label-text text-xs font-semibold">Invitees can't schedule within...</span>
                                </label>

                                <div className='mt-3 flex flex-col'>
                                    <div className='flex items-center  gap-2'>

                                        <input
                                            type="text"
                                            className="input input-bordered font-semibold w-[50px] md:w-[100px] max-w-xs"
                                            placeholder='4'
                                        />
                                        <select className="select select-bordered w-[150px] md:w-[200px] max-w-xs">
                                            <option disabled selected>Hours</option>
                                            <option>Minutes</option>
                                            <option>Hours</option>
                                            <option>Days</option>
                                        </select>
                                        <p className=''>of an event start time.</p>

                                    </div>
                                    <div className="form-control w-full max-w-xs mt-10">
                                        <label className="label">
                                            <span className="label-text font-bold flex gap-3 items-center">
                                                Maximum allowed events per day for this type of event

                                            </span>
                                        </label>

                                        <input
                                            type="text"
                                            className="input input-bordered font-semibold w-1/3 max-w-xs"
                                        />
                                    </div>

                                </div>
                            </div>
                            <div className=' w-full md:w-1/2'>
                                <p className='text-gray-600'>Set a range of dates when you can accept meetings.</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        {/* accordian 3rd part */}

                        <div className='flex gap-10 flex-col-reverse md:gap-6 md:flex-row mt-10 '>
                            <div className='w-full md:w-1/2 '>
                                <h2 className='text-2xl font-semibold'>Time zone display</h2>

                                <div className='mt-3 flex flex-col text-base text-black'>

                                    <Radio className='' name="type" label='Automatically detect and show the times in my invitee time zone' />
                                    <Radio name="type" label='Lock the timezone (best for in-person events)' />
                                </div>
                            </div>
                            <div className=' w-full md:w-1/2'>
                                <p className='text-gray-600 px-4 '>If you’re meeting in person, you should lock this to the time zone of your event location. Otherwise, Calendly detects your time zones to make sure everyone meets at the correct time.</p>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className='flex gap-10 flex-col md:gap-8 md:flex-row mt-10'>

                            <div className='w-full md:w-1/2 font-semibold'>
                                <h3 className='font-bold text-xl'>Secret event</h3>
                                <Checkbox label="Make this a secret event" />

                                <p className='px-8'>Only invitees who have this Calendly link can schedule with you.</p>
                            </div>
                            <div className='w-full md:w-1/2 mb-2'>
                                <p className='text-gray-400'>
                                    Use this to hide the event on your main scheduling page.</p>

                            </div>
                        </div>

                    </AccordionBody>
                </Accordion>
                <div className="divider"></div>
                <div className="flex justify-center md:justify-end">
                    <div className="flex gap-4">
                        <button className="rounded-md btn p-2">Cancel</button>
                        <button className="rounded-md btn btn-primary px-2 ">Next</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default EventPage;