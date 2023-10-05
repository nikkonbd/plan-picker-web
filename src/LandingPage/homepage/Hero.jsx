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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-2 justify-between items-center md:mt-20 mt-6">
        <div className="order-2">
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
              Make it easy to book meetings with you
            </h2>
            <p className="text-base pt-2 text-[#61677A]">
              Book more meetings with less effort by embedding Calendly anywhere
              on your website and adding available times to emails.
            </p>
          </div>
          <div
            data-aos="fade-left"
            className="hover:bg-[#f8f7ff] p-4 rounded-xl">
            <h2 className="text-2xl font-semibold text-[#42a6ad]">
              Customize exactly how and when you’re booked
            </h2>
            <p className="text-base pt-2 text-[#61677A]">
              Stay in control of your calendar with granular availability tools,
              scheduling rules, buffers, and more.
            </p>
          </div>
        </div>
        <div data-aos="fade-left">
          <img
            className="rounded-xl w-full h-full md:h-[400px] lg:w-full"
            src={book3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
