import time from "../../assets/time.jpg";
import planning from "../../assets/planning.jpg";
import plannedCalendar from "../../assets/people-planned-in-calendar.jpg";
import EfficientPlanning from "../../assets/Efficient Planning.jpg";
// import WeeklyHoursForm from "../../setMeeting/WeeklyHoursForm";
import AboutCard from "./AboutCard";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Demo from "./Demo";

const About = () => {
  const events = [
    {
      id: 1,
      title: "Meeting",
      start: new Date(2023, 7, 16, 10, 0),
      end: new Date(2023, 7, 16, 12, 0),
      description: "Discuss project updates.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>AboutUs || Plan Picker</title>
      </Helmet>
      <div className="max-w-[2520px] mx-auto lg:px-16 xl:px-28 md:px-10 px-4">
        <div className="mt-20">
          <div className="">
            <div className="relative text-[#61677A]">
              <div className="rounded-lg text-[#61677A]">
                {/* <div className="absolute inset-0 z-10 bg-black rounded-lg opacity-50"></div> */}

                {/* front text */}
                <div className="flex justify-center items-center flex-col">
                  <h1 className="text-2xl  md:text-4xl p-4 font-semibold text-[#61677A] mb-4 z-10 text-center">
                    What is a mission Plan Picker?
                  </h1>
                  <p className="text-center">
                    A mission statement is a simple statement about the goals,
                    values, and objectives of an organization. It helps a
                    company respond to change and make decisions that align with
                    its vision. A mission statement is a simple statement about
                    the goals, values, and objectives of an organization. It
                    helps a company respond to change and make decisions that
                    align with its vision. A mission statement is a simple
                    statement about the goals, values, and objectives of an
                    organization. It helps a company respond to change and make
                    decisions that align with its vision.
                  </p>

                  <div className="z-10 flex flex-col gap-3 mt-8 sm:flex-row">
                    <Link to="/about-explore">
                      <button className="bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md px-4 py-3 font-md shadow-md hover:shadow-lg">
                        Explore Features
                      </button>
                    </Link>
                    <button className="bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md px-4 py-3 font-md shadow-md hover:shadow-lg">
                      Get Started
                    </button>

                    <Demo></Demo>
                  </div>
                </div>
              </div>
            </div>

            {/* Revolutionize of Schedule */}
            <div className="py-[75px] md:py-[100px] flex flex-col md:flex-row gap-4">
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-semibold md:text-3xl">
                  Revolutionize Your Schedule
                </h1>
                <p className="mt-6 ">
                  Welcome to the future of scheduling! Experience the magic of
                  effortless appointment booking with our cutting-edge web
                  apps—CalendlyEvolved and Calminator. Gone are the days of
                  back-and-forth emails and clunky interfaces.
                </p>

                <div className="flex gap-6 mt-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#5EBEC4]">
                      100
                    </h2>
                    <p>Time-saving</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-[#5EBEC4]">
                      300
                    </h2>
                    <p>Satisfied Users</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-[#5EBEC4]">
                      24/7
                    </h2>
                    <p>Support</p>
                  </div>
                </div>
              </div>

              <img
                className="h-auto max-w-full mt-8 md:w-1/2 rounded-xl"
                src={plannedCalendar}
                alt=""
              />
            </div>

            {/* planning features */}
            <div className="gap-4 mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 rounded-xl bg-slate-300">
                <div className="p-4 text-center bg-[#f6f9fc] rounded-xl">
                  <div>
                    <img
                      className="rounded-2xl"
                      src={EfficientPlanning}
                      alt=""
                    />
                  </div>
                  <h1 className="mt-4 text-lg font-semibold">
                    Efficient Planning
                  </h1>
                  <p className="mb-2">Save hours weekly</p>
                </div>
              </div>

              <div className="p-4 text-center rounded-xl bg-slate-300">
                <div className="p-4 bg-[#f6f9fc] rounded-xl">
                  <img className="rounded-2xl" src={EfficientPlanning} alt="" />
                  <h1 className="mt-4 text-lg font-semibold">
                    Seamless Syncing
                  </h1>
                  <p className="mb-2">Never miss an event</p>
                </div>
              </div>

              <div className="p-4 text-center rounded-xl bg-slate-300">
                <div className="p-4 bg-[#f6f9fc] rounded-xl">
                  <img className="rounded-2xl" src={EfficientPlanning} alt="" />
                  <h1 className="mt-4 text-lg font-semibold">
                    Enhanced Productivity
                  </h1>
                  <p className="mb-2">Stay on top of tasks</p>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="py-[75px] md:pt-24 bg-[#f6f9fc] text-[#5EBEC4] mb-8 rounded-xl">
              <div className="flex flex-col gap-10 p-4 md:flex-row">
                <img
                  className="h-auto flex-col md:w-[500px] rounded-xl"
                  src={planning}
                  alt=""
                />
                <div className="flex flex-col justify-center">
                  <h1 className="text-2xl font-semibold text-[#61677A] md:text-3xl">
                    Scheduling Reinvented
                  </h1>
                  <p className="mt-3 text-base">
                    Tired of juggling your busy schedule and manually organizing
                    appointments? Look no further—our powerful schedule web app
                    is here to save the day! Designed to revolutionize the way
                    you manage your time, this app is an essential tool for
                    those on the go.
                  </p>
                  <p className="mt-4 text-base">
                    Sleek and user-friendly, our scheduler helps you arrange
                    meetings, prioritize tasks, and stay on top of your game.
                    Say goodbye to double bookings and hello to a stress-free
                    life as you master your schedule like a boss.
                  </p>
                  <p className="mt-4 text-base">
                    Compatible with your favorite calendars, our app syncs
                    effortlessly across all your devices, ensuring you’re always
                    up to date and in the know. Kiss chaos goodbye and embrace
                    organization with open arms—it’s time to level up your
                    scheduling game!
                  </p>
                </div>
              </div>
            </div>

            {/* people say about us */}
            <div className="py-16 text-center">
              <h2 className="text-2xl md:text-4xl font-bold text-[#5EBEC4]">
                Our Team Members
              </h2>
              <p>
                Introduce key team members, including founders, executives, and
                other <br className="hidden md:block" />
                individuals who play important roles in the company
              </p>
            </div>
            <div>
              <AboutCard></AboutCard>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
