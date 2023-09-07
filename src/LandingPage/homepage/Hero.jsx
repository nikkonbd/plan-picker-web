import React from "react";
import book3 from "../../assets/Images/book3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  AOS.init();
  return (
    <div className="">
      <div data-aos="fade-down" className="text-center">
        <h2 className="text-2xl md:text-4xl text-[#61677A] font-semibold md:pt-24">
          <span className="text-[#42a6ad]">
            Scheduling automation happens before
          </span>
          <br className="hidden md:block" /> and after meetings
        </h2>
        <p className="pt-2 md:pt-5 text-base text-[#61677A]">
          Take advantage of high buying intent right after checkout and create a{" "}
          <br className="hidden md:block" />
          seamless buying experience for your customers.
        </p>
      </div>
      <div className="flex gap-6 flex-grow justify-center flex-col md:flex-row items-center md:mt-20 mt-6">
        <div className="">
          <div
            data-aos="fade-right"
            className="hover:bg-[#f8f7ff] p-4 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#42a6ad]">
              Let people schedule meetings on your website
            </h2>
            <p className="text-base pt-2 text-[#61677A]">
              Book high-value meetings in seconds and turn{" "}
              <br className="hidden md:block" /> scheduling into a competitive
              advantage
            </p>
          </div>
          <div
            data-aos="fade-down"
            className="hover:bg-[#f8f7ff] p-4 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#42a6ad]">
              Let people schedule meetings on your website
            </h2>
            <p className="text-base pt-2 text-[#61677A]">
              Book high-value meetings in seconds and turn{" "}
              <br className="hidden md:block" /> scheduling into a competitive
              advantage
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="hover:bg-[#f8f7ff] p-4 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#42a6ad]">
              Let people schedule meetings on your website
            </h2>
            <p className="text-base pt-2 text-[#61677A]">
              Book high-value meetings in seconds and turn{" "}
              <br className="hidden md:block" /> scheduling into a competitive
              advantage
            </p>
          </div>
        </div>
        <div data-aos="fade-left">
          <img className="rounded-xl md:w-[580px]" src={book3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
