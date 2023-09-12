import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { GiClockwork } from "react-icons/gi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="shadow-md text-[#61677A]">
        <div className="px-6 py-16 sm:px-10 md:px-24">
          <div className="lg:flex lg:items-start lg:gap-8">
            <div className="mt-8 grid grid-cols-2 gap-5 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
              <div className="col-span-2">
                <div>
                  <h2 className="text-2xl text-[#42a6ad] font-bold">
                    Easy Schedule
                  </h2>
                  <p className="mt-1 text-[#61677A]">
                    We take the work out of connecting with others so you can
                    accomplish more.
                  </p>
                </div>
              </div>
              <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
                <form className="w-full">
                  <div className="border border-gray-400 p-4 focus-within:ring sm:flex sm:items-center sm:gap-4">
                    <p>VIRTUAL EVENT: AUGUST 01-25</p>
                    <h2>
                      Growth Week: See how 20+ sales, marketing, & CS experts
                      win, keep, and grow revenue!
                    </h2>
                    <button className="mt-1 w-full bg-[#5EBEC4] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-[#42a6ad] sm:mt-0 sm:w-auto sm:shrink-0">
                      Explore Seat
                    </button>
                  </div>
                </form>
              </div>

              {/* <div className="col-span-2 sm:col-span-1">
                <p className="font-medium">Services</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      1on1 Coaching
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Company Review
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Accounts Review
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      HR Consulting
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      SEO Optimisation
                    </a>
                  </li>
                </ul>
              </div> */}

              <div className="col-span-2 sm:col-span-1">
                <p className="font-semibold text-[#42a6ad]">Company</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link to={"/"}>
                      <a href="" className="transition hover:opacity-75">
                        Home
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link to={"/about"}>
                      <a href="" className="transition hover:opacity-75">
                        About
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link to={"/about"}>
                      <a href="" className="transition hover:opacity-75">
                        Meet the Team
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-semibold text-[#42a6ad]">Helpful Links</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link to={"/contact"}>
                      <a href="#" className="transition hover:opacity-75">
                        Contact
                      </a>
                    </Link>
                  </li>

                  <li>
                    <a href="#faqHome" className="transition hover:opacity-75">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="font-semibold text-[#42a6ad]">Legal</p>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Accessibility
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Returns Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition hover:opacity-75">
                      Hiring Statistics
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-span-2 md:text-right">
                <div className="flex items-center md:justify-end gap-1">
                  <GiClockwork className="pr-2 text-5xl text-[#5EBEC4]"></GiClockwork>
                  <a className="text-base font-bold normal-case text-[#42a6ad] md:text-xl">
                    <Link to={"/"}>Plan Picker</Link>
                  </a>
                </div>
                <p>
                  Stay organized and manage your schedule effortlessly with Plan
                  Picker. Your time is precious, and we're here to make it
                  count. Explore powerful features, sync with ease, and stay on
                  top of your appointments.
                </p>
                <div className="flex items-center md:justify-end gap-4 mt-3">
                  <h3>Follow us on:</h3>
                  <a href="#">
                    <FaFacebook
                      size={25}
                      className="hover:text-light-blue-600"
                    ></FaFacebook>
                  </a>
                  <a href="#">
                    <FaInstagram
                      size={25}
                      className="hover:text-orange-900"
                    ></FaInstagram>
                  </a>
                  <a href="#">
                    <FaTwitter
                      size={25}
                      className="hover:text-light-blue-500"
                    ></FaTwitter>
                  </a>
                  <a href="#">
                    <FaGithub
                      size={25}
                      className="hover:text-gray-900"
                    ></FaGithub>
                  </a>
                  <a href="#">
                    <FaDribbble
                      size={25}
                      className="hover:text-pink-500"
                    ></FaDribbble>
                  </a>
                </div>
              </div>

              {/* <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-2xl transition hover:opacity-75"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebook></FaFacebook>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-2xl transition hover:opacity-75"
                  >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram></FaInstagram>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-2xl transition hover:opacity-75"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaTwitter></FaTwitter>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-2xl transition hover:opacity-75"
                  >
                    <span className="sr-only">GitHub</span>
                    <FaGithub></FaGithub>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-2xl transition hover:opacity-75"
                  >
                    <span className="sr-only">Dribbble</span>
                    <FaDribbble></FaDribbble>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>

          <div className="mt-8 border-t border-gray-300 pt-8">
            <div className="sm:flex sm:justify-between">
              <p className="text-xs">
                &copy; 2023. Plan Picker. All rights reserved.
              </p>

              <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
                <li>
                  <a href="#" className="transition hover:opacity-75">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:opacity-75">
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a href="#" className="transition hover:opacity-75">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
