import React from "react";
import ScheduleCard from "./ScheduleCard";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import axios from "axios";
import Pagination from "./Pagination";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MySchedule = () => {
  const { user } = useContext(AuthContext);
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [eventData, setEventData] = useState([]);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(2);
  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = eventData.slice(firstPostIndex, lastPostIndex);

  // useEffect(() => {
  //   // Axios GET request
  //   axios
  //     .get(`http://localhost:5000/getEventByEmail/${user?.email}`)
  //     .then((response) => {
  //       setSchedule(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //       setLoading(false);
  //     });
  // }, []); // Empty dependency array means the effect runs once after initial render

  // call axios hook
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    // Axios GET request
    axios
      .get(
        `https://plan-picker-server.vercel.app/getEventByEmail/${user?.email}`
      )
      .then((response) => {
        setSchedule(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // Empty dependency array means the effect runs once after initial render

  // fetch event data by email
  const { data: events = [], refetch } = useQuery(
    ["getEventByEmail"],
    async () => {
      try {
        const res = await axiosSecure.get(`/getEventByEmail/${user?.email}`);
        setEventData(res.data);
        setLoading(false);
        return res.data;
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
  );

  // Delete MySchedule events from database and ui
  const eventDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5EBEC4",
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
              Swal.fire("Deleted!", "Your Event has been deleted.", "success");
              const remainingEvent = eventData.filter(
                (event) => event.id !== id
              );
              setEventData(remainingEvent);
              refetch();
            }
          });
      }
    });
  };

  //Show Loading in ui until the data load
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  console.log(schedule);

  return (
    <div>
      <h2 className="relative text-2xl">
        My Schedule
        <span className="absolute px-2 py-1 text-xs text-white bg-orange-600 rounded-full animate-pulse">
          {events.length}
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-5 my-5 md:grid-cols-2 lg:grid-cols-2">
        {/* {schedule.map((scheduleData) => (
          <ScheduleCard
            key={scheduleData._id}
            scheduleData={scheduleData}></ScheduleCard>
        ))} */}
        {currentPost.map((scheduleData) => (
          // {events.map((scheduleData) => (
          <ScheduleCard
            key={scheduleData._id}
            scheduleData={scheduleData}
            eventDelete={eventDelete}></ScheduleCard>
        ))}
      </div>
      <Pagination
        totalPosts={eventData.length}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}></Pagination>
    </div>
  );
};

export default MySchedule;
