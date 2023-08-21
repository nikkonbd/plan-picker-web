// src/components/EventSearch.js
import React, { useState } from "react";
import Event from "./Event";

const EventSearch = ({ events }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-6">Upcoming Events</h1>
      <div className="mb-4 max-w-md">
        <input
          type="text"
          placeholder="Search events"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
          <Event key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventSearch;
