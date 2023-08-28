import React from "react";
import book from "../../assets/Images/book1.jpg";
import book1 from "../../assets/Images/ww.png";
import book2 from "../../assets/Images/book2.png";
import { Button } from "@material-tailwind/react";

const Banner1 = () => {
  return (
    <div className="px-4 mx-auto md:px-0 md:max-w-6xl lg:max-w-7xl">
      <div className="text-center">
        <h2 className="pt-24 text-3xl font-semibold md:text-5xl">
          We make scheduling for <br /> you easier than ever
        </h2>
        <p className="pt-4 text-base md:text-lg">
          Take advantage of high buying intent right after checkout and create a{" "}
          <br />
          seamless buying experience for your customers.
        </p>
      </div>
      <div className="flex flex-col-reverse items-center justify-between gap-4 mt-12 md:flex lg:flex lg:flex-row md:flex-row">
        <div data-aos="fade-up-right">
          <div className="text-center md:text-start">
            <h2 className="text-4xl font-medium">
              Share your Plan <br /> availability with others
            </h2>
            <p className="py-4">
              There are a few different ways to ask for <br /> availability. You
              can email potential attendees ahead of time, or reach <br /> out
              to them individually by phone or in person. Whichever method{" "}
              <br /> you choose, be sure to give people plenty of notice so they
              can adjust their <br /> schedules if need be.
            </p>
          </div>
          <a href="#" className="inline-block pt-6 pb-10 md:pt-0 md:pb-0">
            <Button
              variant="text"
              className="flex items-center gap-2 bg-[#ffefe7]">
              Learn More
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
        <div  data-aos="fade-up-left">
          <img className="rounded-xl" src={book} alt="" />
        </div>
      </div>
      <div className="items-center justify-between gap-4 mt-12 md:flex lg:flex">
        <div>
          <img className="rounded-xl w-full md:w-[620px]" src={book1} alt="" />
        </div>
        <div>
          <div className="pt-8 text-center md:text-end md:pt-0">
            <h2 className="text-4xl font-medium">Schedule as Team</h2>
            <p className="py-4">
              There are a few different ways to ask for availability. <br />
              You can email potential attendees ahead of time, or reach <br />{" "}
              out to them individually by phone or in person. Whichever method{" "}
              <br /> you choose, be sure to give people plenty of notice so they
              can adjust their <br /> schedules if need be.
            </p>
          </div>
          <div className="flex justify-end">
            <a href="#" className="flex items-end pt-6 pb-10 md:pt-0 md:pb-0">
              <Button
                variant="text"
                className="flex items-center gap-2 bg-[#ffefe7]">
                Learn More
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
      </div>
      <div className="flex flex-col-reverse items-center justify-between gap-4 mt-12 md:flex lg:flex lg:flex-row md:flex-row">
        <div>
          <div className="text-center md:text-start">
            <h2 className="text-4xl font-medium">
              Keep prospects engaged in <br /> between meetings
            </h2>
            <p className="py-4">
              There are a few different ways to ask for <br /> availability. You
              can email potential attendees ahead of time, or reach <br /> out
              to them individually by phone or in person. Whichever method{" "}
              <br /> you choose, be sure to give people plenty of notice so they
              can adjust their <br /> schedules if need be.
            </p>
          </div>
          <a href="#" className="inline-block pt-6 pb-10 md:pt-0 md:pb-0">
            <Button
              variant="text"
              className="flex items-center gap-2 bg-[#ffefe7]">
              Learn More
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
        <div>
          <img className="rounded-xl w-full md:w-[620px]" src={book2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
