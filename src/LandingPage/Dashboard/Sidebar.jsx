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
        aria-hidden="true"></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={` back flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 transition-all duration-200 ease-in-out  text-white ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}>
        <div className="bg-black/20 w-full h-full p-4 ">
          {/* Sidebar header */}
          <div className="flex justify-between pr-3 mb-10 sm:px-2">
            {/* Close button */}
            <button
              ref={trigger}
              className="lg:hidden text-slate-500 hover:text-slate-400 absolute top-5 left-5 z-50 bg-teal-500 rounded-full"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}>
              <span className="sr-only">Close sidebar</span>
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
              </svg>
            </button>
            <div className="relative h-24 md:h-28 flex justify-center w-full bg-[url('https://img.freepik.com/free-vector/geometric-science-education-background-vector-gradient-blue-digital-remix_53876-125993.jpg')] bg-cover mb-12 rounded-t-xl rounded-b-md">
              <div className="absolute top-11 w-full flex items-center flex-col md:top-8">
                <img
                  className="border-4 border-[#5EBEC4] mt-4 w-16 md:w-28 h-16 md:h-28 mx-2 rounded-full"
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
              {isAdmin ? (
                <>
                  <ul className="mt-3">
                    <li
                      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                        pathname.includes("inbox") && "bg-slate-900"
                      }`}>
                      <NavLink
                        to="/"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("inbox")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}>
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
                      }`}>
                      <NavLink
                        end
                        to="/dashboard/allusers"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("allusers")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}>
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
                      }`}>
                      <NavLink
                        end
                        to="/dashboard/analytics"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("analytics")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}>
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
                      }`}>
                      <NavLink
                        end
                        to="/dashboard/billings"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("billings")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}>
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
                  </ul>
                </>
              ) : (
                <>
                  <ul className="">
                    {/* Home */}
                    <li
                      className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${
                        pathname.includes("inbox") && "bg-slate-900"
                      }`}>
                      <NavLink
                        to="/"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("inbox")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}>
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
                      }`}>
                      <NavLink
                        to="/dashboard/Profile"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("Profile")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}>
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
                      activecondition={pathname.includes("settings")}>
                      {(handleClick, open) => {
                        return (
                          <React.Fragment>
                            <NavLink
                              to="/dashboard/schedule"
                              className={`block text-slate-200 truncate transition duration-150 ${
                                pathname.includes("schedule")
                                  ? "text-[#1debeb]"
                                  : "hover:text-[#1df0ff]"
                              }`}>
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
                      }`}>
                      <NavLink
                        end
                        to="/dashboard/mySchedule/"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("mySchedule")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}>
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
                      }`}>
                      <NavLink
                        end
                        to="/dashboard/availability"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("availability")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}>
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
                      }`}>
                      <NavLink
                        end
                        to="/dashboard/calendar"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("calendar")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}>
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
                      }`}>
                      <NavLink
                        end
                        to="/dashboard/AddReview"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("AddReview")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}>
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
                      }`}>
                      <NavLink
                        end
                        to="/dashboard/billing"
                        className={`block text-slate-200 truncate transition duration-150 ${
                          pathname.includes("billing")
                            ? "text-[#1debeb]"
                            : "hover:text-[#1df0ff]"
                        }`}>
                        <div className="flex items-center">
                          <FaAmazonPay className="w-6 h-6 shrink-0" />
                          <span className="ml-3 text-sm font-medium duration-200 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100">
                            Billing & Invoices
                          </span>
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Expand / collapse button */}
          <div className="justify-end hidden pt-3 mt-auto lg:inline-flex 2xl:hidden">
            <div className="px-3 py-2">
              <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
                <span className="sr-only">Expand / collapse sidebar</span>
                <svg
                  className="w-6 h-6 fill-current sidebar-expanded:rotate-180"
                  viewBox="0 0 24 24">
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
