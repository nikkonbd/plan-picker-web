
import React, { useState } from "react";

const WeeklyHoursForm = () => {
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const [hours, setHours] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = {
        checked: false,
        timeSlots: [{ startTime: "", endTime: "" }],
      };
      return acc;
    }, {})
  );

  const handleHoursChange = (day) => {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: {
        ...prevHours[day],
        checked: !prevHours[day].checked,
      },
    }));
  };

  const handleStartTimeChange = (day, index, value) => {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: {
        ...prevHours[day],
        timeSlots: prevHours[day].timeSlots.map((slot, i) =>
          i === index ? { ...slot, startTime: value } : slot
        ),
      },
    }));
  };

  const handleEndTimeChange = (day, index, value) => {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: {
        ...prevHours[day],
        timeSlots: prevHours[day].timeSlots.map((slot, i) =>
          i === index ? { ...slot, endTime: value } : slot
        ),
      },
    }));
  };

  const handleCopyTime = (day, index, isStart) => {
    const sourceTime = isStart
      ? hours[day].timeSlots[index].startTime
      : hours[day].timeSlots[index].endTime;

    setHours((prevHours) => ({
      ...prevHours,
      [day]: {
        ...prevHours[day],
        timeSlots: prevHours[day].timeSlots.map((slot, i) =>
          i === index
            ? { ...slot, [isStart ? "startTime" : "endTime"]: sourceTime }
            : slot
        ),
      },
    }));
  };

  const handleAddTimeSlot = (day) => {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: {
        ...prevHours[day],
        timeSlots: [
          ...prevHours[day].timeSlots,
          { startTime: "", endTime: "" },
        ],
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the hours to an API or perform other actions here
  };

  return (
    <form onSubmit={handleSubmit}>
      {daysOfWeek.map((day) => (
        <div key={day}>
          <label>
            {day.charAt(0).toUpperCase() + day.slice(1)}:
            <input
              type="checkbox"
              checked={hours[day].checked}
              onChange={() => handleHoursChange(day)}
            />
          </label>
          {hours[day].checked && (
            <div>
              {hours[day].timeSlots.map((slot, index) => (
                <div key={index}>
                  <label>
                    Start Time:
                    <input
                      type="time"
                      value={slot.startTime}
                      onChange={(e) =>
                        handleStartTimeChange(day, index, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      onClick={() => handleCopyTime(day, index, true)}>
                      Copy
                    </button>
                  </label>
                  <label>
                    End Time:
                    <input
                      type="time"
                      value={slot.endTime}
                      onChange={(e) =>
                        handleEndTimeChange(day, index, e.target.value)
                      }
                    />
                    <button
                      type="button"
                      onClick={() => handleCopyTime(day, index, false)}>
                      Copy
                    </button>
                  </label>
                </div>
              ))}
              <button type="button" onClick={() => handleAddTimeSlot(day)}>
                Add Time Slot
              </button>
            </div>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default WeeklyHoursForm;
