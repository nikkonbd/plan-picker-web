// import React, { useState } from "react";
// import { Calendar, momentLocalizer, Views } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import "react-big-calendar/lib/addons/dragAndDrop";
// import Modal from "react-modal"; // Import the modal library
// import EventModal from "./EventModal";


// const localizer = momentLocalizer(moment);

// const EventCalendar = ({ events }) => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

//   const handleSelectSlot = (slotInfo) => {
//     setSelectedDate(slotInfo.start); // Set the selected date
//     setIsModalOpen(true); // Open the modal
//   };

//   const closeModal = () => {
//     setSelectedDate(null); // Clear the selected date
//     setIsModalOpen(false); // Close the modal
//   };

//   // const customStyles = {
//   //   content: {
//   //     top: "50%",
//   //     left: "50%",
//   //     right: "auto",
//   //     bottom: "auto",
//   //     marginRight: "-50%",
//   //     transform: "translate(-50%, -50%)",
//   //     width: "350px",
//   //     height: "auto",
//   //     background: "red", // Set the background color to white
//   //     boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add a shadow for a card-like appearance
//   //     border: "1px solid #ccc", // Add a border for better visibility
//   //     overflow: "hidden",
//   //   },
//   // };


//   const customStyles = {
//     content: {
//       top: "50%",
//       left: "50%",
//       right: "auto",
//       bottom: "auto",
//       marginRight: "-50%",
//       transform: "translate(-50%, -50%)",
//       width: "350px",
//       maxHeight: "80%",
//       overflowY: "auto",
//       background: "white",
//       boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
//       border: "1px solid #ccc",
//       zIndex: 1000, // Set the desired z-index value
//     },
//   };



//   return (
//     <div className="md:max-w-6xl">
//       <div className="-z-10">
//         <Calendar
//           localizer={localizer}
//           selectable="ignoreEvents" // Prevent selecting events
//           onSelectSlot={handleSelectSlot} // Handle slot selection
//           events={events}
//           defaultView={Views.MONTH}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: "500px", overflow: "hidden", zIndex: "-10" }}
//         />
//         {selectedDate && (
//           <div>
//             <h3>Selected Date:</h3>
//             <p>{moment(selectedDate).format("YYYY-MM-DD")}</p>
//           </div>
//         )}
//       </div>
//       <div className="z-50">
//         <Modal
//           isOpen={isModalOpen}
//           onRequestClose={closeModal}
//           contentLabel="Selected Date Modal"
//           style={customStyles}>
//           <div className="z-50">
//             <h2>Form</h2>
//             {selectedDate && (
//               <p>Selected Date: {moment(selectedDate).format("YYYY-MM-DD")}</p>
//             )}
//             <EventModal></EventModal>
//             <button className="mt-4" onClick={closeModal}>
//               Cancel
//             </button>
//           </div>
//         </Modal>
//       </div>

//     </div>
//   );
// };

// export default EventCalendar;




//0-1

// import React, { useState } from 'react';

// const CustomCalendar = () => {
//   const currentDate = new Date();
//   const [selectedDate, setSelectedDate] = useState(currentDate);
//   const [events, setEvents] = useState([]);

//   const renderCalendarDays = () => {
//     const daysInMonth = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth() + 1,
//       0
//     ).getDate();

//     const days = [];
//     for (let day = 1; day <= daysInMonth; day++) {
//       days.push(
//         <div
//           key={day}
//           className={`cursor-pointer p-2 border border-gray-300 ${
//             day === selectedDate.getDate()
//               ? 'bg-blue-500 text-white'
//               : 'hover:bg-gray-100'
//           }`}
//           onClick={() => handleDateClick(day)}
//         >
//           {day}
//         </div>
//       );
//     }

//     return days;
//   };

//   const handleDateClick = (day) => {
//     const newSelectedDate = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       day
//     );
//     setSelectedDate(newSelectedDate);
//   };

//   const getMonthYearString = () => {
//     const options = { year: 'numeric', month: 'long' };
//     return currentDate.toLocaleDateString(undefined, options);
//   };

