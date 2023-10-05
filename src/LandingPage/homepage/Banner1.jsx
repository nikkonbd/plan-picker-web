import React, { useEffect } from "react";
import book from "../../assets/Images/book1.jpg";
import book1 from "../../assets/Images/ww.png";
import book2 from "../../assets/Images/book2.png";
import { Button } from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import banner from "../../../public/banner.json";
import banner1 from "../../../public/banner1.json";
import banner2 from "../../../public/banner2.json";

const Banner1 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <div data-aos="fade-up" className="text-center md:pb-8">
        <h2 className="text-2xl text-[#61677A] md:text-4xl font-semibold md:pt-24 pt-10">
          <span className="text-[#5EBEC4]">We make scheduling for</span>{" "}
          <br className="hidden md:block" /> you easier than ever
        </h2>
        <p className="pt-6 text-base text-[#61677A]">
          Take advantage of high buying intent right after checkout and create a{" "}
          <br className="hidden md:block" />
          seamless buying experience for your customers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between items-center gap-6">
        <div data-aos="fade-up-right" className="order-2 md:order-1">
          <div className="text-center md:text-start">
            <h2 className="text-2xl md:text-3xl pt-4 md:pt-0 font-medium flex flex-col justify-center text-[#61677A]">
              Share your Plan availability with others Meeting
            </h2>
            <p className="py-4  text-[#61677A]">
              If you want to meet with someone, proactively sharing your
              availability in an email helps you quickly get a meeting on the
              books without having to wait for them to suggest a time. It makes
              it less likely that meetings are offered for times when you're not
              available. And you can also avoid accidental double bookings by
              including your availability in an email message rather than
              waiting for someone to suggest a time.
            </p>
          </div>
          <Link
            to="/learn-availability"
            className="inline-block pt-6 pb-10 md:pt-0 md:pb-0">
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
          </Link>
        </div>
        <div
          data-aos="fade-up-left"
          className="bg-[#f1f1f1] rounded-md mt-10 md:mt-0 order-1 md:order-2">
          <Lottie
            animationData={banner}
            loop={true}
            className="lg:h-[400px] lg:w-full"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-between items-center md:mt-20">
        <div className="rounded-md" data-aos="fade-up-right">
          <Lottie
            animationData={banner1}
            loop={true}
            className="w-full h-full lg:h-[400px] lg:w-full"
          />
        </div>
        <div className="" data-aos="fade-up-left">
          <div className="text-center flex flex-col justify-center md:text-end pt-8 md:pt-0">
            <h2 className="text-2xl md:text-3xl font-medium text-[#61677A]">
              Tips for sharing meeting availability in an email
            </h2>
            <p className="py-4 text-base text-[#61677A]">
              Whether you want to meet your remote team members, get a
              one-on-one meeting with your newest employee, or hop on a
              discovery call with a potential client, you want to make the
              scheduling as simple as possible. Sending your availability in an
              email removes unnecessary back-and-forth in the scheduling
              process. You won’t have to wait for the other party to propose a
              suitable time. Likewise, you cross out the possibility of schedule
              conflicts.
            </p>
          </div>
          <div className="flex justify-end">
            <a href="#" className="flex items-end pt-6 pb-10 md:pt-0 md:pb-0">
              <Link to="/scheduleDetails">
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
              </Link>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 flex-col-reverse gap-6 lg:grid-cols-2 justify-between items-center md:mt-12">
        <div data-aos="fade-up-right" className="order-2 lg:order-1">
          <div className="flex flex-col justify-center text-center md:text-start">
            <h2 className="text-2xl md:text-3xl pt-4 md:pt-0 font-medium text-[#61677A]">
              Keep prospects engaged in between meetings
            </h2>
            <p className="py-4 flex-grow text-[#61677A]">
              When you ask for their opinion, don’t just ask for their opinion
              on your product. That’s stupid. Ask for their opinion on something
              bigger within the industry, within their supply chain, within the
              whole scope of things. In fact, when you start placing value in
              what they’re sharing with you, it’s amazing how much more
              information they’re going to share with you.
            </p>
          </div>
          <Link
            to="/engagedDetails"
            className="inline-block pt-6 pb-10 md:pt-0 md:pb-0">
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
          </Link>
        </div>
        <div
          data-aos="fade-up-left"
          className="bg-[#f1f1f1] rounded-md order-1 md:order-2">
          <Lottie
            animationData={banner2}
            loop={true}
            className="w-full lg:h-[400px] lg:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner1;
