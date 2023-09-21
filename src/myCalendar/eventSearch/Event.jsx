import React from "react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Event = ({
  eventName,
  date,
  location,
  description,
  formData,
  imageUrl,
  eventLink,
}) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <div className="relative border-[1px] h-64 -z-10 border-teal-500 bg-[#68d8e0] text-black p-8 rounded-lg shadow hover:shadow-xl cursor-default">
        {/* <p className="pb-2 font-semibold">
          Time Zone: {formData?.selectedTimezone?.value}
        </p> */}
        {/* <div className="flex items-center justify-between mb-4 pb-2 border-b-[1px] border-teal-700">
          <p className="font-semibold ">
            Start Date:
            <span className="text-teal-900">
              {formattedStartDate.slice(0, 10)}
            </span>
          </p>
          <p className="font-semibold">
            End Date:
            <span className="text-teal-900">
              {formattedEndDate.slice(0, 10)}
            </span>
          </p>
        </div> */}
        <h3 className="font-semibold text-teal-800">
          <span className="text-black ">Event Name:</span> {eventName}
        </h3>
        <h4 className="py-2">Description: {description}</h4>
        <p className="pb-4 border-b-[1px] border-teal-700">
          Location: {location}
        </p>
        <div className="flex justify-between mt-1">
          <p>
            <small>Start Time: {formData?.startTime}</small>
          </p>
          <p>
            <small>End Time: {formData?.endTime}</small>
          </p>
        </div>
        {/* <p>Duration: {formattedDuration}</p> */}
        <p className="flex flex-wrap">
          <span className="font-semibold ">Meeting Link:</span>
          <span className="pl-2 font-medium text-teal-800 ">{eventLink}</span>
        </p>
      </div>
    </div>
  );
};

export default Event;
