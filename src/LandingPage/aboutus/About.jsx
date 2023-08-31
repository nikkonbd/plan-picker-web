import time from "../../assets/time.jpg";
import planning from "../../assets/planning.jpg";
import plannedCalendar from "../../assets/people-planned-in-calendar.jpg";
import EfficientPlanning from "../../assets/Efficient Planning.jpg";
import avatar from "../../assets/avatar.jpg";
import EventCalendar from "../../eventCalendar/EventCalendar";
import MyCalendar from "../../myCalendar/MyCalendar";
import SetMeeting from "../../setMeeting/SetMeeting";
import EventType from "../../myCalendar/eventType/EventType";
import WeeklyHoursForm from "../../setMeeting/WeeklyHoursForm";
import AboutCard from "./AboutCard";

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
    <div className="">
      <div className="mt-20">
        <div className="">
          <div className="relative text-[#61677A]">
            <div className="rounded-lg text-[#61677A]">
              {/* <div className="absolute inset-0 z-10 bg-black rounded-lg opacity-50"></div> */}

              {/* front text */}
              <div className="flex justify-center items-center flex-col  w-10/12 mx-auto">
                <h1 className="text-2xl  md:text-4xl border-2 p-4 border-[#5EBEC4] font-semibold text-[#61677A] mb-4 z-10 text-center">
                  What is a mission Plan Picker?
                </h1>
                <p className="text-center">
                  A mission statement is a simple statement about the goals,
                  values, and objectives of an organization. It helps a company
                  respond to change and make decisions that align with its
                  vision. A mission statement is a simple statement about the
                  goals, values, and objectives of an organization. It helps a
                  company respond to change and make decisions that align with
                  its vision. A mission statement is a simple statement about
                  the goals, values, and objectives of an organization. It helps
                  a company respond to change and make decisions that align with
                  its vision.
                </p>

                <div className="z-10 flex flex-col gap-3 mt-8 sm:flex-row">
                  <button className="bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md px-4 py-3 font-md shadow-md hover:shadow-lg">
                    Explore Features
                  </button>
                  <button className="bg-[#5EBEC4] hover:bg-[#42a6ad] text-white rounded-md px-4 py-3 font-md shadow-md hover:shadow-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Revolutionize of Schedule */}
          <div className="py-[75px] md:py-[100px] flex flex-col md:flex-row gap-4 w-10/12 mx-auto p-4">
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
                  <h2 className="text-2xl font-semibold">100</h2>
                  <p>Time-saving</p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">300</h2>
                  <p>Satisfied Users</p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold">24/7</h2>
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

          {/*  */}
          {/* <div className="py-[75px] md:py-[150px] bg-[rgb(51,53,51)] text-white  w-full mb-8 rounded-xl ">
            <div className="flex flex-col gap-8 p-4 mx-auto md:flex-row-reverse max-w-7xl">
              <img
                className="h-auto max-w-full md:w-1/2 rounded-xl"
                src={time}
                alt=""
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-semibold md:text-3xl">
                  Time Management Superpowers at Your Fingertips
                </h1>
                <p className="mt-8 font-semibold">
                  With our exceptional scheduling technology, making plans,
                  booking appointments, and coordinating meetings will become as
                  smooth as silk. Gone are the days of clunky calendars and
                  double-booked dates.
                </p>
              </div>
            </div>
          </div> */}

          {/* planning features */}
          <div className="gap-4 mb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto p-4 md:p-0">
            <div className="p-4 rounded-xl bg-slate-300">
              <div className="p-4 bg-[#f6f9fc] rounded-xl">
                <div>
                  <img className="rounded-2xl" src={EfficientPlanning} alt="" />
                </div>
                <h1 className="my-3 text-lg font-semibold">
                  Efficient Planning
                </h1>
                <p className="mb-2">Save hours weekly</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-300">
              <div className="p-4 bg-[#f6f9fc] rounded-xl">
                <img className="rounded-2xl" src={EfficientPlanning} alt="" />
                <h1 className="my-3 text-lg font-semibold">Seamless Syncing</h1>
                <p className="mb-2">Never miss an event</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-300">
              <div className="p-4 bg-[#f6f9fc] rounded-xl">
                <img className="rounded-2xl" src={EfficientPlanning} alt="" />
                <h1 className="my-3 text-lg font-semibold">
                  Enhanced Productivity
                </h1>
                <p className="mb-2">Stay on top of tasks</p>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="py-[75px] md:pt-24  bg-[#f6f9fc] text-[#5EBEC4] mb-8 rounded-xl">
            <div className="flex flex-col gap-10 p-4 mx-auto md:flex-row w-10/12">
              <img
                className="h-auto max-w-full md:w-1/2 rounded-xl"
                src={planning}
                alt=""
              />
              <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-semibold text-[#61677A] md:text-3xl">
                  Scheduling Reinvented
                </h1>
                <p className="mt-3 text-base">
                  Tired of juggling your busy schedule and manually organizing
                  appointments? Look no further—our powerful schedule web app is
                  here to save the day! Designed to revolutionize the way you
                  manage your time, this app is an essential tool for those on
                  the go.
                </p>
                <p className="mt-4 text-base">
                  Sleek and user-friendly, our scheduler helps you arrange
                  meetings, prioritize tasks, and stay on top of your game. Say
                  goodbye to double bookings and hello to a stress-free life as
                  you master your schedule like a boss.
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

          {/* App Features */}
          {/* <div className="py-[75px] md:py-[150px]  bg-[#FDB833] mb-8 rounded-xl">
            <div className="p-4 mx-auto max-w-7xl">
              <h1 className="mb-8 text-2xl font-semibold md:text-3xl">
                App Features
              </h1>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="text-left">
                  <h1 className="text-lg">Timezone Sync</h1>
                  <p className="pt-2">
                    Automatically adjust to client's timezones.
                  </p>
                </div>

                <div>
                  <h1 className="text-lg">Smart Availability</h1>
                  <p className="pt-2">
                    Managing your availability like a charm.
                  </p>
                </div>

                <div>
                  <h1 className="text-lg">Integrations Galore</h1>
                  <p className="pt-2">
                    Sync effortlessly with popular platforms.
                  </p>
                </div>

                <div>
                  <h1 className="text-lg">Customization Kingdom</h1>
                  <p className="pt-2">Tailor every aspect to your brand.</p>
                </div>

                <div>
                  <h1 className="text-lg">Team Scheduling</h1>
                  <p className="pt-2">Harness the power of collaboration.</p>
                </div>

                <div>
                  <h1 className="text-lg">Analytics Insights</h1>
                  <p className="pt-2">Use data to supercharge your meetings.</p>
                </div>
              </div>
            </div>
          </div> */}

          {/* people say about us */}
          <div className="py-16 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">Our Team Members</h2>
            <p>
              Introduce key team members, including founders, executives, and
              other <br className="hidden md:block" />
              individuals who play important roles in the company
            </p>
          </div>
          <div className="gap-12 grid grid-cols-1 md:pb-20 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto p-4 md:p-0">
            {/* <div className="transition duration-300 ease-in-out bg-gray-300 shadow-md rounded-xl p-7 hover:bg-gray-200 hover:shadow-lg">
              <div className="mb-6">
                <img className="rounded-full w-14 h-14" src={avatar} alt="" />
              </div>
              <p className="mb-16">
                My calendar has never been this organized. I won’t go back!
              </p>
              <small>Linda Mathers</small>
            </div>

            <div className="bg-gray-300 rounded-xl p-7">
              <div className="mb-6">
                <img className="rounded-full w-14 h-14" src={avatar} alt="" />
              </div>
              <p className="mb-16">
                Truly game-changing. I’ve saved countless hours.
              </p>
              <small>Steve Wellington</small>
            </div>

            <div className="bg-gray-300 rounded-xl p-7">
              <div className="mb-6">
                <img className="rounded-full w-14 h-14" src={avatar} alt="" />
              </div>
              <p className="mb-16">
                Our entire team loves using Calminator. Highly recommended!
              </p>
              <small>TechOne Innovations</small>
            </div> */}
            <AboutCard></AboutCard>
            <AboutCard></AboutCard>
            <AboutCard></AboutCard>
            <AboutCard></AboutCard>
            <AboutCard></AboutCard>
            <AboutCard></AboutCard>
          </div>

          {/* questions */}
          {/* <div className="py-[75px] md:py-[150px] bg-[#333533] text-white rounded-xl">
            <div className="p-4 mx-auto max-w-7xl">
              <h1 className="mb-8 text-2xl font-semibold md:text-3xl">
                Got Questions?
              </h1>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:text-left">
                <div>
                  <h1 className="text-lg">Can I customize reminders?</h1>
                  <p className="pt-2">
                    Absolutely! Customize reminders to suit your preferences and
                    never miss a beat.
                  </p>
                </div>

                <div>
                  <h1 className="text-lg">Are integrations available?</h1>
                  <p className="pt-2">
                    Definitely! Our apps integrate seamlessly with popular
                    platforms like Google Calendar, Zoom, and more.
                  </p>
                </div>
                <div>
                  <h1 className="text-lg">How secure is my data?</h1>
                  <p className="pt-2">
                    We take security seriously. Your data is encrypted and
                    securely stored at all times.
                  </p>
                </div>
                <div>
                  <h1 className="text-lg">What about team pricing?</h1>
                  <p className="pt-2">
                    We offer competitive team pricing plans. Head to our pricing
                    page for details!
                  </p>
                </div>
              </div>
            </div>
          </div> */}

          {/*  */}
          {/* <div className="py-[75px] md:py-[150px]  bg-gray-100">
            <div className="p-4 mx-auto max-w-7xl">
              <h1 className="text-2xl font-semibold md:text-4xl">
                Ready to revolutionize your scheduling? Join us now!
              </h1>
              <div className="flex flex-col gap-3 mt-8 gap-x-3 sm:flex-row">
                <button className=" rounded-full font-semibold bg-[#FFEE32] px-4 py-2 hover:bg-yellow-400   shadow-md hover:shadow-lg">
                  Sign Up
                </button>
                <button className="px-4 py-2 font-semibold text-white bg-black rounded-full shadow-md hover:bg-gray-800 hover:shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
