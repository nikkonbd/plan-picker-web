import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Calendar = ({ year, month, setYear, setMonth }) => {
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handlePrevMonth = () => {
    setSelectedDay(null);
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    setSelectedDay(null);
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleMonthChange = (newMonth) => {
    setMonth(newMonth);
  };

  const renderEventsForDate = (date) => {
    const eventsForDate = events.filter(
      (event) =>
        event.date.getDate() === date &&
        event.date.getMonth() === month &&
        event.date.getFullYear() === year
    );

    return (
      <div className="event-list">
        {eventsForDate.map((event) => (
          <div key={event.id} className="event">
            {event.title}
          </div>
        ))}
      </div>
    );
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const updatedEvents = Array.from(events);
    const [reorderedEvent] = updatedEvents.splice(result.source.index, 1);
    updatedEvents.splice(result.destination.index, 0, reorderedEvent);

    setEvents(updatedEvents);
  };

  const getStartDay = () => {
    return new Date(year, month, 1).getDay();
  };

  const getDaysInMonth = () => {
    return new Date(year, month + 1, 0).getDate();
  };

  const [events, setEvents] = useState([
    { id: 1, title: "Meeting", date: new Date(year, month, 5) },
    { id: 2, title: "Birthday", date: new Date(year, month, 15) },
    // Add more events as needed
  ]);

  return (
    <div className="p-4 bg-white rounded shadow calendar">
      <div className="year-calendar">
        <h2 className="mb-4 text-lg font-semibold">
          {year}
        </h2>
        <div className="grid grid-cols-4 gap-1">
          {months.map((monthName, index) => (
            <button
              key={index}
              className={`month-button rounded p-1 cursor-pointer ${
                index === month ? "bg-blue-500 text-white" : ""
              }`}
              onClick={() => handleMonthChange(index)}
            >
              {monthName}
            </button>
          ))}
        </div>
      </div>
      <div className="month-calendar">
        <div className="flex justify-between mb-4">
          <button className="text-gray-500 hover:text-gray-700" onClick={handlePrevMonth}>
            Previous
          </button>
          <h2 className="text-lg font-semibold">
            {months[month]} {year}
          </h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={handleNextMonth}>
            Next
          </button>
        </div>
        <div className="flex text-center">
          {weekdays.map((weekday) => (
            <div key={weekday} className="flex-1 py-2 font-semibold">
              {weekday}
            </div>
          ))}
        </div>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="events" direction="vertical">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="grid grid-cols-7 gap-1"
              >
                {Array.from({ length: (getStartDay() + 6) % 7 }, (_, index) => (
                  <div key={index} className="empty"></div>
                ))}
                {Array.from({ length: getDaysInMonth() }, (_, index) => {
                  const day = index + 1;
                  const hasEvent = events.some(
                    (event) =>
                      event.date.getDate() === day &&
                      event.date.getMonth() === month &&
                      event.date.getFullYear() === year
                  );

                  return (
                    <Draggable key={index} draggableId={`event-${day}`} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          key={index + (getStartDay() + 6) % 7}
                          className={`day p-2 rounded cursor-pointer border ${
                            selectedDay === day ? "bg-blue-500 text-white" : ""
                          }`}
                          onClick={() => handleDayClick(day)}
                        >
                          {day}
                          {hasEvent && renderEventsForDate(day)}
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Calendar;

