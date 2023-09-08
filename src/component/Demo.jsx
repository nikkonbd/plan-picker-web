import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import axios from "axios";

const Demo = ({ handleSubmit, eventData }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  console.log(eventData);
  const {
    id,
    eventName,
    location,
    description,
    selectedTimezone,
    eventDuration,
    eventLink,
    formData,
  } = eventData;
  console.log(formData?.startDate);
  // const { startTime, endTime, startDate, endDate } = eventData.formData.formData;
  // console.log(startDate);

  // console.log(id);

  // if (isSuccess) {
  // }
  // useEffect(() => {
  //   axios
  //     .get(`https://plan-picker-server.vercel.app/getEvent/${id}`)
  //     .then((response) => {
  //       const data = response.data;
  //       // setEventData(data);
  //       console.log(data);
  //     });
  // }, []);

  const data = {
    id,
    eventName,
    location,
    description,
    eventLink,
    selectedTimezone: formData?.selectedTimezone?.label,
    eventDuration: formData?.eventDuration,
    startTime: formData?.startTime,
    endTime: formData?.endTime,
    startDate: formData?.startDate.toDateString(),
    endDate: formData?.endDate.toDateString(),
  };

  return (
    <div>
      <button
        className="bg-[#5EBEC4] hover:bg-[#42a6ad] duration-200 text-white px-3 rounded-md btn"
        onClick={handleOpen}>
        <span onClick={() => handleSubmit()}>Preview</span>
      </button>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none">
        <Card className="w-full mx-auto md:max-w-2xl">
          <CardHeader className="text-center py-3 bg-[#5EBEC4]">
            <Typography variant="h4" color="white">
              Event Information
            </Typography>
          </CardHeader>

          <CardBody>
            <div className="">
              <h1 className="font-semibold">
                Event Name:
                <span className="text-xl font-bold text-teal-800 ms-1">
                  {data?.eventName}
                </span>
              </h1>
              <p className="mt-2">
                <span className="font-semibold me-1">Description:</span>
                {data?.description}
              </p>
              <p className="mt-5">
                <span className="font-semibold me-1">Location:</span>
                {data?.location}
              </p>
              <p>
                <span className="font-semibold me-1">Selected Time Zone:</span>
                {data?.selectedTimezone}
              </p>
              <p>
                <span className="font-semibold me-1">Event Duration:</span>
                {data?.eventDuration} minute
              </p>
              <div className="flex justify-between mt-2">
                <p>
                  <span className="font-semibold me-1">Start Time:</span>
                  {data?.startTime}
                </p>
                <p>
                  <span className="font-semibold me-1">Start Date:</span>
                  {data?.startDate}
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                  <span className="font-semibold me-1">End Time:</span>
                  {data?.endTime}
                </p>
                <p>
                  <span className="font-semibold me-1">End Date:</span>
                  {data?.endDate}
                </p>
              </div>
              <p className="mt-5">
                <span className="font-semibold me-1">Meet Link:</span>
                {data?.eventLink}
              </p>
              <div className="flex justify-end gap-3 mt-4">
                <button className="px-4 text-xl font-semibold py-2 bg-[#5EBEC4] hover:bg-[#42a6ad] duration-200 text-white rounded-md">
                  <Link to="/dashboard/mySchedule">OK</Link>
                  {/* {"/dashboard/mySchedule"} */}
                </button>
              </div>
            </div>
          </CardBody>
        </Card>
      </Dialog>
      <Toaster />
    </div>
  );
};

export default Demo;
