import { RxCross2 } from "react-icons/rx";


const ScheduleCard = ({ scheduleData, eventDelete }) => {
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

  return (
    <div className="relative border-[1px] border-teal-500 bg-gradient-to-tl from-teal-50/30 via-teal-100/30 to-teal-200/30 p-8 rounded-lg shadow hover:shadow-xl cursor-default">
      <button
        onClick={() => eventDelete(id)}
        className="absolute p-1 text-white bg-red-500 rounded-full -right-2 -top-2">
        {" "}
        <RxCross2 size={18}></RxCross2>
      </button>
      <p className="pb-2 font-semibold">
        Time Zone: {formData?.selectedTimezone?.value}
      </p>
      <p className="mb-4 font-semibold border-b-[1px] border-teal-700">
        Schedule Date:
        <span className="ml-1 text-teal-900">{formData?.startDate}</span>
      </p>
      <h3 className="font-semibold text-teal-800">
        <span className="text-black ">Event Name:</span> {eventName}
      </h3>
      <h4 className="py-2">Description: {description}</h4>
      <p className="pb-4 border-b-[1px] border-teal-700">
        Location: {location}
      </p>
      <div className="flex justify-between mt-5">
        <p>Start Time: {formData?.startTime}</p>
        <p>End Time: {formData?.endTime}</p>
      </div>
      <p>Duration: {formData?.eventDuration} min</p>
      <div className="flex justify-between pt-3">
        <p className="flex flex-wrap">
          <span className="font-semibold ">Meeting Link:</span>
          <span className="pl-2 font-bold text-teal-800 ">
            {eventLink ? eventLink : link?.meetLink}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ScheduleCard;
