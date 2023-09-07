import React, { useState } from "react";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop";
import Modal from "react-modal"; // Import the modal library
import EventModal from "./EventModal";

const localizer = momentLocalizer(moment);

const EventCalendar = ({ events }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  const handleSelectSlot = (slotInfo) => {
    setSelectedDate(slotInfo.start); // Set the selected date
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setSelectedDate(null); // Clear the selected date
    setIsModalOpen(false); // Close the modal
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "350px",
      height: "auto",
      background: "", // Set the background color to white
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", // Add a shadow for a card-like appearance
      border: "1px solid #ccc", // Add a border for better visibility
      overflow: "hidden",
    },
  };

  return (
    <div className="md:max-w-6xl">
      <div className="-z-10">
        <Calendar
          localizer={localizer}
          selectable="ignoreEvents" // Prevent selecting events
          onSelectSlot={handleSelectSlot} // Handle slot selection
          events={events}
          defaultView={Views.MONTH}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "460px", overflow: "hidden" }}
        />
        {selectedDate && (
          <div>
            <h3>Selected Date:</h3>
            <p>{moment(selectedDate).format("YYYY-MM-DD")}</p>
          </div>
        )}
      </div>
      <div className="z-50">
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Selected Date Modal"
          style={customStyles}>
          <div className="">
            <h2>Form</h2>
            {selectedDate && (
              <p>Selected Date: {moment(selectedDate).format("YYYY-MM-DD")}</p>
            )}
            <EventModal></EventModal>
            <button className="mt-4" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default EventCalendar;
