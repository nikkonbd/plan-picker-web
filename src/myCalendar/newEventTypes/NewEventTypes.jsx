import React from "react";
import { Link } from "react-router-dom";

const NewEventTypes = () => {
  const eventTypes = [
    { id: 1, name: "Conference", color: "bg-blue-400" },
    { id: 2, name: "Party", color: "bg-green-400" },
    { id: 3, name: "Workshop", color: "bg-orange-400" },
    // ... other event types
  ];

  return (
    <div className="">
      <h2 className="text-xl font-bold mb-4">Create New Event Type</h2>
      {/* overflow-x-auto space-x-4*/}
      <div className="flex flex-col  gap-5 ">
        {eventTypes.map((eventType) => (
          <Link to="">
            <div
              key={eventType.id}
              className={` p-4 rounded-lg shadow-md max-w-2xl  ${eventType.color}`}>
              <h3 className="text-lg font-semibold mb-2">{eventType.name}</h3>
              <p className="text-sm text-white">Description goes here</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewEventTypes;
