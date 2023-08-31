import React from "react";
import { FiBell } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="p-4 bg-white shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center">
          <FiBell className="mr-3" />
          <img
            src="profile-image.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

