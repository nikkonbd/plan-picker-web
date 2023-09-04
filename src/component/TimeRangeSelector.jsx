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
//       <h2 className="mb-4 text-2xl font-semibold">Select Time Range </h2>
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



import React, { useState } from 'react';

function TimeRangeSelector() {
  const [startHour, setStartHour] = useState('00');
  const [startMinute, setStartMinute] = useState('00');
  const [startAmPm, setStartAmPm] = useState('AM');
  const [endHour, setEndHour] = useState('00');
  const [endMinute, setEndMinute] = useState('00');
  const [endAmPm, setEndAmPm] = useState('AM');

  const handleStartHourChange = (e) => {
    setStartHour(e.target.value);
  };

  const handleStartMinuteChange = (e) => {
    setStartMinute(e.target.value);
  };

  const handleStartAmPmChange = (e) => {
    setStartAmPm(e.target.value);
  };

  const handleEndHourChange = (e) => {
    setEndHour(e.target.value);
  };

  const handleEndMinuteChange = (e) => {
    setEndMinute(e.target.value);
  };

  const handleEndAmPmChange = (e) => {
    setEndAmPm(e.target.value);
  };

  return (
    <div className="container p-6 mx-auto mt-10 border rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold">Select Time Range </h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Start Time:</label>
        <div className="flex flex-col items-center md:flex-row">
          <select
            className="px-2 py-1 mr-2 border rounded"
            value={startHour}
            onChange={handleStartHourChange}
          >
            {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <span className="mr-2 md:hidden">:</span>
          <select
            className="px-2 py-1 mr-2 border rounded"
            value={startMinute}
            onChange={handleStartMinuteChange}
          >
            {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
          <select
            className="px-4 py-1 border rounded"
            value={startAmPm}
            onChange={handleStartAmPmChange}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">End Time:</label>
        <div className="flex flex-col items-center md:flex-row">
          <select
            className="px-2 py-1 mr-2 border rounded"
            value={endHour}
            onChange={handleEndHourChange}
          >
            {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <span className="mr-2 md:hidden">:</span>
          <select
            className="px-2 py-1 mr-2 border rounded"
            value={endMinute}
            onChange={handleEndMinuteChange}
          >
            {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map((minute) => (
              <option key={minute} value={minute}>
                {minute}
              </option>
            ))}
          </select>
          <select
            className="px-4 py-1 border rounded"
            value={endAmPm}
            onChange={handleEndAmPmChange}
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </div>
      </div>
      <p className="text-xl font-semibold">
        Selected Time Range: {startHour}:{startMinute} {startAmPm} - {endHour}:{endMinute} {endAmPm}
      </p>
    </div>
  );
}

export default TimeRangeSelector;
