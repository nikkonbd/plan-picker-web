import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const CreateEventButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);

    if (option.name === "One-on-One") {
      navigate("/dashboard/event_type/one-on-one-form");
    } else if (option.name === "Group") {
      navigate("/dashboard/event_type/group-form");
    } else if (option.name === "Collective") {
      navigate("/dashboard/event_type/collective-form");
    }
  };

  return (
    <div className="relative">
      <div className="">
        <Link>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-[#5EBEC4] border border-transparent rounded-md shadow-sm group hover:bg-[#42a6ad] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={toggleDropdown}>
            <FaPlus className="mr-2"></FaPlus>
            <span>Create Event</span>
          </button>
        </Link>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 w-[100%] md:w-[400px]">
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu">
            <button
              onClick={() =>
                handleOptionSelect({
                  name: "One-on-One",
                  icon: "📅",
                  title: "One host with one invitee",
                  description: "Create a new event on the calendar.",
                })
              }
              className="block w-full px-4 py-3 text-sm text-left text-gray-700 hover:bg-gray-100"
              role="menuitem">
              <div className="flex items-end">
                <span className="text-lg h-[120px] w-[120px] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    width=""
                    height=""
                    viewBox="0 0 250.000000 250.000000"
                    preserveAspectRatio="xMidYMid meet">
                    <g
                      transform="translate(0.000000,250.000000) scale(0.100000,-0.100000)"
                      fill="#009688"
                      stroke="none">
                      <path d="M688 1474 c-77 -41 -75 -169 2 -209 84 -43 180 13 180 105 0 92 -99 149 -182 104z" />
                      <path d="M1688 1474 c-77 -41 -75 -169 2 -209 60 -31 137 -10 165 45 57 110 -58 223 -167 164z m123 -43 c20 -20 29 -39 29 -61 0 -43 -47 -90 -90 -90 -43 0 -90 47 -90 90 0 22 9 41 29 61 20 20 39 29 61 29 22 0 41 -9 61 -29z" />
                      <path d="M1336 1382 c-3 -5 17 -31 45 -58 l50 -49 -208 -5 c-176 -4 -208 -7 -208 -20 0 -13 31 -15 209 -18 l210 -2 -53 -54 c-35 -35 -49 -56 -41 -61 12 -8 147 111 149 132 1 11 -121 134 -139 141 -4 2 -11 -1 -14 -6z" />
                      <path d="M644 1181 c-51 -31 -83 -128 -52 -159 17 -17 299 -17 316 0 31 31 -1 128 -52 159 -23 14 -50 19 -106 19 -56 0 -83 -5 -106 -19z" />
                      <path d="M1644 1181 c-51 -31 -83 -128 -52 -159 17 -17 299 -17 316 0 31 31 -1 128 -52 159 -23 14 -50 19 -106 19 -56 0 -83 -5 -106 -19z m206 -38 c20 -18 33 -41 37 -65 l6 -38 -143 0 -143 0 6 38 c4 24 17 47 37 65 27 24 38 27 100 27 62 0 73 -3 100 -27z" />
                    </g>
                  </svg>
                </span>
                <div className="ml-2">
                  <span className="text-lg font-bold text-black">
                    One-on-One
                  </span>
                  <div className="flex flex-col">
                    <span className="text-base">
                      <b>One host</b> with <b>one invitee</b>
                    </span>
                    <span className="text-base-700 gray-500">
                      Good for: 1:1 interview, chats, etc.
                    </span>
                  </div>
                </div>
              </div>
            </button>
            {/* ... more option buttons ... */}
            {/* <button
              disabled
              onClick={() =>
                handleOptionSelect({
                  name: "Group",
                  icon: "📅",
                  title: "One host with one invitee",
                  description: "Create a new event on the calendar.",
                })
              }
              className="block w-full px-4 py-3 text-sm text-left text-gray-700 hover:bg-gray-100"
              role="menuitem">
              <div className="flex items-start">
                <span className="text-lg">📅</span>
                <div className="ml-2">
                  <span className="text-lg font-bold text-black">Group</span>
                  <div className="flex flex-col">
                    <span className="text-base">
                      <b>One host</b> with <b>group of invitee</b>
                    </span>
                    <span className="text-base-700 gray-500">
                      Good for: webinars, online classes, etc.
                    </span>
                  </div>
                </div>
              </div>
            </button>
            <button
              disabled
              onClick={() =>
                handleOptionSelect({
                  name: "Collective",
                  icon: "📅",
                  title: "One host with one invitee",
                  description: "Create a new event on the calendar.",
                })
              }
              className="block w-full px-4 py-3 text-sm text-left text-gray-700 hover:bg-gray-100"
              role="menuitem">
              <div className="flex items-start">
                <span className="text-lg">📅</span>
                <div className="ml-2">
                  <span className="text-lg font-bold text-black">
                    Collective
                  </span>
                  <div className="flex flex-col">
                    <span className="text-base">
                      <b>More than one host</b> with <b>one invitee</b>
                    </span>
                    <span className="text-base-700 gray-500">
                      Good for: panel interview, group sales calls, etc.
                    </span>
                  </div>
                </div>
              </div>
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateEventButton;
