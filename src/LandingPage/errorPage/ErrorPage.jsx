import React from "react";
import Lottie from "lottie-react";
import Error from "../../../public/404.json";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center flex-col items-center">
        <Lottie animationData={Error} loop={true} className="w-4/12" />
        <p className="text-[#fb4f72]">
          The page you are looking for is not available
        </p>
        <a href="#" className="inline-block pb-10 pt-10 md:pb-0">
          <Button
            variant="text"
            className="flex text-white items-center gap-2 bg-[#5EBEC4] hover:bg-[#42a6ad]">
            <Link to={"/"}>Home Page</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
