// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const CreateEventButton = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//     // Perform any action based on the selected option here
//   };

//   return (
//     <div className="relative">
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
//         <div className="absolute right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 w-80">
//           <div
//             className="py-2"
//             role="menu"
//             aria-orientation="vertical"
//             aria-labelledby="options-menu">
//             <button
//               onClick={() =>
//                 handleOptionSelect({
//                   // name: "One-on-One",
//                   // icon: "📅",
//                   // title: "One host with one invitee",
//                   // description: "Create a new event on the calendar.",
//                 })
//               }
//               className="block w-full px-4 py-3 text-sm text-left text-gray-700 hover:bg-gray-100"
//               role="menuitem">
//               <span className="mr-2 text-lg">📅</span>
//               <div className="flex flex-col">
//                 <span className="text-lg font-bold text-black">One-on-One</span>
//                 <span className="text-base"><b>One host</b> with <b>one invitee</b></span>
//                 <span className="text-base-700 gray-500">
//                   Good for: 1:1 interview, chats, etc.
//                 </span>
//               </div>
//             </button>
//             <button
//               onClick={() =>
//                 handleOptionSelect({
//                   // name: "One-on-One",
//                   // icon: "📅",
//                   // title: "One host with one invitee",
//                   // description: "Create a new event on the calendar.",
//                 })
//               }
//               className="block w-full px-4 py-3 text-sm text-left text-gray-700 hover:bg-gray-100"
//               role="menuitem">
//               <span className="mr-2 text-lg">📅</span>
//               <div className="flex flex-col">
//                 <span className="text-lg font-bold text-black">Group</span>
//                 <span className="text-base"><b>One host</b> with <b>group of invitee</b> </span>
//                 <span className="text-base-700 gray-500">
//                   Good for: webinars, online classes, etc.
//                 </span>
//               </div>
//             </button>
//             <button
//               onClick={() =>
//                 handleOptionSelect({
//                   // name: "One-on-One",
//                   // icon: "📅",
//                   // title: "One host with one invitee",
//                   // description: "Create a new event on the calendar.",
//                 })
//               }
//               className="block w-full px-4 py-3 text-sm text-left text-gray-700 hover:bg-gray-100"
//               role="menuitem">
//               <span className="mr-2 text-lg">📅</span>
//               <div className="flex flex-col">
//                 <span className="text-lg font-bold text-black">Collective</span>
//                 <span className="text-base"><b>More than one host</b> with <b>one invitee</b></span>
//                 <span className="text-base-700 gray-500">
//                   Good for: panel interview, group sales calls, etc.
//                 </span>
//               </div>
//             </button>
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
        <div className="absolute right-0 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 w-80">
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu">
            <button
              onClick={() =>
                handleOptionSelect({
                  // ... your option data ...
                })
              }
              className="block w-full px-4 py-3 text-sm text-left text-gray-700 hover:bg-gray-100"
              role="menuitem">
              <div className="flex items-start">
                <span className="text-lg">📅</span>
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
            <button
              onClick={() =>
                handleOptionSelect({
                  // ... your option data ...
                })
              }
              className="block w-full px-4 py-3 text-sm text-left text-gray-700 hover:bg-gray-100"
              role="menuitem">
              <div className="flex items-start">
                <span className="text-lg">📅</span>
                <div className="ml-2">
                  <span className="text-lg font-bold text-black">
                    Group
                  </span>
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
              onClick={() =>
                handleOptionSelect({
                  // ... your option data ...
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
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateEventButton;
