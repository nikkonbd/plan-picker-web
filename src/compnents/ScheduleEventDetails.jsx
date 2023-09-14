import React from "react";
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
import axios from "axios";





const ScheduleEventDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const eventData = useLoaderData();
  const data = useSelector((state) => state.participantData.data);
  const [{ eventName, description, formData }] = eventData;

  console.log(eventName, user);
  console.log(data?.startTime);

  const goBack = () => {
    console.log("first");
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

  // Example usage:
  // const startTime = new Date(2023, 8, 15, 11, 10); // September is month 8 (0-based)
  const startTime = new Date(data?.startTime); // September is month 8 (0-based)
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

  // Event handler to handle form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // You can access the input data in the formData state object here
  //   console.log(participantFormData);
  // };

  // =======================
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Set loading to true while the request is being made

    try {
      // Send data to the backend
      const response = await axios.post('http://localhost:5000/participant-event', participantFormData);
      console.log(response.data);

      // Reset the form after successful submission
      // setParticipantFormData({
      //   name: '',
      //   email: '',
      //   note: '',
      //   // selectedDate: '',
      // });
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false); // Set loading to false when the request is completed
    }
  };
  
  
  
  
  console.log(participantFormData)
  
  
  const submitConfirmed = () => {
    navigate("/confirmedSchedule")
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
            <h3 className="text-3xl font-semibold">
              {formData?.eventDuration} Minute Meeting
            </h3>
            <p className="flex items-center gap-2 font-semibold">
              <BsClockHistory></BsClockHistory>
              {formData?.eventDuration} min
            </p>
            <p className="flex items-center gap-2 font-semibold">
              <MdOutlineEventNote></MdOutlineEventNote>
              {/* 9:30am - 10:00am,
              Wednesday, August 23, 2023 */}

              <div>
                {timeSlots[0]}, {data?.startTime.toDateString()}
              </div>
            </p>
            <p className="flex items-center gap-2 font-semibold">
              <ImEarth></ImEarth>
              {data?.userTimezone}
            </p>
          </div>

          {/* <div className="space-y-2 lg:w-1/2">
            <h4 className="text-xl font-semibold">Enter Details</h4>
            <form className="space-y-5" action="">
              <Input type="text" name="name" label="Name" />
              <Input type="email" name="email" label="email" />
              <Input
                type="text"
                name="note"
                className="h-16"
                label="Please share anything that will help prepare for our meeting."
              />
              <div className="pt-5">
                <Button color="blue">shedule Event</Button>
              </div>
            </form>
          </div> */}
          <div className="space-y-2 lg:w-1/2">
            <h4 className="text-xl font-semibold">Enter Details</h4>
            <form className="space-y-5" onSubmit={handleSubmit}>
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
                className="h-16"
                label="Please share anything that will help prepare for our meeting."
                value={participantFormData.note}
                onChange={handleInputChange}
              />
              <div  className="pt-5">
                <Button onClick={() => submitConfirmed()} type="submit" color="blue">
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
