import React from "react";
import book3 from "../../assets/Images/book3.png";

const Hero = () => {
  return (
    <div className="md:w-10/12 mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold pt-24">
          Scheduling automation happens before <br /> and after meetings
        </h2>
        <p className="pt-4 px-6 md:px-0 text-base md:text-lg">
          Take advantage of high buying intent right after checkout and create a{" "}
          <br />
          seamless buying experience for your customers.
        </p>
      </div>
      <div className="md:flex gap-6 justify-between items-center mt-10">
        <div>
          <div className="hover:bg-[#f8f7ff] p-4 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Let people schedule meetings on your website
            </h2>
            <p className="text-xl">
              Book high-value meetings in seconds and turn <br /> scheduling
              into a competitive advantage
            </p>
          </div>
          <div className="hover:bg-[#f8f7ff] p-4 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Let people schedule meetings on your website
            </h2>
            <p className="text-xl">
              Book high-value meetings in seconds and turn <br /> scheduling
              into a competitive advantage
            </p>
          </div>
          <div className="hover:bg-[#f8f7ff] p-4 rounded-xl">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Let people schedule meetings on your website
            </h2>
            <p className="text-xl">
              Book high-value meetings in seconds and turn <br /> scheduling
              into a competitive advantage
            </p>
          </div>
        </div>
        <div>
          <img className="rounded-xl px-4 md:px-0" src={book3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
