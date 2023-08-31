import React, { useEffect } from "react";
import book from "../../assets/Images/book1.jpg";
import book1 from "../../assets/Images/ww.png";
import book2 from "../../assets/Images/book2.png";
import { Button } from "@material-tailwind/react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner1 = () => {
  useEffect(() => {
    AOS.init();
  },[])
  return (
    <div className="px-4 md:px-0 md:w-8/12 mx-auto">
      <div data-aos="fade-up" className="text-center">
        <h2 className="text-3xl text-[#61677A] md:text-5xl font-semibold pt-24">
          <span className="text-[#5EBEC4]">We make scheduling for</span> <br /> you easier than ever
        </h2>
        <p className="pt-4 text-base md:text-lg text-[#61677A]">
          Take advantage of high buying intent right after checkout and create a{" "}
          <br />
          seamless buying experience for your customers.
        </p>
      </div>
      <div className="flex flex-col-reverse items-center justify-between gap-4 mt-12 md:flex lg:flex lg:flex-row md:flex-row">
        <div data-aos="fade-up-right">
          <div className="text-center md:text-start">
            <h2 className="text-4xl font-medium text-[#61677A]">
              Share your Plan <br /> availability with others
            </h2>
            <p className="py-4 text-[#61677A]">
              There are a few different ways to ask for availability. <br /> You
              can email potential attendees ahead of time, or reach <br /> out
              to them individually by phone or in person. Whichever <br /> method{" "}
               you choose, be sure to give people plenty of notice <br /> so they
              can adjust their schedules if need be.
            </p>
          </div>
          <a href="#" className="inline-block pt-6 pb-10 md:pt-0 md:pb-0">
            <Button
              variant="text"
              className="flex text-white items-center gap-2 bg-[#5EBEC4] hover:bg-[#42a6ad]">
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
        <div data-aos="fade-up-left">
          <img className="rounded-xl w-full h-full md:h-[340px] md:w-[500px]" src={book} alt="" />
        </div>
      </div>
      <div className="md:flex lg:flex  gap-4 justify-between items-center mt-12">
        <div data-aos="fade-up-right">
          <img className="rounded-xl w-full h-full md:h-[340px] md:w-[500px]" src={book1} alt="" />
        </div>
        <div data-aos="fade-up-left">
          <div className="text-center md:text-end pt-8 md:pt-0">
            <h2 className="text-4xl font-medium text-[#61677A]">Schedule as Team</h2>
            <p className="py-4 text-[#61677A]">
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
                className="flex text-white items-center gap-2 bg-[#5EBEC4] hover:bg-[#42a6ad]">
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
      <div className="md:flex flex flex-col-reverse lg:flex lg:flex-row md:flex-row gap-4 justify-between items-center mt-12">
        <div data-aos="fade-up-right">
          <div className="text-center md:text-start">
            <h2 className="text-4xl font-medium text-[#61677A]">
              Keep prospects engaged in <br /> between meetings
            </h2>
            <p className="py-4 text-[#61677A]">
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
              className="flex text-white items-center gap-2 bg-[#5EBEC4] hover:bg-[#42a6ad]">
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
        <div data-aos="fade-up-left">
          <img className="rounded-xl w-full h-full md:h-[400px] md:w-[600px]" src={book2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
