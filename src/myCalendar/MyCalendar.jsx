import React, { useContext } from "react";
import "./MyCalendar.css"; // Import custom CSS for styling
import EventSearch from "./eventSearch/EventSearch";
import CreateEventButton from "./createEvent/CreateEvent";
import NewEventTypes from "./newEventTypes/NewEventTypes";
import EventNavbar from "./eventNavbar/EventNavbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../providers/AuthProvider";

const MyCalendar = () => {
  const { user } = useContext(AuthContext);
  // const [events, setEvents] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Axios GET request
    axios
      .get(
        `https://plan-picker-server.vercel.app/getEventByEmail/${user?.email}`
      )
      .then((response) => {
        setData(response.data);

        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [loading]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const currentDate = new Date(); // Get the current date
  // Create a Date object from the timestamp string
  const endDate = new Date(currentDate);

  // Extract the date parts (year, month, day)
  const year = endDate.getFullYear();
  const month = (endDate.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
  const day = endDate.getDate().toString().padStart(2, "0");

  // Create a formatted date string (e.g., "2023-09-19")
  const formattedEndDate = `${year}-${month}-${day}`;

  console.log(formattedEndDate);

  // Sort events by date in ascending order
  const sortedEvents = [...data].sort((a, b) => {
    const dateA = new Date(a.formData.startDate);
    const dateB = new Date(b.formData.startDate);
    return dateA - dateB;
  });

  // Filter and display upcoming events
  const upcomingEvents = sortedEvents.filter((event) => {
    const eventStartDate = new Date(event.formData.startDate);

    // Create a Date object from the timestamp string
    const startDate = new Date(event.formData.startDate);

    // Extract the date parts (year, month, day)
    const year = startDate.getFullYear();
    const month = (startDate.getMonth() + 1).toString().padStart(2, "0"); // Months are 0-indexed
    const day = startDate.getDate().toString().padStart(2, "0");

    // Create a formatted date string (e.g., "2023-09-19")
    const formattedStartDate = `${year}-${month}-${day}`;

    console.log(formattedEndDate);

    // Convert event start date to local time zone
    eventStartDate.setMinutes(
      eventStartDate.getMinutes() + eventStartDate.getTimezoneOffset()
    );

    return formattedStartDate >= formattedEndDate;
  });

  console.log(upcomingEvents);

  const events = [
    {
      title: "Tech Conference 2023",
      date: "August 25-27, 2023",
      location: "San Francisco, CA",
      description: "Join us for the biggest tech conference of the year...",
      imageUrl: "https://i.ibb.co/gzXt6WC/istockphoto-499517325-612x612.jpg",
    },
  ];

  return (
    <>
      <Helmet>
        <title>MyCalendar || PlanPicker</title>
      </Helmet>
      <div className="md:max-w-6xl">
        {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 */}

        <div className="">
          <div className="items-center justify-between md:flex">
            <div>
              <h1 className="pb-3 text-3xl font-semibold md:pb-0">
                Upcoming Events
              </h1>
            </div>
            <div>
              <CreateEventButton />
            </div>
          </div>
          <div className="flex">
            <EventSearch upcomingEvents={upcomingEvents} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCalendar;
