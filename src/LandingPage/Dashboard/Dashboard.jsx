// import { useState } from "react";
// import { Link, Outlet } from "react-router-dom";

// const Dashboard = () => {
//   const [open, setOpen] = useState(true);

//   const isAdmin = false;

//   const Users = [
//     { title: "Dashboard", src: "Chart_fill" },
//     { title: "Availability", src: "Chat" },
//     { title: "Profile", src: "User", gap: true },
//     { title: "Schedule", src: "Calendar" },
//     { title: "Setting", src: "Setting" },
//   ];

//   const Admins = [
//     { title: "Dashboard", src: "Chart_fill" },
//     { title: "Search", src: "Search" },
//     { title: "Analytics", src: "Chart" },
//     { title: "Files", src: "Folder", gap: true },
//     { title: "Setting", src: "Setting" },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto">
//       <div className="flex">
//         <div
//           className={`${
//             open ? "w-60" : "w-20 "
//           } bg-teal-500 h-screen p-5 pt-8 relative transition-all duration-300`}>
//           <img
//             src="./src/assets/control.png"
//             className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
//            border-2 rounded-full ${!open && "rotate-180"}`}
//             onClick={() => setOpen(!open)}
//             alt="Control Icon"
//           />
//           <div className="flex items-center gap-x-4">
//             <img
//               src="./src/assets/logo.png"
//               className={`cursor-pointer transform transition-transform ${
//                 open && "rotate-360"
//               }`}
//               alt="Logo"
//             />
//             <h1
//               className={`text-white font-medium text-xl transform transition-transform ${
//                 !open && "scale-0"
//               }`}>
//               Plan Picker
//             </h1>
//           </div>
//           <ul className="pt-6">
//             {isAdmin ? (
//               <>
//                 {Admins.map((Admin, index) => (
//                   <li
//                     key={index}
//                     className={`flex rounded-md p-2 cursor-pointer  text-gray-300 text-sm items-center space-x-4
//               ${Admin.gap ? "mt-9" : "mt-2"} ${index === 0 && ""} `}>
//                     <Link to={Admin.title}>
//                       <div className="flex items-center">
//                         <img
//                           className="me-2"
//                           src={`./src/assets/${Admin.src}.png`}
//                           alt={Admin.title}
//                         />
//                         <span
//                           className={`${
//                             !open && "hidden"
//                           } transform transition-transform`}>
//                           {Admin.title}
//                         </span>
//                       </div>
//                     </Link>
//                   </li>
//                 ))}
//               </>
//             ) : (
//               <>
//                 {Users.map((User, index) => (
//                   <li
//                     key={index}
//                     className={`flex rounded-md p-2 cursor-pointer  text-gray-300 text-sm items-center space-x-4
//               ${User?.gap ? "mt-9" : "mt-2"} ${index === 0 && ""} `}>
//                     <Link to={User?.title}>
//                       <div className="flex items-center">
//                         <img
//                           className="me-2"
//                           src={`./src/assets/${User?.src}.png`}
//                           alt={User?.title}
//                         />
//                         <span
//                           className={`${
//                             !open && "hidden"
//                           } transform transition-transform`}>
//                           {User?.title}
//                         </span>
//                       </div>
//                     </Link>
//                   </li>
//                 ))}
//               </>
//             )}
//           </ul>
//         </div>
//         {isAdmin ? (
//           <div className="flex-1 h-screen p-7">
//             <h1 className="text-2xl ">Admin Dashboard Coming Soooon..</h1>
//           </div>
//         ) : (
//           <div className="flex-1 h-screen p-7">
//             <h1 className="text-2xl ">
//               <Outlet />
//             </h1>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="w-full px-4 py-8 mx-auto sm:px-6 lg:px-8 max-w-9xl">
            
            
            <Outlet/>
        
            {/* <div className="mb-8 sm:flex sm:justify-between sm:items-center">
         
              <div className="grid justify-start grid-flow-col gap-2 sm:auto-cols-max sm:justify-end"></div>
            </div> */}
            {/* Cards */}
            {/* <div className="grid grid-cols-12 gap-6"> */}
             
            {/* </div> */}
          </div>
        </main>

        {/* <Banner /> */}
      </div>
    </div>
  );
}

export default Dashboard;


