import React from "react";
import ScheduleCard from "./ScheduleCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MySchedule = () => {
  const { user } = useContext(AuthContext);
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [eventData, setEventData] = useState([]);

  // call axios hook
  const [axiosSecure] = useAxiosSecure();

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
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteEventById/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
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

  return (
    <div>
      <h2 className="relative text-2xl">
        My Schedule
        <span className="absolute px-2 py-1 text-xs text-white bg-orange-600 rounded-full animate-pulse">
          {events.length}
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-5 my-5 md:grid-cols-2 lg:grid-cols-2">
        {events.map((scheduleData) => (
          <ScheduleCard
            key={scheduleData._id}
            scheduleData={scheduleData}
            eventDelete={eventDelete}></ScheduleCard>
        ))}
      </div>
    </div>
  );
};

export default MySchedule;
