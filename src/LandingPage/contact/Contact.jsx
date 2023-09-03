import { Button } from "@material-tailwind/react";
import React from "react";
import { FaConnectdevelop } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#5ebdc444] py-32 text-center px-4 md:px-0 text-[#61677A]">
        <h2 className="text-5xl text-[#5EBEC4] font-semibold ">
          How can we help?
        </h2>
        <p>Get in touch and let us know how we can help.</p>
      </div>
      <div className="grid grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-4 gap-6 md:w-10/12 mx-auto px-4 md:px-0">
        <div className="border-2 p-4 text-center shadow hover:shadow-lg mb-4 md:mb-0 mt-4 md:mt-0">
          <FaConnectdevelop className="text-4xl"></FaConnectdevelop>
          <h2 className="text-2xl font-semibold pt-4">Contact Sales</h2>
          <p className="py-2">
            Talk to our sales team about purchasing Calendly for your team
            request friendly
          </p>
          <a href="#" className="inline-block pt-6 pb-10 md:pt-0 md:pb-0 mt-4">
            <Button
              variant="text"
              className="flex text-white items-center gap-2 bg-[#5EBEC4] hover:bg-[#42a6ad]">
              Contact Sales
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
        <div className="border-2 p-4 text-center shadow mb-4 md:mb-0 hover:shadow-lg">
          <FaConnectdevelop className="text-4xl"></FaConnectdevelop>
          <h2 className="text-2xl font-semibold pt-4">Contact Support</h2>
          <p className="py-2">
            Submit a request to get help from our friendly support experts
            request friendly{" "}
          </p>
          <a href="#" className="inline-block pt-6 pb-10 md:pt-0 md:pb-0 mt-4">
            <Button
              variant="text"
              className="flex text-white items-center gap-2 bg-[#5EBEC4] hover:bg-[#42a6ad]">
              Contact Support
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
        <div className="border-2 p-4 text-center mb-4 md:mb-0 shadow hover:shadow-lg">
          <FaConnectdevelop className="text-4xl"></FaConnectdevelop>
          <h2 className="text-2xl font-semibold pt-4">Visit our Help Center</h2>
          <p className="py-2">
            Read helpful articles, watch tutorials, and get help with Calendly
            request friendly
          </p>
          <a href="#" className="inline-block pt-6 pb-10 md:pt-0 md:pb-0 mt-4">
            <Button
              variant="text"
              className="flex text-white items-center gap-2 bg-[#5EBEC4] hover:bg-[#42a6ad]">
              Visit Help Center
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
        <div className="border-2 p-4 text-center shadow hover:shadow-lg">
          <p>
            <FaConnectdevelop className="text-4xl"></FaConnectdevelop>
          </p>
          <h2 className="text-2xl font-semibold pt-4">Media & Press</h2>
          <p className="py-2">
            Download Calendly’s press kit, read press releases, and request
            interviews
          </p>
          <a href="#" className="inline-block pt-6 pb-10 md:pt-0 md:pb-0 mt-4">
            <Button
              variant="text"
              className="flex text-white items-center gap-2 bg-[#5EBEC4] hover:bg-[#42a6ad]">
              Visit Our NewsRoom
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
      <div className="text-[#61677A] text-center py-20 px-4 md:px-0">
        <h2 className="text-4xl font-semibold">More ways to reach us</h2>
        <p>
          Need some content about joining us in a partner or career adventure!
        </p>
      </div>
      <div className="md:w-10/12 mx-auto md:flex gap-6 px-4 md:px-0">
        <div className="border-2 p-4 shadow hover:shadow-lg">
          <FaConnectdevelop className="text-4xl"></FaConnectdevelop>
          <h2 className="text-2xl font-semibold pt-4">Join Our Team</h2>
          <p className="py-2">
            Interesting in applying for a position? View our Careers page for
            open positions and apply.
          </p>
          <a href="#" className="inline-block pt-6 pb-10 md:pt-0 md:pb-0 mt-4">
            <Button
              variant="text"
              className="flex text-white items-center gap-2 bg-[#5EBEC4] hover:bg-[#42a6ad]">
              Plan Picker Visit
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
        <div className="border-2 p-4 shadow hover:shadow-lg mt-4 md:mt-0">
          <FaConnectdevelop className="text-4xl"></FaConnectdevelop>
          <h2 className="text-2xl font-semibold pt-4">Become a Partner</h2>
          <p className="py-2">
            Interesting in applying for a position? View our Careers page for
            open positions and apply.
          </p>
          <a href="#" className="inline-block pt-6 pb-10 md:pt-0 md:pb-0 mt-4">
            <Button
              variant="text"
              className="flex text-white items-center gap-2 bg-[#5EBEC4] hover:bg-[#42a6ad]">
              Contact Sels
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
  );
};

export default Contact;
