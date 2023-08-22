import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [open, setOpen] = useState(true);

  const isAdmin = false;

  const Users = [
    { title: "Dashboard", to: "/dashboard" , src: "Chart_fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User", gap: true },
    { title: "Schedule", src: "Calendar" },
    { title: "Setting", src: "Setting" },
  ];

  const Admins = [
    { title: "Dashboard",  src: "Chart_fill" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files", src: "Folder", gap: true },
    { title: "Setting", src: "Setting" },
  ];

  return (
    <div className="mx-4 md:mx-20">
      <div className="flex">
        <div
          className={`${
            open ? "w-72" : "w-20 "
          } bg-teal-500 h-screen p-5 pt-8 relative transition-all duration-300`}>
          <img
            src="./src/assets/control.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
            onClick={() => setOpen(!open)}
            alt="Control Icon"
          />
          <div className="flex gap-x-4 items-center">
            <img
              src="./src/assets/logo.png"
              className={`cursor-pointer transform transition-transform ${
                open && "rotate-360"
              }`}
              alt="Logo"
            />
            <h1
              className={`text-white font-medium text-xl transform transition-transform ${
                !open && "scale-0"
              }`}>
              Plan Picker
            </h1>
          </div>
          <ul className="pt-6">
            {isAdmin ? (
              <>
                {Admins.map((Admin, index) => (
                  <li
                    key={index}
                    className={`flex rounded-md p-2 cursor-pointer  text-gray-300 text-sm items-center space-x-4 
              ${Admin.gap ? "mt-9" : "mt-2"} ${index === 0 && ""} `}>
                    <Link to={Admin.title}>
                      <div className="flex items-center">
                        <img
                          className="me-2"
                          src={`./src/assets/${Admin.src}.png`}
                          alt={Admin.title}
                        />
                        <span
                          className={`${
                            !open && "hidden"
                          } transform transition-transform`}>
                          {Admin.title}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </>
            ) : (
              <>
                {Users.map((User, index) => (
                  <li
                    key={index}
                    className={`flex rounded-md p-2 cursor-pointer  text-gray-300 text-sm items-center space-x-4 
              ${User?.gap ? "mt-9" : "mt-2"} ${index === 0 && ""} `}>
                    <Link to={`${User?.to}`}>
                      <div className="flex items-center">
                        <img
                          className="me-2"
                          src={`./src/assets/${User.src}.png`}
                          alt={User.title}
                        />

                        <span
                          className={`${
                            !open && "hidden"
                          } transform transition-transform`}>
                          {User.title}
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
        {isAdmin ? (
          <div className="h-screen flex-1 p-7">
            <h1 className="text-2xl ">Admin Dashboard Coming Soooon..</h1>
          </div>
        ) : (
          <div className="h-screen flex-1 p-7">
            <h1 className="text-2xl ">
              <Outlet/>
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
