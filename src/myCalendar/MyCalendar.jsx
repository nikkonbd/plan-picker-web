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
      .get(`http://localhost:5000/getEventByEmail/${user?.email}`)
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

  const events = [
    {
      title: "Tech Conference 2023",
      date: "August 25-27, 2023",
      location: "San Francisco, CA",
      description: "Join us for the biggest tech conference of the year...",
      imageUrl: "https://i.ibb.co/gzXt6WC/istockphoto-499517325-612x612.jpg",
    },
    {
      title: "Music Festival 2023",
      date: "September 15-17, 2023",
      location: "New York City, NY",
      description: "Get ready for a weekend of music, art, and fun!...",
      imageUrl: "https://i.ibb.co/SJVyWYM/event-party-3005668-640.jpg",
    },
    {
      title: "College Festival 2023",
      date: "September 15-17, 2023",
      location: "New York City, NY",
      description: "Get ready for a weekend of music, art, and fun!...",
      imageUrl:
        "https://i.ibb.co/WHXCrxn/e5ccec4a-40e3-448d-8003-f469eb197bf2.webp",
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
            <EventSearch events={events} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCalendar;
