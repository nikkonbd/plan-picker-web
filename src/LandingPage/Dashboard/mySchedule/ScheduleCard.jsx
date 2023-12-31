import { RxCross2 } from "react-icons/rx";
import { AiOutlineCopy } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

// const ScheduleCard = ({ scheduleData }) => {
//   console.log(scheduleData);

const ScheduleCard = ({ scheduleData, eventDelete }) => {
  const [eventData, setEventData] = useState([]);

  const {
    id,
    eventName,
    location,
    description,
    selectedTimezone,
    eventDuration,
    eventLink,
    formData,
    link,
  } = scheduleData;

  const [isCopied, setIsCopied] = useState(false);

  // Link copy function
  const handleCopyLinkToClipboard = () => {
    // const domainAndPort = "planpicker.web.app"; // Replace with your actual domain and port
    const domainAndPort = "planpicker.web.app"; // Replace with your actual domain and port

    const eventLink = `https://${domainAndPort}/event/${eventName}/${id}`;

    navigator.clipboard
      .writeText(eventLink)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500); // Reset copied state after 1.5 seconds
      })
      .catch((error) => {
        console.error("Error copying link to clipboard:", error);
      });
  };

  // Parse the date string into a Date object
  const startDate = new Date(formData?.startDate);

  // Format the date as a string in a desired format (e.g., "YYYY-MM-DD HH:mm:ss")
  const formattedStartDate = `${startDate.getFullYear()}-${String(
    startDate.getMonth() + 1
  ).padStart(2, "0")}-${String(startDate.getDate()).padStart(2, "0")} ${String(
    startDate.getHours()
  ).padStart(2, "0")}:${String(startDate.getMinutes()).padStart(
    2,
    "0"
  )}:${String(startDate.getSeconds()).padStart(2, "0")}`;

  // Parse the date string into a Date object
  const endDate = new Date(formData?.endDate);

  // Format the date as a string in a desired format (e.g., "YYYY-MM-DD HH:mm:ss")
  const formattedEndDate = `${endDate.getFullYear()}-${String(
    endDate.getMonth() + 1
  ).padStart(2, "0")}-${String(endDate.getDate()).padStart(2, "0")} ${String(
    endDate.getHours()
  ).padStart(2, "0")}:${String(endDate.getMinutes()).padStart(2, "0")}:${String(
    endDate.getSeconds()
  ).padStart(2, "0")}`;

  // Calculate the duration in hours
  const durationInHours = formData?.eventDuration / 60;

  // Determine the unit of time to display
  const unitOfTime = durationInHours >= 1 ? "hour" : "min";

  // Format the duration
  const formattedDuration =
    unitOfTime === "hour"
      ? `${durationInHours.toFixed(1)} ${unitOfTime}`
      : `${
          formData?.eventDuration ? formData?.eventDuration : 0
        } ${unitOfTime}`;

  return (
    <div className="relative border-[1px] border-teal-500 bg-[#68d8e0] text-black p-8 rounded-lg shadow hover:shadow-xl cursor-default">
      <button
        onClick={() => eventDelete(id)}
        className="absolute p-1 text-white bg-red-500 rounded-full -right-2 -top-2">
        <RxCross2 size={18}></RxCross2>
      </button>
      <p className="pb-2 font-semibold">
        Time Zone: {formData?.selectedTimezone?.value}
      </p>
      <div className="flex items-center justify-between mb-4 pb-2 border-b-[1px] border-teal-700">
        <p className="font-semibold ">
          Start Date:
          <span className="text-teal-900">
            {formattedStartDate.slice(0, 10)}
          </span>
        </p>
        <p className="font-semibold">
          End Date:
          <span className="text-teal-900">{formattedEndDate.slice(0, 10)}</span>
        </p>
      </div>
      <h3 className="font-semibold text-teal-800">
        <span className="text-black ">Event Name:</span> {eventName}
      </h3>
      <h4 className="py-2">Description: {description}</h4>
      <p className="pb-4 border-b-[1px] border-teal-700">
        Location: {location}
      </p>
      <div className="flex justify-between mt-1 font-semibold">
        <p>Start Time: {formData?.startTime}</p>
        <p>End Time: {formData?.endTime}</p>
      </div>
      <p>Duration: {formattedDuration}</p>
      <p className="flex flex-wrap">
        <span className="font-semibold ">Meeting Link:</span>
        <span className="pl-2 font-medium text-teal-800 ">
          {eventLink ? eventLink : link?.meetLink}
        </span>
      </p>

      <div className="flex justify-end pt-3">
        {isCopied ? <span className="pr-2 text-green-500">Copied!</span> : null}
        <button onClick={handleCopyLinkToClipboard}>
          <AiOutlineCopy
            className={`w-8 h-8 ${isCopied ? "text-green-500" : ""}`}
          />
        </button>
      </div>
    </div>
  );
};

export default ScheduleCard;
