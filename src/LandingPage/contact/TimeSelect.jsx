import React, { useState } from "react";
// import { toast } from "react-toastify";
import TimezoneSelect from "react-timezone-select";

const time = [
  { id: "null", t: "Select" },
  { id: "7", t: "07:00am" },
  { id: "8", t: "07:05am" },
  { id: "9", t: "07:10am" },
  { id: "10", t: "07:15am" },
  { id: "11", t: "07:20am" },
  { id: "12", t: "07:25pm" },
  { id: "13", t: "07:30pm" },
  { id: "14", t: "07:35pm" },
  { id: "15", t: "07:40pm" },
  { id: "16", t: "07:45pm" },
  { id: "17", t: "07:50pm" },
  { id: "18", t: "07:55pm" },
  { id: "19", t: "08:00pm" },
  { id: "20", t: "08:05pm" },
  { id: "21", t: "08:10am" },
  { id: "22", t: "08:15am" },
  { id: "23", t: "08:20am" },
  { id: "24", t: "08:25am" },
  { id: "25", t: "08:30am" },
  { id: "26", t: "08:35pm" },
  { id: "27", t: "08:40pm" },
  { id: "28", t: "08:45pm" },
  { id: "29", t: "08:50pm" },
  { id: "30", t: "08:55pm" },
  { id: "31", t: "09:00pm" },
  { id: "32", t: "09:05pm" },
  { id: "33", t: "09:10pm" },
];

const TimeSelect = () => {
  const [selectedTimezone, setSelectedTimezone] = useState({});
  //👇🏻 This updates the schedule array with the start and end time.
  const handleTimeChange = (e, id) => {
    const { name, value } = e.target;
    if (value === "Select") return;
    const list = [...schedule];
    list[id][name] = value;
    setSchedule(list);
  };
  //👇🏻 Logs the user's schedule to the console after setting the availability
  const handleSaveSchedules = () => {
    if (JSON.stringify(selectedTimezone) !== "{}") {
      console.log(schedule);
    } else {
      toast.error("Select your timezone");
    }
  };

  const [schedule, setSchedule] = useState([
    { day: "Sunday", startTime: "", endTime: "" },
    { day: "Monday", startTime: "", endTime: "" },
    { day: "Tuesday", startTime: "", endTime: "" },
    { day: "Wednesday", startTime: "", endTime: "" },
    { day: "Thursday", startTime: "", endTime: "" },
    { day: "Friday", startTime: "", endTime: "" },
    { day: "Saturday", startTime: "", endTime: "" },
  ]);
  return (
    <div>
      <nav className="dashboard__nav">
      </nav>
      <main className="dashboard__main">
        {/* <h2 className="dashboard__heading">Select your availability</h2> */}
        <div className="timezone__wrapper">
          {schedule.map((sch, id) => (
            <div className="form" key={id}>
              <p className="font-semibold">{sch.day}:</p>
              <div className="flex gap-2 md:gap-6 md:ml-20">
                <div className="select__wrapper space-x-2">
                  <label className="" htmlFor="startTime">Start Time</label>
                  <select
                    name="startTime"
                    id="startTime"
                    onChange={(e) => handleTimeChange(e, id)}
                    className="border-2 p-2 mb-3"
                  >
                    {time.map((t) => (
                      <option key={t.id} value={t.t} id={t.id}>
                        {t.t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="select__wrapper space-x-2">
                  <label className="" htmlFor="endTime">End Time</label>
                  <select
                    className="border-2 p-2"
                    name="endTime"
                    id="endTime"
                    onChange={(e) => handleTimeChange(e, id)}
                  >
                    {time.map((t) => (
                      <option key={t.id} value={t.t} id={t.id}>
                        {t.t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TimeSelect;
