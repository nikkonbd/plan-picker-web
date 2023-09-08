import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";
const Demo = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const data = {
    _id: "11",
    eventName: "Test Event",
    location: "Video",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore ad ut aut qui architecto hic et, deleniti nemo mollitia maxime Lorem ipsum dolor sit amet consectetur, adipisicing elit",
    eventLink: "meet.com/ghy-gght-hfd",
    selectedTimezone: "GMT 6+",
    eventDuration: 3,
    startTime: "12.00 pm",
    endTime: "2.00 pm",
    startDate: "12-01-2024",
    endDate: "12-01-2024",
  };

  return (
    <div>
      <button
        className="bg-[#5EBEC4] hover:bg-[#42a6ad] duration-200 text-white px-3 rounded-md btn"
        onClick={handleOpen}>
        Preview
      </button>
      <Dialog
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none">
        <Card className="mx-auto w-full md:max-w-2xl">
          <CardHeader className="text-center py-3 bg-[#5EBEC4]">
            <Typography variant="h4" color="white">
              Event Information
            </Typography>
          </CardHeader>

          <CardBody>
            <div className="">
              <h1 className="font-semibold">
                Event Name:
                <span className="ms-1 text-xl font-bold text-teal-800">
                  {data.eventName}
                </span>
              </h1>
              <p className="mt-2">
                <span className="font-semibold me-1">Description:</span>
                {data.description}
              </p>
              <p className="mt-5">
                <span className="font-semibold me-1">Location:</span>
                {data.location}
              </p>
              <p>
                <span className="font-semibold me-1">Selected Time Zone:</span>
                {data.selectedTimezone}
              </p>
              <p>
                <span className="font-semibold me-1">Event Duration:</span>
                {data.eventDuration} hour
              </p>
              <div className="flex justify-between mt-2">
                <p>
                  <span className="font-semibold me-1">Start Time:</span>
                  {data.startTime}
                </p>
                <p>
                  <span className="font-semibold me-1">Start Date:</span>
                  {data.startDate}
                </p>
              </div>
              <div className="flex justify-between">
                <p>
                  <span className="font-semibold me-1">End Time:</span>
                  {data.endTime}
                </p>
                <p>
                  <span className="font-semibold me-1">End Date:</span>
                  {data.endDate}
                </p>
              </div>
              <p className="mt-5">
                <span className="font-semibold me-1">Meet Link:</span>
                {data.eventLink}
              </p>
              <div className="flex justify-end gap-3 mt-4">
                <button className="px-4 text-xl font-semibold py-2 bg-[#5EBEC4] hover:bg-[#42a6ad] duration-200 text-white rounded-md">
                  <Link to={"/dashboard/mySchedule"}>OK</Link>
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