//   const handlePrevMonth = () => {
//     const prevMonth = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth() - 1
//     );
//     currentDate.setMonth(currentDate.getMonth() - 1);
//     setSelectedDate(prevMonth);
//   };

//   const handleNextMonth = () => {
//     const nextMonth = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth() + 1
//     );
//     currentDate.setMonth(currentDate.getMonth() + 1);
//     setSelectedDate(nextMonth);
//   };

//   return (
//     <div className="p-4 custom-calendar">
//       <div className="mb-4 calendar-header">
//         <button
//           className="px-2 py-1 border rounded-lg"
//           onClick={handlePrevMonth}
//         >
//           Previous Month
//         </button>
//         <div className="text-xl font-semibold">{getMonthYearString()}</div>
//         <button
//           className="px-2 py-1 border rounded-lg"
//           onClick={handleNextMonth}
//         >
//           Next Month
//         </button>
//       </div>
//       <div className="grid grid-cols-7 gap-2">
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Sun
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Mon
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Tue
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Wed
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Thu
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Fri
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Sat
//         </div>
//         {renderCalendarDays()}
//       </div>
//       {/* Render events for selected date */}
//       {selectedDate.toDateString()}
//     </div>
//   );
// };

// export default CustomCalendar;



//0-2

// import React, { useState } from 'react';
// const CustomCalendar = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(currentDate);
//   const [events, setEvents] = useState([]);

//   const renderCalendarDays = () => {
//     const daysInMonth = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth() + 1,
//       0
//     ).getDate();

//     const days = [];
//     for (let day = 1; day <= daysInMonth; day++) {
//       days.push(
//         <div
//           key={day}
//           className={`cursor-pointer p-2 border border-gray-300 ${
//             day === selectedDate.getDate()
//               ? 'bg-blue-500 text-white'
//               : 'hover:bg-gray-100'
//           }`}
//           onClick={() => handleDateClick(day)}
//         >
//           {day}
//         </div>
//       );
//     }

//     return days;
//   };

//   const handleDateClick = (day) => {
//     const newSelectedDate = new Date(
//       currentDate.getFullYear(),
//       currentDate.getMonth(),
//       day
//     );
//     setSelectedDate(newSelectedDate);
//   };

//   const getMonthYearString = () => {
//     const options = { year: 'numeric', month: 'long' };
//     return currentDate.toLocaleDateString(undefined, options);
//   };

//   const handlePrevMonth = () => {
//     const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
//     setCurrentDate(newDate);
//   };

//   const handleNextMonth = () => {
//     const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
//     setCurrentDate(newDate);
//   };

//   return (
//     <div className="p-4 custom-calendar">
//       <div className="flex items-center justify-between mb-4 calendar-header">
//         <button
//           className="px-2 py-1 border rounded-lg"
//           onClick={handlePrevMonth}
//         >
//           Previous Month
//         </button>
//         <div className="text-xl font-semibold text-center">
//           {getMonthYearString()}
//         </div>
//         <button
//           className="px-2 py-1 border rounded-lg"
//           onClick={handleNextMonth}
//         >
//           Next Month
//         </button>
//       </div>
//       <div className="grid grid-cols-7 gap-2">
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Sun
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Mon
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Tue
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Wed
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Thu
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Fri
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Sat
//         </div>
//         {renderCalendarDays()}
//       </div>
//       {/* Render events for selected date */}
//       {selectedDate.toDateString()}
//     </div>
//   );
// };

// export default CustomCalendar;


//0-3

// import React, { useState } from "react";
// import MonthSelector from "./MonthSelector";
// import YearSelector from "./YearSelector";

// const CustomCalendar = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(currentDate);
//   const [showYearSelector, setShowYearSelector] = useState(false);
//   const [showMonthSelector, setShowMonthSelector] = useState(false);
//   const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
//   const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());

//   const renderCalendarDays = () => {
//     const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();

