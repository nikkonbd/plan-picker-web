import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateEventButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    {
      name: "Option 1",
      icon: "📅",
      description: "Create a new event on the calendar.",
    },
    {
      name: "Option 2",
      icon: "🎉",
      description: "Plan a celebration or special occasion.",
    },
    {
      name: "Option 3",
      icon: "🕒",
      description: "Schedule a reminder or appointment.",
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Perform any action based on the selected option here
  };

  return (
    <div className="relative ">
      {" "}
     
      {/* Change from text-left to text-right */}
      <div className="">
        <Link>
          <button
            type="button"
            className="group inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={toggleDropdown}>
            <span className="mr-2">➕</span> Add Event
          </button>
        </Link>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-60 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem">
                <span className="mr-2 text-lg">{option.icon}</span>
                <div className="flex flex-col">
                  <span className="font-medium">{option.name}</span>
                  <span className="text-xs text-gray-500">
                    {option.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateEventButton;
