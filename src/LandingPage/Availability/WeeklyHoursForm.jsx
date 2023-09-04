



import React, { useState } from 'react';

const WeeklyHoursForm = () => {
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  const [hours, setHours] = useState(
    daysOfWeek.reduce((acc, day) => {
      acc[day] = { checked: false, startTime: '', endTime: '' };
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
    // Send the hours to an API or perform other actions here
  };

  const timeOptions = [
    '12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM', '3:00 AM', '3:30 AM',
    '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM',
    '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM',
  ];

  return (
    <form className="px-6 py-4 mx-auto border-2 rounded-lg sm:w-11/12 md:w-auto" onSubmit={handleSubmit}>
      <p className="mb-2 text-sm font-bold">Time zone</p>
      {daysOfWeek.map((day) => (
        <div className={`md:flex md:items-center py-3 ${hours[day].checked ? 'border-2 rounded-xl' : ''}`} key={day}>
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
                      onChange={(e) => handleStartTimeChange(day, e.target.value)}
                    >
                      <option value="">Select a time</option>
                      {timeOptions.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </label>
                  <label className="text-teal-400">
                    End Time:
                    <select
                      className="text-teal-600 form-select"
                      value={hours[day].endTime}
                      onChange={(e) => handleEndTimeChange(day, e.target.value)}
                    >
                      <option value="">Select a time</option>
                      {timeOptions.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
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
        <button className="px-4 py-2 text-white bg-teal-400 rounded-md" type="submit">
          Submit
        </button>
        <button className="px-4 py-2 text-white bg-red-400 rounded-md" type="reset">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default WeeklyHoursForm;




// import React, { useState } from 'react';

// function TimeRangeSelector() {
//   const [startHour, setStartHour] = useState('00');
//   const [startMinute, setStartMinute] = useState('00');
//   const [startAmPm, setStartAmPm] = useState('AM');
//   const [endHour, setEndHour] = useState('00');
//   const [endMinute, setEndMinute] = useState('00');
//   const [endAmPm, setEndAmPm] = useState('AM');

//   const handleStartHourChange = (e) => {
//     setStartHour(e.target.value);
//   };

//   const handleStartMinuteChange = (e) => {
//     setStartMinute(e.target.value);
//   };

//   const handleStartAmPmChange = (e) => {
//     setStartAmPm(e.target.value);
//   };

//   const handleEndHourChange = (e) => {
//     setEndHour(e.target.value);
//   };

//   const handleEndMinuteChange = (e) => {
//     setEndMinute(e.target.value);
//   };

//   const handleEndAmPmChange = (e) => {
//     setEndAmPm(e.target.value);
//   };

//   return (
//     <div>
//       <h2>Time Range Selector</h2>
//       <div>
//         <label>Start Time:</label>
//         <select value={startHour} onChange={handleStartHourChange}>
//           {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map((hour) => (
//             <option key={hour} value={hour}>
//               {hour}
//             </option>
//           ))}
//         </select>
//         <select value={startMinute} onChange={handleStartMinuteChange}>
//           {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map((minute) => (
//             <option key={minute} value={minute}>
//               {minute}
//             </option>
//           ))}
//         </select>
//         <select value={startAmPm} onChange={handleStartAmPmChange}>
//           <option value="AM">AM</option>
//           <option value="PM">PM</option>
//         </select>
//       </div>
//       <div>
//         <label>End Time:</label>
//         <select value={endHour} onChange={handleEndHourChange}>
//           {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map((hour) => (
//             <option key={hour} value={hour}>
//               {hour}
//             </option>
//           ))}
//         </select>
//         <select value={endMinute} onChange={handleEndMinuteChange}>
//           {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map((minute) => (
//             <option key={minute} value={minute}>
//               {minute}
//             </option>
//           ))}
//         </select>
//         <select value={endAmPm} onChange={handleEndAmPmChange}>
//           <option value="AM">AM</option>
//           <option value="PM">PM</option>
//         </select>
//       </div>
//       <p>
//         Selected Time Range: {startHour}:{startMinute} {startAmPm} - {endHour}:{endMinute} {endAmPm}
//       </p>
//     </div>
//   );
// }

// export default TimeRangeSelector;



// import React, { useState } from 'react';

// function TimeRangeSelector() {
//   const [startHour, setStartHour] = useState('00');
//   const [startMinute, setStartMinute] = useState('00');
//   const [startAmPm, setStartAmPm] = useState('AM');
//   const [endHour, setEndHour] = useState('00');
//   const [endMinute, setEndMinute] = useState('00');
//   const [endAmPm, setEndAmPm] = useState('AM');

//   const handleStartHourChange = (e) => {
//     setStartHour(e.target.value);
//   };

//   const handleStartMinuteChange = (e) => {
//     setStartMinute(e.target.value);
//   };

//   const handleStartAmPmChange = (e) => {
//     setStartAmPm(e.target.value);
//   };

//   const handleEndHourChange = (e) => {
//     setEndHour(e.target.value);
//   };

//   const handleEndMinuteChange = (e) => {
//     setEndMinute(e.target.value);
//   };

//   const handleEndAmPmChange = (e) => {
//     setEndAmPm(e.target.value);
//   };

//   return (
//     <div className="container p-6 mx-auto mt-10 border rounded-lg shadow-lg">
//       <h2 className="mb-4 text-2xl font-semibold">Time Range Selector</h2>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Start Time:</label>
//         <div className="flex items-center">
//           <select
//             className="px-2 py-1 mr-2 border rounded"
//             value={startHour}
//             onChange={handleStartHourChange}
//           >
//            {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map((hour) => (
//             <option key={hour} value={hour}>
//               {hour}
//             </option>
//           ))}
//           </select>
//           <span className="mr-2">:</span>
//           <select
//             className="px-2 py-1 mr-2 border rounded"
//             value={startMinute}
//             onChange={handleStartMinuteChange}
//           >
//             {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map((minute) => (
//             <option key={minute} value={minute}>
//               {minute}
//             </option>
//           ))}
//           </select>
//           <select
//             className="px-4 py-1 border rounded"
//             value={startAmPm}
//             onChange={handleStartAmPmChange}
//           >
//             <option value="AM">AM</option>
//             <option value="PM">PM</option>
//           </select>
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">End Time:</label>
//         <div className="flex items-center">
//           <select
//             className="px-2 py-1 mr-2 border rounded"
//             value={endHour}
//             onChange={handleEndHourChange}
//           >
//             {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map((hour) => (
//             <option key={hour} value={hour}>
//               {hour}
//             </option>
//           ))}
//           </select>
//           <span className="mr-2">:</span>
//           <select
//             className="px-2 py-1 mr-2 border rounded"
//             value={endMinute}
//             onChange={handleEndMinuteChange}
//           >
//             {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map((minute) => (
//             <option key={minute} value={minute}>
//               {minute}
//             </option>
//           ))}
//           </select>
//           <select
//             className="px-4 py-1 border rounded"
//             value={endAmPm}
//             onChange={handleEndAmPmChange}
//           >
//             <option value="AM">AM</option>
//             <option value="PM">PM</option>
//           </select>
//         </div>
//       </div>
//       <p className="text-xl font-semibold">
//         Selected Time Range: {startHour}:{startMinute} {startAmPm} - {endHour}:{endMinute} {endAmPm}
//       </p>
//     </div>
//   );
// }

// export default TimeRangeSelector;




// import React, { useState } from 'react';
// import { format, addDays, isBefore } from 'date-fns';

// const DateRangePicker = () => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);

//   const handleStartDateChange = (date) => {
//     if (!endDate || isBefore(date, endDate)) {
//       setStartDate(date);
//     }
//   };

//   const handleEndDateChange = (date) => {
//     if (!startDate || isBefore(startDate, date)) {
//       setEndDate(date);
//     }
//   };

//   const resetDates = () => {
//     setStartDate(null);
//     setEndDate(null);
//   };

//   return (
//     <div>
//       <div>
//         <label>Start Date:</label>
//         <input
//           type="date"
//           value={startDate ? format(startDate, 'yyyy-MM-dd') : ''}
//           onChange={(e) => handleStartDateChange(new Date(e.target.value))}
//         />
//       </div>
//       <div>
//         <label>End Date:</label>
//         <input
//           type="date"
//           value={endDate ? format(endDate, 'yyyy-MM-dd') : ''}
//           onChange={(e) => handleEndDateChange(new Date(e.target.value))}
//         />
//       </div>
//       <button onClick={resetDates}>Reset Dates</button>
//       <div>
//         <p>Selected Date Range:</p>
//         {startDate && endDate ? (
//           <p>
//             {format(startDate, 'MMMM dd, yyyy')} - {format(endDate, 'MMMM dd, yyyy')}
//           </p>
//         ) : (
//           <p>Please select a date range.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DateRangePicker;

