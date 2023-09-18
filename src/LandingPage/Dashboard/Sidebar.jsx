import React, { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSchedule } from "react-icons/ai";
import { GoCodeReview } from "react-icons/go";

import SidebarLinkGroup from "./SidebarLinkGroup";
import { BsCheck2Square } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineHome } from "react-icons/hi";
import useAdmin from "../../hooks/useAdmin";
import { FaRegChartBar, FaAmazonPay, FaComments } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const { user } = useContext(AuthContext);
  // const isAdmin = true;
  const [isAdmin] = useAdmin();
  // console.log(isAdmin);

  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`back flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 transition-all duration-200 ease-in-out  text-white ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="bg-black/20 w-full h-full p-4 flex flex-col">
          {/* Sidebar header */}
          <div className="flex justify-between pr-3 mb-10 sm:px-2">
            {/* Close button */}
            <button
              ref={trigger}
              className="lg:hidden text-slate-500 hover:text-slate-400 absolute top-5 left-5 z-50 bg-teal-500 rounded-full"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
            >
              <span className="sr-only">Close sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
              </svg>
            </button>
            <div className="relative h-24 md:h-28 flex justify-center w-full bg-[url('https://img.freepik.com/free-vector/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993.jpg')] bg-cover mb-12 rounded-t-xl rounded-b-md">
              <div className="absolute top-11 w-full flex items-center flex-col md:top-8">
                <img
                  className="border-4 border-[#5EBEC4] mt-4 w-16 md:w-24 h-16 md:h-24 mx-2 rounded-full"
                  src={user.photoURL}
                  alt={user.displayName + " " + "image"}
                />
                <h2 className="text-xl font-semibold text-center backdrop-blur-sm">
                  {user.displayName}
                </h2>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            {/* Pages group */}
            <div>
              <ul className="mt-3">
                {isAdmin ? (
                  <>
                    <li
                      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                        pathname.includes("inbox") && "bg-slate-900"
                      }`}
                    >
                      <NavLink
                        to="/"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("inbox")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}
                      >
                        <div className="flex items-center">
                          <HiOutlineHome className="w-6 h-6 shrink-0" />
                          <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                            Home
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li
                      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                        pathname.includes("messages") && "bg-slate-900"
                      }`}
                    >
                      <NavLink
                        end
                        to="/dashboard/allusers"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("allusers")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center grow">
                            <BsCheck2Square className="w-6 h-6 shrink-0" />
                            <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                              All users
                            </span>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                    <li
                      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                        pathname.includes("messages") && "bg-slate-900"
                      }`}
                    >
                      <NavLink
                        end
                        to="/dashboard/analytics"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("analytics")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center grow">
                            <FaRegChartBar className="w-6 h-6 shrink-0" />
                            <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                              Analytics
                            </span>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                    <li
                      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                        pathname.includes("messages") && "bg-slate-900"
                      }`}
                    >
                      <NavLink
                        end
                        to="/dashboard/billings"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("billings")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center grow">
                            <FaAmazonPay className="w-6 h-6 shrink-0" />
                            <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                              Billing & Invoice
                            </span>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    {/* Home */}
                    <li
                      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                        pathname.includes("inbox") && "bg-slate-900"
                      }`}
                    >
                      <NavLink
                        to="/"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("inbox")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}
                      >
                        <div className="flex items-center">
                          <HiOutlineHome className="w-6 h-6 shrink-0" />
                          <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                            Home
                          </span>
                        </div>
                      </NavLink>
                    </li>

                    {/* Profile */}
                    <li
                      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                        pathname.includes("inbox") && "bg-slate-900"
                      }`}
                    >
                      <NavLink
                        to="/dashboard/Profile"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("Profile")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}
                      >
                        <div className="flex items-center">
                          <CgProfile className="w-6 h-6 shrink-0" />
                          <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                            My Profile
                          </span>
                        </div>
                      </NavLink>
                    </li>

                    {/* Schedule */}

                    <SidebarLinkGroup
                      activecondition={pathname.includes("settings")}
                    >
                      {(handleClick, open) => {
                        return (
                          <React.Fragment>
                            <NavLink
                              to="/dashboard/schedule"
                              className={`block text-slate-200 truncate transition duration-150 ${
                                pathname.includes("schedule")
                                  ? "text-[#1debeb]"
                                  : "hover:text-[#1df0ff]"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <AiOutlineSchedule className="w-6 h-6 shrink-0" />
                                  <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                                    Create Event
                                  </span>
                                </div>
                              </div>
                            </NavLink>
                          </React.Fragment>
                        );
                      }}
                    </SidebarLinkGroup>

                    {/* My Schedule */}
                    <li
                      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                        pathname.includes("messages") && "bg-slate-900"
                      }`}
                    >
                      <NavLink
                        end
                        to="/dashboard/mySchedule/"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("mySchedule")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center grow">
                            <BsCheck2Square className="w-6 h-6 shrink-0" />
                            <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                              My Schedule
                            </span>
                          </div>
                        </div>
                      </NavLink>
                    </li>
                    {/* Availablity */}
                    <li
                      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                        pathname.includes("inbox") && "bg-slate-900"
                      }`}
                    >
                      <NavLink
                        end
                        to="/dashboard/availability"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("availability")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}
                      >
                        <div className="flex items-center">
                          <MdOutlineEventAvailable className="w-6 h-6 shrink-0" />
                          <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                            Availability
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    {/* Calendar */}
                    <li
                      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                        pathname.includes("calendar") && "bg-slate-900"
                      }`}
                    >
                      <NavLink
                        end
                        to="/dashboard/calendar"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("calendar")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}
                      >
                        <div className="flex items-center">
                          <RxCalendar className="w-6 h-6 shrink-0" />
                          <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                            My Calendar
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    {/* Add Review */}
                    <li
                      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                        pathname.includes("campaigns") && "bg-slate-900"
                      }`}
                    >
                      <NavLink
                        end
                        to="/dashboard/AddReview"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("AddReview")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}
                      >
                        <div className="flex items-center">
                          <GoCodeReview className="w-6 h-6 shrink-0"></GoCodeReview>
                          <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                            Add Review
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    {/* Campaigns */}
                    <li
                      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                        pathname.includes("campaigns") && "bg-slate-900"
                      }`}
                    >
                      <NavLink
                        end
                        to="/dashboard/billing"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("billing")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}
                      >
                        <div className="flex items-center">
                          <FaAmazonPay className="w-6 h-6 shrink-0" />
                          <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                            Billing & Invoices
                          </span>
                        </div>
                      </NavLink>
                    </li>
                  </>
                )}
                <li></li>
              </ul>
            </div>
          </div>

          {/* Expand / collapse button */}
          <div className="justify-end pt-3 mt-auto ">
            <div className="px-3">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input
                  onChange={handleToggle}
                  type="checkbox"
                  className="text-2xl"
                  checked={theme === "light" ? false : true}
                />
                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            <div className="px-3 py-2 hidden lg:inline-flex 2xl:hidden">
              <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                <span className="sr-only">Expand / collapse sidebar</span>
                <svg
                  className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="text-slate-400"
                    d="M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z"
                  />
                  <path className="text-slate-600" d="M3 23H1V1h2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
