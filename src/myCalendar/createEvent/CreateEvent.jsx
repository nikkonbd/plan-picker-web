// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const CreateEventButton = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const options = [
//     {
//       name: "One-on-One",
//       icon: "📅",
//       title: "One host with one invitee",
//       description: "Create a new event on the calendar.",
//     },
//     {
//       name: "Option 2",
//       icon: "🎉",
//       title: "",
//       description: "Plan a celebration or special occasion.",
//     },
//     {
//       name: "Option 3",
//       icon: "🕒",
//       title: "",
//       description: "Schedule a reminder or appointment.",
//     },
//   ];

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//     // Perform any action based on the selected option here
//   };

//   return (
//     <div className="relative ">
//       {" "}
//       {/* Change from text-left to text-right */}
//       <div className="">
//         <Link>
//           <button
//             type="button"
//             className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             onClick={toggleDropdown}>
//             <span className="mr-2">➕</span> Add Event
//           </button>
//         </Link>
//       </div>
//       {isOpen && (
//         <div className="absolute right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg w-60 ring-1 ring-black ring-opacity-5">
//           <div
//             className="py-2"
//             role="menu"
//             aria-orientation="vertical"
//             aria-labelledby="options-menu">
//             {options.map((option, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleOptionSelect(option)}
//                 className="block w-full px-4 py-3 text-sm text-left text-gray-700 hover:bg-gray-100"
//                 role="menuitem">
//                 <span className="mr-2 text-lg">{option.icon}</span>
//                 <div className="flex flex-col">
//                   <span className="font-medium">{option.name}</span>
//                   <span>{option.title}</span>
//                   <span className="text-xs text-gray-500">
//                     {option.description}
//                   </span>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CreateEventButton;



import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateEventButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Perform any action based on the selected option here
  };

  return (
    <div className="relative">
      <div className="">
        <Link>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={toggleDropdown}>
            <span className="mr-2">➕</span> Add Event
          </button>
        </Link>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg w-60 ring-1 ring-black ring-opacity-5">
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu">
            <button
              onClick={() =>
                handleOptionSelect({
                  // name: "One-on-One",
                  // icon: "📅",
                  // title: "One host with one invitee",
                  // description: "Create a new event on the calendar.",
                })
              }
              className="block w-full px-4 py-3 text-sm text-left text-gray-700 hover:bg-gray-100"
              role="menuitem">
              <span className="mr-2 text-lg">📅</span>
              <div className="flex flex-col">
                <span className="font-medium">One-on-One</span>
                <span><b>One host</b> with one invitee</span>
                <span className="text-xs text-gray-500">
                  Create a new event on the calendar.
                </span>
              </div>
            </button>
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
              <span className="mr-2 text-lg">📅</span>
              <div className="flex flex-col">
                <span className="font-medium">One-on-One</span>
                <span>One host with one invitee</span>
                <span className="text-xs text-gray-500">
                  Create a new event on the calendar.
                </span>
              </div>
            </button>
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
              <span className="mr-2 text-lg">📅</span>
              <div className="flex flex-col">
                <span className="font-medium">One-on-One</span>
                <span>One host with one invitee</span>
                <span className="text-xs text-gray-500">
                  Create a new event on the calendar.
                </span>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateEventButton;
