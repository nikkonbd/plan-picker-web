import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";

const Demo = ({ handleSubmit, isDataValid }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  // const [loading, setLoading] = useState(true);
  const insertedId = useSelector((state) => state.formSubmission.insertedId);
  const events = useSelector((state) => state.formSubmission.eventData);
  const { isLoading, isSuccess, error } = useSelector(
    (state) => state.formSubmission
  );
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async (events) => {
      try {
        const data = await events;
        setData(data);
        // setLoading(false);
      } catch (error) {
        // setLoading(false);
        setError(error);
        console.error("Error fetching data:", error);
      }
    };

    fetchData(events);
  }, [insertedId]);

  

  return (
    <div>
      <button
        // className="bg-[#5EBEC4] hover:bg-[#42a6ad] duration-200 text-white px-3 rounded-md btn"
        className={`${
          isDataValid ? "" : "disabled:opacity-50 cursor-not-allowed"
        } bg-[#5EBEC4] hover:bg-[#42a6ad] duration-200 text-white px-3 rounded-md btn`}
        disabled={!isDataValid}
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

          {isLoading ? (
            <div className="flex justify-center items-center">Loading...</div>
          ) : (
            <div>
              {data.map((event) => (
                <CardBody key={event?._id}>
                  <div className="">
                    <h1 className="font-semibold">
                      Event Name:
                      <span className="text-xl font-bold text-teal-800 ms-1">
                        {event?.eventName}
                      </span>
                    </h1>
                    <p className="mt-2">
                      <span className="font-semibold me-1">Description:</span>
                      {event?.description}
                    </p>
                    <p className="mt-5">
                      <span className="font-semibold me-1">Location:</span>
                      {event?.location}
                    </p>
                    <p>
                      <span className="font-semibold me-1">
                        Selected Time Zone:
                      </span>
                      {event?.formData?.selectedTimezone?.label}
                    </p>
                    <p>
                      <span className="font-semibold me-1">
                        Event Duration:
                      </span>
                      {event?.formData?.eventDuration} minute
                    </p>
                    <div className="flex justify-between mt-2">
                      <p>
                        <span className="font-semibold me-1">Start Time:</span>
                        {event?.formData?.startTime}
                      </p>
                      <p>
                        <span className="font-semibold me-1">Start Date:</span>
                        {event?.formData?.startDate}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p>
                        <span className="font-semibold me-1">End Time:</span>
                        {event?.formData?.endTime}
                      </p>
                      <p>
                        <span className="font-semibold me-1">End Date:</span>
                        {event?.formData?.endDate}
                      </p>
                    </div>
                    <p className="mt-5">
                      <span className="font-semibold me-1">Meet Link:</span>
                      {event?.eventLink ? event?.eventLink : event?.link?.meetLink}
                    </p>
                    <div className="flex justify-end gap-3 mt-4">
                      <button className="px-4 text-xl font-semibold py-2 bg-[#5EBEC4] hover:bg-[#42a6ad] duration-200 text-white rounded-md">
                        <Link to="/dashboard/mySchedule">OK</Link>
                      </button>
                    </div>
                  </div>
                </CardBody>
              ))}
            </div>
          )}
        </Card>
      </Dialog>
      <Toaster />
    </div>
  );
};

export default Demo;
