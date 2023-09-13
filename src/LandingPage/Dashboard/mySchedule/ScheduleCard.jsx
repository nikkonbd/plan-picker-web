import { RxCross2 } from "react-icons/rx";


const ScheduleCard = ({ scheduleData }) => {
  console.log(scheduleData);
  const [eventData, setEventData] = useState([]);


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

  console.log(eventData);

  const [axiosSecure] = useAxiosSecure();

  const { data: events = [], refetch } = useQuery(["getEvent"], async () => {
    const res = await axiosSecure.get("/getEvent");
    setEventData(res.data);
    return res.data;
  });

  // console.log(events);

  const eventDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plan-picker-server.vercel.app/deleteEventById/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Schedule has been deleted.", "success");
              const remainingEvent = eventData.filter(
                (event) => event.id !== id
              );
              setEventData(remainingEvent);

              console.log(remainingEvent);
              refetch();
            }
          });
      }
    });
  };

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