//     const days = [];
//     for (let day = 1; day <= daysInMonth; day++) {
//       days.push(
//         <div
//           key={day}
//           className={`cursor-pointer p-2 border border-gray-300 ${day === selectedDate.getDate()
//               ? "bg-blue-500 text-white"
//               : "hover:bg-gray-100"
//             }`}
//           onClick={() => handleDateClick(day)}>
//           {day}
//         </div>
//       );
//     }

//     return days;
//   };

//   const handleDateClick = (day) => {
//     const newSelectedDate = new Date(selectedYear, selectedMonth, day);
//     setSelectedDate(newSelectedDate);
//   };

//   const getMonthYearString = () => {
//     const options = { year: "numeric", month: "long" };
//     return currentDate.toLocaleDateString(undefined, options);
//   };

//   const handlePrevMonth = () => {
//     const newDate = new Date(selectedYear, selectedMonth - 1, 1);
//     setSelectedYear(newDate.getFullYear());
//     setSelectedMonth(newDate.getMonth());
//   };

//   const handleNextMonth = () => {
//     const newDate = new Date(selectedYear, selectedMonth + 1, 1);
//     setSelectedYear(newDate.getFullYear());
//     setSelectedMonth(newDate.getMonth());
//   };

//   const toggleYearSelector = () => {
//     setShowYearSelector(!showYearSelector);
//     setShowMonthSelector(false);
//   };

//   const toggleMonthSelector = () => {
//     setShowMonthSelector(!showMonthSelector);
//     setShowYearSelector(false);
//   };

//   const handleYearSelect = (year) => {
//     setSelectedYear(year);
//     toggleYearSelector();
//   };

//   const handleMonthSelect = (month) => {
//     setSelectedMonth(month);
//     toggleMonthSelector();
//   };

//   return (
//     <div className="p-4 custom-calendar">
//       <div className="flex items-center justify-between mb-4 calendar-header">
//         <button
//           className="px-2 py-1 border rounded-lg"
//           onClick={handlePrevMonth}>
//           Previous Month
//         </button>
//         <div className="text-xl font-semibold text-center">
//           <span className="cursor-pointer" onClick={toggleYearSelector}>
//             {selectedYear}
//           </span>{" "}
//           <span className="cursor-pointer" onClick={toggleMonthSelector}>
//             {getMonthYearString()}
//           </span>
//         </div>
//         <button
//           className="px-2 py-1 border rounded-lg"
//           onClick={handleNextMonth}>
//           Next Month
//         </button>
//       </div>
//       <div className="grid grid-cols-7 gap-2">
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Sun
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Mon
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Tue
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Wed
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Thu
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Fri
//         </div>
//         <div className="text-xs font-semibold text-center text-gray-500">
//           Sat
//         </div>
//         {renderCalendarDays()}
//       </div>
//       {/* Render events for selected date */}
//       {selectedDate.toDateString()}

//       {showYearSelector && (
//         <YearSelector selectedYear={selectedYear} onSelect={handleYearSelect} />
//       )}

//       {showMonthSelector && (
//         <MonthSelector
//           selectedMonth={selectedMonth}
//           onSelect={handleMonthSelect}
//         />
//       )}
//     </div>
//   );
// };

// // YearSelector and MonthSelector components can be implemented here.

// export default CustomCalendar;

import React, { useContext, useEffect, useState } from 'react';
import CalendarHeader from './Calendar/CalendarHeader';
import Side from './Calendar/Side';
import Month from './Calendar/Month';
import { getMonth } from './Calendar/utils';
import GlobalContext from './Calendar/Context/GlobalContext';
import EventModal from './Calendar/EventModal';




const EventCalendar = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (

    <React.Fragment>
      {showEventModal && <EventModal></EventModal>}

      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-col md:flex-row h-full">
          <div className=' w-full md:w-[33%]'>
            <Side />
          </div>

          <div className='md:w-[66%] w-full h-screen'>
            <Month month={currenMonth} />
          </div>
        </div>
      </div>
    </React.Fragment>


  );
};

export default EventCalendar;
