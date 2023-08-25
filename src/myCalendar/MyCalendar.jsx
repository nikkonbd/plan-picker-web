// src/components/MyCalendar.js
import React from "react";
import "./MyCalendar.css"; // Import custom CSS for styling
import EventSearch from "./eventSearch/EventSearch";
import CreateEventButton from "./createEvent/CreateEvent";
import NewEventTypes from "./newEventTypes/NewEventTypes";
import EventNavbar from "./eventNavbar/EventNavbar";

const MyCalendar = () => {
  const events = [
    {
      title: "Tech Conference 2023",
      date: "August 25-27, 2023",
      location: "San Francisco, CA",
      description: "Join us for the biggest tech conference of the year...",
      imageUrl: "https://example.com/event-image-1.jpg",
    },
    {
      title: "Music Festival 2023",
      date: "September 15-17, 2023",
      location: "New York City, NY",
      description: "Get ready for a weekend of music, art, and fun!...",
      imageUrl: "https://example.com/event-image-2.jpg",
    },
  ];

  return (
    <div className="py-8">
      {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 */}

      <div className="flex items-center justify-around">
        <div>
          {/* <h1 className="">My Calendar</h1>
          <EventNavbar /> */}
        </div>
        <CreateEventButton />
      </div>
      <div className="flex">
        <EventSearch events={events} />
      </div>
      {/* <div className="p-4 bg-white rounded-lg shadow-md">
          
        </div> */}
      {/* R */}
      {/* <NewEventTypes /> */}
    </div>
  );
};

export default MyCalendar;
