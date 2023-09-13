import React, { useContext, useEffect, useState } from "react";
import Calendar from "./Calendar";

import EventCalendar from "../eventCalendar/EventCalendar";
import { data } from "autoprefixer";

const EventPageData = () => {
  const currentDate = new Date();
  //   const year = currentDate.getFullYear();
  //   const month = currentDate.getMonth();
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());

  //   const [events, setEvents] = useState([
  //     { id: 1, title: "Meeting", date: new Date(year, month, 5) },
  //     { id: 2, title: "Birthday", date: new Date(year, month, 15) },
  //     // Add more events as needed
  //   ]);

  const events = [
    {
      id: 1,
      title: "Meeting",
      start: new Date(2023, 7, 16, 10, 0),
      end: new Date(2023, 7, 16, 12, 0),
      description: "Discuss project updates.",
    },
    {
      id: 2,
      title: "Birthday",
      start: new Date(2023, 8, 15, 10, 0),
      end: new Date(2023, 8, 15, 12, 0),
      description: "Birthday wish.",
    },
  ];

  return (
    <div>
      {/* ... */}
      {/* <Calendar
        year={year}
        month={month}
        setYear={setYear}
        setMonth={setMonth}
      /> */}
      <EventCalendar events={events} />
      {/* ... */}
    </div>
  );
};

export default EventPageData;
