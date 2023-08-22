// src/components/Event.js
import React from "react";
import { Link } from "react-router-dom";

const Event = ({ title, date, location, description, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to="">
        <img
          src={imageUrl}
          alt={`Event: ${title}`}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600 mt-2">{date}</p>
          <p className="text-gray-600">{location}</p>
          <p className="text-gray-700 mt-4">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Event;
