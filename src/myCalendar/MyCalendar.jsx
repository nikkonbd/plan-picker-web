// src/components/MyCalendar.js
import React, { useEffect, useState } from "react";
import "./MyCalendar.css"; // Import custom CSS for styling
import EventSearch from "./eventSearch/EventSearch";
import CreateEventButton from "./createEvent/CreateEvent";
import NewEventTypes from "./newEventTypes/NewEventTypes";
import EventNavbar from "./eventNavbar/EventNavbar";
import { useLoaderData } from "react-router-dom";

const MyCalendar = () => {

  const Event = useLoaderData();




  return (
    <div className="py-4 md:py-8 md:max-w-6xl">
      {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 */}

      <div className="md:flex items-center justify-between">
        <div><h1 className="text-3xl font-semibold pb-3 md:pb-0">Upcoming Events</h1></div>
        <div><CreateEventButton /></div>
      </div>
      <div className="flex">
        <EventSearch events={Event} />
      </div>
      {/* <div className="p-4 bg-white rounded-lg shadow-md">
          
        </div> */}
      {/* R */}
      {/* <NewEventTypes /> */}
    </div>
  );
};

export default MyCalendar;
