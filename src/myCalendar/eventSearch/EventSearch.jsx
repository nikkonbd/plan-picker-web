// src/components/EventSearch.js
import React, { useState } from "react";
import Event from "./Event";

const EventSearch = ({ upcomingEvents }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEvents = upcomingEvents.filter((event) =>
    event.eventName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-8">
      {/* <h1 className="mb-6 text-3xl font-semibold">Upcoming Events</h1> */}
      <div className="max-w-md mb-4">
        <input
          type="text"
          placeholder="Search events"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event, index) => (
          <Event key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventSearch;