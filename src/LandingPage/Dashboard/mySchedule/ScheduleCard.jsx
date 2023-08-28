import React from "react";
import { RxCross2 } from "react-icons/rx";
const ScheduleCard = ({ scheduleData }) => {
  const {
    id,
    title,
    description,
    address,
    date,
    start_time,
    end_time,
    expected_perticipents,
    total_host,
  } = scheduleData || {};
  return (
    <div className="relative border-[1px] border-teal-500 bg-gradient-to-tl from-teal-50/30 via-teal-100/30 to-teal-200/30 p-8 rounded-lg shadow hover:shadow-xl cursor-default">
      <button className="bg-red-500 text-white p-1 rounded-full absolute -right-2 -top-2">
        {" "}
        <RxCross2 size={18}></RxCross2>
      </button>
      <p className="mb-4">
        Schedule Date:
        <span className="ml-1 font-semibold text-lg text-teal-900">{date}</span>
      </p>
      <h3 className="text-xl font-bold text-teal-800">{title}</h3>
      <h4 className="mb-1">{description}</h4>
      <p className="pb-2 border-b-[1px] border-teal-700">{address}</p>

      <div className="flex justify-between mt-5">
        <p>Start Time: {start_time}</p>
        <p>End Time: {end_time}</p>
      </div>
      <div className="flex justify-between">
        <p>Host: {total_host}</p>
        <p>
          Perticipents:
          <span className="text-teal-800 font-bold">
            {expected_perticipents}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ScheduleCard;
