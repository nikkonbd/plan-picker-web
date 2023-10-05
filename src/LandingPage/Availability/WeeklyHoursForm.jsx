import React, { useState } from "react";
import axios from "axios";

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
      acc[day] = { checked: false, startTime: "", endTime: "" };
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

  const handleStartTimeChange = (day, value) => {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: {
        ...prevHours[day],
        startTime: value,
      },
    }));
  };

  const handleEndTimeChange = (day, value) => {
    setHours((prevHours) => ({
      ...prevHours,
      [day]: {
        ...prevHours[day],
        endTime: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Initialize an array to store the selected hours
    const selectedHours = [];

    // Iterate through each day of the week
    daysOfWeek.forEach((day) => {
      // Check if the day is checked
      if (hours[day].checked) {
        // Add the selected hours for the checked day to the array
        selectedHours.push({
          day,
          startTime: hours[day].startTime,
          endTime: hours[day].endTime,
        });
      }
    });

    console.log(selectedHours);

    // Send the hours to an API or perform other actions here

    const dayAndTime = {
      avilability: selectedHours,
    };

    axios
      .post(
        "https://plan-picker-server-production-96ce.up.railway.app/availability",
        dayAndTime
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const timeOptions = [
    "12:00 AM",
    "12:30 AM",
    "1:00 AM",
    "1:30 AM",
    "2:00 AM",
    "2:30 AM",
    "3:00 AM",
    "3:30 AM",
    "4:00 AM",
    "4:30 AM",
    "5:00 AM",
    "5:30 AM",
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ];

  return (
    <form
      className="px-6 py-4 mx-auto border-2 rounded-lg sm:w-11/12 md:w-auto"
      onSubmit={handleSubmit}>
      <p className="mb-2 text-sm font-bold">Time zone</p>
      {daysOfWeek.map((day) => (
        <div
          className={`md:flex md:items-center py-3 ${
            hours[day].checked ? "border-2 rounded-xl" : ""
          }`}
          key={day}>
          <div className="flex items-center space-x-2 ms-2">
            <input
              className="text-teal-400 form-checkbox"
              type="checkbox"
              checked={hours[day].checked}
              onChange={() => handleHoursChange(day)}
            />
            <label className="text-gray-600 cursor-pointer">
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </label>
          </div>
          <div>
            {hours[day].checked ? (
              <div className="p-2">
                <div className="flex items-center space-x-6">
                  <label className="text-teal-400">
                    Start Time:
                    <select
                      className="text-teal-600 form-select"
                      value={hours[day].startTime}
                      onChange={(e) =>
                        handleStartTimeChange(day, e.target.value)
                      }>
                      <option value="">Select a time</option>
                      {timeOptions.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="text-teal-400">
                    End Time:
                    <select
                      className="text-teal-600 form-select"
                      value={hours[day].endTime}
                      onChange={(e) =>
                        handleEndTimeChange(day, e.target.value)
                      }>
                      <option value="">Select a time</option>
                      {timeOptions.map((time, index) => (
                        <option key={index} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
            ) : (
              <p className="ml-6 text-gray-600 ">Unavailable</p>
            )}
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          className="px-4 py-2 text-white bg-teal-400 rounded-md"
          type="submit">
          Submit
        </button>
        <button
          className="px-4 py-2 text-white bg-red-400 rounded-md"
          type="reset">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default WeeklyHoursForm;

// import React, { useState } from "react";

// const WeeklyHoursForm = () => {
//   const daysOfWeek = [
//     "sunday",
//     "monday",
//     "tuesday",
//     "wednesday",
//     "thursday",
//     "friday",
//     "saturday",
//   ];

//   const [hours, setHours] = useState(
//     daysOfWeek.reduce((acc, day) => {
//       acc[day] = { checked: false, startTime: "", endTime: "" };
//       return acc;
//     }, {})
//   );

//   const handleHoursChange = (day) => {
//     setHours((prevHours) => ({
//       ...prevHours,
//       [day]: {
//         ...prevHours[day],
//         checked: !prevHours[day].checked,
//       },
//     }));
//   };

//   const handleStartTimeChange = (day, value) => {
//     setHours((prevHours) => ({
//       ...prevHours,
//       [day]: {
//         ...prevHours[day],
//         startTime: value,
//       },
//     }));
//   };

//   const handleEndTimeChange = (day, value) => {
//     setHours((prevHours) => ({
//       ...prevHours,
//       [day]: {
//         ...prevHours[day],
//         endTime: value,
//       },
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Initialize an array to store the selected hours
//     const selectedHours = [];

//     // Iterate through each day of the week
//     daysOfWeek.forEach((day) => {
//       // Check if the day is checked
//       if (hours[day].checked) {
//         // Add the selected hours for the checked day to the array
//         selectedHours.push({
//           day,
//           startTime: hours[day].startTime,
//           endTime: hours[day].endTime,
//         });
//       }
//     });

//     console.log(selectedHours);

//     // Send the hours to an API or perform other actions here
//   };

//   const timeOptions = [
//     "12:00 AM",
//     "12:30 AM",
//     "1:00 AM",
//     "1:30 AM",
//     "2:00 AM",
//     "2:30 AM",
//     "3:00 AM",
//     "3:30 AM",
//     "4:00 AM",
//     "4:30 AM",
//     "5:00 AM",
//     "5:30 AM",
//     "6:00 AM",
//     "6:30 AM",
//     "7:00 AM",
//     "7:30 AM",
//     "8:00 AM",
//     "8:30 AM",
//     "9:00 AM",
//     "9:30 AM",
//     "10:00 AM",
//     "10:30 AM",
//     "11:00 AM",
//     "11:30 AM",
//     "12:00 PM",
//     "12:30 PM",
//     "1:00 PM",
//     "1:30 PM",
//     "2:00 PM",
//     "2:30 PM",
//     "3:00 PM",
//     "3:30 PM",
//     "4:00 PM",
//     "4:30 PM",
//     "5:00 PM",
//     "5:30 PM",
//     "6:00 PM",
//     "6:30 PM",
//     "7:00 PM",
//     "7:30 PM",
//     "8:00 PM",
//     "8:30 PM",
//     "9:00 PM",
//     "9:30 PM",
//     "10:00 PM",
//     "10:30 PM",
//     "11:00 PM",
//     "11:30 PM",
//   ];

//   return (
//     <form
//       className="w-full px-6 py-4 mx-auto border-2 rounded-lg md:w-auto md:max-w-md"
//       onSubmit={handleSubmit}>
//       <p className="mb-2 text-sm font-bold">Time zone</p>
//       {daysOfWeek.map((day) => (
//         <div
//           className={`md:flex md:items-center py-3 ${
//             hours[day].checked ? "border-2 rounded-xl" : ""
//           }`}
//           key={day}>
//           <div className="flex items-center space-x-2 md:space-x-4">
//             <input
//               className="text-teal-400 form-checkbox"
//               type="checkbox"
//               checked={hours[day].checked}
//               onChange={() => handleHoursChange(day)}
//             />
//             <label className="text-gray-600 cursor-pointer">
//               {day.charAt(0).toUpperCase() + day.slice(1)}
//             </label>
//           </div>
//           <div>
//             {hours[day].checked ? (
//               <div className="p-2">
//                 <div className="flex flex-col items-center space-y-2 md:flex-row md:space-x-4 md:space-y-0">
//                   <label className="text-teal-400">
//                     Start Time:
//                     <select
//                       className="text-teal-600 form-select"
//                       value={hours[day].startTime}
//                       onChange={(e) =>
//                         handleStartTimeChange(day, e.target.value)
//                       }>
//                       <option value="">Select a time</option>
//                       {timeOptions.map((time, index) => (
//                         <option key={index} value={time}>
//                           {time}
//                         </option>
//                       ))}
//                     </select>
//                   </label>
//                   <label className="text-teal-400">
//                     End Time:
//                     <select
//                       className="text-teal-600 form-select"
//                       value={hours[day].endTime}
//                       onChange={(e) =>
//                         handleEndTimeChange(day, e.target.value)
//                       }>
//                       <option value="">Select a time</option>
//                       {timeOptions.map((time, index) => (
//                         <option key={index} value={time}>
//                           {time}
//                         </option>
//                       ))}
//                     </select>
//                   </label>
//                 </div>
//               </div>
//             ) : (
//               <p className="ml-2 text-gray-600 md:ml-6 ">Unavailable</p>
//             )}
//           </div>
//         </div>
//       ))}
//       <div className="flex flex-col justify-center mt-4 space-y-2 md:flex-row md:space-y-0 md:space-x-4">
//         <button
//           className="w-full px-4 py-2 text-white bg-teal-400 rounded-md md:w-auto"
//           type="submit">
//           Submit
//         </button>
//         <button
//           className="w-full px-4 py-2 mt-2 text-white bg-red-400 rounded-md md:w-auto md:mt-0"
//           type="reset">
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// };

// export default WeeklyHoursForm;
