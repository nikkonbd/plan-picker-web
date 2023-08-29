import { useCallback, useMemo, useState } from "react";
import { Calendar, momentLocalizer,  Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";


const localizer = momentLocalizer(moment);

const EventCalendar = ({ events }) => {
   const adjEvents = events.map((it, ind) => ({
     ...it,
     isResizable: ind % 2 === 0,
     isDraggable: ind % 2 === 0,
   }));


  const [selectedEvent, setSelectedEvent] = useState(null);
  // const [myEvents, setMyEvents] = useState(events)
  // Resize state
  const [myEvents, setMyEvents] = useState(adjEvents);
  const [resizable, setResizable] = useState(true);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
  };


  const moveEvent = useCallback(
    ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
      const { allDay } = event;
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true;
      }

      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end, allDay }];
      });
    },
    [setMyEvents]
  );


  const resizeEvent = useCallback(
    ({ event, start, end }) => {
      setMyEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end }];
      });
    },
    [setMyEvents]
  );



  // Resize function

   const eventPropGetter = useCallback(
     (event) => ({
       // add class if not allowing resizing at all, or if
       // allowing resizing, but not on a specific event
       ...((!resizable || !event.isResizable) && { className: "nonResizable" }),
     }),
     [resizable]
   );

   const toggleResizing = useCallback(() => setResizable((prev) => !prev), []);





  const { defaultDate } = useMemo(
    () => ({
      defaultDate: new Date(2015, 3, 13),
    }),
    []
  );

  const DnDCalendar = withDragAndDrop(Calendar);

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={resizable}
            onChange={toggleResizing}
          />
          Allow Event Resizing
        </label>
      </div>
      <DnDCalendar
        localizer={localizer}
        events={myEvents}
        defaultView={Views.MONTH}
        onEventDrop={moveEvent}
        onEventResize={resizeEvent}
        eventPropGetter={eventPropGetter}
        popup
        resizable={resizable}
        resizableAccessor={resizable ? "isResizable" : "fakeKey"}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
        style={{ height: "500px" }}
        // defaultDate={defaultDate}
        draggableAccessor="isDraggable"
      />
      {selectedEvent && (
        <div>
          <h3>{selectedEvent.title}</h3>
          <p>{selectedEvent.description}</p>
        </div>
      )}
    </div>
  );
};

export default EventCalendar;


