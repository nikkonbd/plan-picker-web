import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for navigation

const EventNavbar = () => {
  return (
    <nav>
      <ul className="navbar gap-9">
        <li className="nav-item">
          <Link to="/event-types">Event Types</Link>
        </li>
        <li className="nav-item">
          <Link to="/scheduled-events">Scheduled Events</Link>
        </li>
      </ul>
    </nav>
  );
};

export default EventNavbar;
