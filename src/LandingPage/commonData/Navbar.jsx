import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GiClockwork } from "react-icons/gi";
import Login from "../login/Login";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";
import ProfileMenu from "./menu/ProfileMenu";
import { Button } from "@material-tailwind/react";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // const handleLogOut = () => {
  //     logOut()
  //         .then(() => { })
  //         .catch(error => console.log(error))
  // }

  const navMenu = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/contact">Contact Us</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
    </>
  );

  const navItem = (
    <>
      <li className="hidden lg:block">
        <Link to="/">Home</Link>
      </li>
      <li className="hidden lg:block">
        <Link to="/services">Services</Link>
      </li>
      <li className="hidden lg:block">
        <Link to="/contact">Contact Us</Link>
      </li>
      <li className="hidden lg:block">
        <Link to="/about">About Us</Link>
      </li>
      <li className="hidden lg:block">
        <Link to="/blog">Blogs</Link>
      </li>
      <li className="hidden lg:block">
        <Link to="/dashboard/schedule">Dashboard</Link>
      </li>
      <>
        {user ? (
          <p className="flex justify-center gap-2 pl-2 items-">
            {user.photoURL ? (
              <ProfileMenu></ProfileMenu>
            ) : (
              // <img
              // className="w-10 h-10 mr-2 rounded-full lg:w-10 lg:h-10"
              // src={user.photoURL}
              // alt={user.displayName}
              // title={user.displayName}
              // />
              <>
                <ProfileMenu></ProfileMenu>
              </>
            )}
            {/* <Button className='bg-teal-500' onClick={handleLogOut}>Sign Out</Button> */}
            {/* <FaUserCircle title={user.displayName} className="text-4xl cursor-pointer"></FaUserCircle> */}
          </p>
        ) : (
          <>
            <Login></Login>
          </>
        )}
      </>

      {/* <div>
        {user ? (
          <div className="flex items-center">
            {user.imgUrl ? (
              <img
                className="w-4 h-4 mr-2 rounded-full lg:w-12 lg:h-12"
                src={user.imgUrl}
                alt={user.displayName}
                title={user.displayName}
              />
            ) : (
              <FaUserCircle
                className="w-4 h-4 mr-2 rounded-full lg:w-12 lg:h-12"
                title={user.displayName}
              />
            )}
            <button  className="btn btn-accent">
              LogOut
            </button>
          </div>
        ) : (
          <div>
            <div>
              <Login></Login>
            </div>
          </div>
        )}
      </div> */}
    </>
  );

  return (
    <div className="bg-gray-100">
      <div className="justify-between md:px-32 mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 space-y-2 shadow bg-base-100 rounded-box w-40">
              {navMenu}
            </ul>
          </div>
          <GiClockwork className="pr-2 text-5xl text-blue-500"></GiClockwork>
          <a className="text-base font-bold normal-case md:text-xl hover:text-gray-900">
            <Link to={"/"}>Plan Picker</Link>
          </a>
        </div>
        <div className="navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navItem}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
