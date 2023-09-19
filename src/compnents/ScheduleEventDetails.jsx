import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { BsClockHistory } from "react-icons/bs";
import { MdOutlineEventNote } from "react-icons/md";
import { ImEarth } from "react-icons/im";
import { Button, Input } from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../src/providers/AuthProvider";
import { useSelector } from "react-redux";

import { confirmedSubmitData } from "../store/features/cofirmedEvent/confirmedEvent";
import { useDispatch } from "react-redux";
import axios from "axios";

const ScheduleEventDetails = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const eventData = useLoaderData();
  const data = useSelector((state) => state.participantData.data);
  const [{ eventName, description, formData, eventLink }] = eventData;
  const dispatch = useDispatch();
  const { isLoading, isSuccess, error } = useSelector(
    (state) => state.confirmedEventData
  );

  //Navigate to Back
  const goBack = () => {
    navigate(-1);
  };

  function generateTimeSlotsWithEndTime(startTime, durationMinutes) {
    const timeSlots = [];
    const endTime = new Date(startTime);
    endTime.setMinutes(endTime.getMinutes() + durationMinutes);

    // Check if endTime is midnight (00:00) and adjust it to noon (12:00 PM)
    if (endTime.getHours() === 0 && endTime.getMinutes() === 0) {
      endTime.setHours(12);
      endTime.setMinutes(0);
    }

    const formattedStartTime = startTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const formattedEndTime = endTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    timeSlots.push(`${formattedStartTime} - ${formattedEndTime}`);

    return timeSlots;
  }

  const startTime = new Date(data?.startTime);
  const durationMinutes = formData?.eventDuration;

  const timeSlots = generateTimeSlotsWithEndTime(startTime, durationMinutes);
  console.log(timeSlots[0]);

  // ======================

  // Initialize state variables for each input field
  const [participantFormData, setParticipantFormData] = useState({
    name: "",
    email: "",
    note: "",
  });

  // Event handler to update the state when input values change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setParticipantFormData({
      ...participantFormData,
      [name]: value,
    });
  };

  const formatedSelectedDate = data?.startTime;
  console.log(formatedSelectedDate);
  const confirmedData = {
    minutes: formData?.eventDuration,
    timeDurationRange: timeSlots[0],
    selectedDate: data?.startTime,
    eventName,
    timeZone: data?.userTimezone,
    hostName: user?.displayName,
    hostEmail: user?.email,
    participantEmail: participantFormData?.email,
    meetLink: data[0]?.link?.meetLink,
    name: participantFormData?.name,
    email: participantFormData?.email,
    note: participantFormData?.note,
    location: data[0]?.location,
    id: data?.id,
    eventLink,
  };

  const submitConfirmed = async () => {
    dispatch(confirmedSubmitData(confirmedData));
  };

  if (isSuccess) {
    navigate("/confirmedSchedule");
  }
  

  return (
    <>
      <Helmet>
        <title>ScheduleEventDetails || PlanPicker</title>
      </Helmet>
      <div className="max-w-screen-xl mx-auto h-[60vh]">
        <div className="w-full px-4 mt-20 lg:flex">
          <div className="space-y-2 lg:w-1/2">
            <FaArrowLeft
              onClick={() => goBack()}
              className="text-2xl cursor-pointer"></FaArrowLeft>
            <p>{user?.displayName}</p>
            <h3 className="text-3xl font-semibold">{eventName}</h3>
            <p className="flex items-center gap-2 font-semibold">
              <BsClockHistory></BsClockHistory>
              {formData?.eventDuration} min
            </p>
            <p className="flex items-center gap-2 font-semibold">
              <MdOutlineEventNote></MdOutlineEventNote>

              <div>
                {timeSlots[0]}, {data?.startTime.toDateString()}
              </div>
            </p>
            <p className="flex items-center gap-2 font-semibold">
              <ImEarth></ImEarth>
              {data?.userTimezone}
            </p>
          </div>

          <div className="space-y-2 lg:w-1/2">
            <h4 className="text-xl font-semibold">Enter Details</h4>
            <form className="space-y-5">
              <Input
                type="text"
                name="name"
                label="Name"
                value={participantFormData.name}
                onChange={handleInputChange}
              />
              <Input
                type="email"
                name="email"
                label="Email"
                value={participantFormData.email}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="note"
                className="h-16 "
                label="Please share anything that will help prepare for our meeting."
                value={participantFormData.note}
                onChange={handleInputChange}
              />
              <div className="pt-5">
                <Button
                  onClick={() => submitConfirmed()}
                  // type="submit"
                  color="blue">
                  Schedule Event
                </Button>
                {isLoading && <div>Loading...</div>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleEventDetails;
