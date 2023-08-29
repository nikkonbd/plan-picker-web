import React from "react";
import book3 from "../../assets/Images/book3.png";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
  AOS.init();
  return (
    <div className="md:w-8/12 mx-auto">
      <div data-aos="fade-down" className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold pt-24">
          Scheduling automation happens before <br /> and after meetings
        </h2>
        <p className="pt-4 text-base md:text-lg">
          Take advantage of high buying intent right after checkout and create a{" "}
          <br />
          seamless buying experience for your customers.
        </p>
      </div>
      <div className="md:flex gap-6 justify-between items-center mt-10">
        <div>
          <div data-aos="fade-right" className="hover:bg-[#f8f7ff] p-4 rounded-xl">
            <h2 className="text-3xl font-semibold">
              Let people schedule meetings on your website
            </h2>
            <p className="text-xl">
              Book high-value meetings in seconds and turn <br /> scheduling
              into a competitive advantage
            </p>
          </div>
          <div data-aos="fade-down" className="hover:bg-[#f8f7ff] p-4 rounded-xl">
            <h2 className="text-3xl font-semibold">
              Let people schedule meetings on your website
            </h2>
            <p className="text-xl">
              Book high-value meetings in seconds and turn <br /> scheduling
              into a competitive advantage
            </p>
          </div>
          <div data-aos="fade-left" className="hover:bg-[#f8f7ff] p-4 rounded-xl">
            <h2 className="text-3xl font-semibold">
              Let people schedule meetings on your website
            </h2>
            <p className="text-xl">
              Book high-value meetings in seconds and turn <br /> scheduling
              into a competitive advantage
            </p>
          </div>
        </div>
        <div data-aos="fade-left">
          <img className="rounded-xl" src={book3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
