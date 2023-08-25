// src/components/Event.js
import React from "react";
import { Link } from "react-router-dom";

const Event = ({ title, date, location, description, imageUrl }) => {
  
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <Link to="">
        <img
          src={imageUrl}
          alt={`Event: ${title}`}
          className="object-cover w-full h-40"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 text-gray-600">{date}</p>
          <p className="text-gray-600">{location}</p>
          <p className="mt-4 text-gray-700">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Event;
