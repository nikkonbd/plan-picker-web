import React from "react";

const ScheduleDetails = () => {
  return (
    <div className="">
      <div
        className="hero h-[300px] mb-16"
        style={{
          backgroundImage:
            "url(https://isaless.wpenginepowered.com/wp-content/uploads/2021/07/ISS_Blog-Feature-Channel-Partner_v1_07-13-21.png)",
        }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold text-[#5EBEC4]">
              Schedule as Team availability <br /> with others Team!
            </h2>
            <p className="pt-4">
              There are a few different ways to ask for availability. You can
              email potential attendees ahead of time, or reach out to them
              individually by phone or in person. Whichever method you choose,
              be sure to give people plenty of notice so they can adjust their
              schedules if need be.
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex md:justify-between mx-auto my-3 md:mx-32 md:gap-12 items-center px-4">
        <img className="md:w-[40%] mx-auto" src="12.webp" alt="" />
        <div>
          <p className="font-bold text-blue-400 text-2xl my-3">
            Give invitees options
          </p>
          <p>
            Display a variety of meeting choices on a single page, letting
            invitees schedule based on the nature of the meeting. Mix and match
            meeting types to offer a variety of hosts and availability. Keep
            your request brief and to the point. Be clear about what kind of
            meeting you are looking for (e.g., coffee, lunch, phone call, etc.).
            Suggest a few specific dates and times that work for you. Finding
            the best time to meet is challenging, especially if you're meeting
            with people in different time zones. There are a few different ways
            to ask for availability. You can email potential attendees ahead of
            time, or reach out to them individually by phone or in person.
          </p>
        </div>
      </div>
      <div className="md:flex md:justify-between mx-auto my-3 md:mx-32 md:gap-12 items-center md:flex-row-reverse">
        <img className="md:w-[40%] mx-auto" src="13.webp" alt="" />
        <div>
          <p className="font-bold text-blue-400 text-2xl my-3">
            Automated meeting assignment
          </p>
          <p>
            Eliminate any manual tasks that come with routing or assigning
            meetings. Let your invitees book a time that works for them, and
            Calendly will round robin the meeting by availability or priority
            automatically. A meeting automation platform (MAP) is an application
            that automates the management of quantifiable activities associated
            with pre-meeting planning and logistics, in-meeting monitoring, and
            post-meeting analysis and follow-up. Otter is a well-known tool for
            transcribing meetings and generating automatic meeting notes. Otter
            does a great job at identifying speakers, showing live
            transcription, and creating an AI outline/summary for longer
            meetings.
          </p>
        </div>
      </div>
      <div className="md:flex md:justify-between mx-auto my-3 md:mx-32 md:gap-12 items-center">
        <img className="md:w-[40%] mx-auto" src="14.webp" alt="" />
        <div>
          <p className="font-bold text-blue-400 text-2xl my-3">
            multi-person scheduling
          </p>
          <p>
            Choose event types that will suit your multi-person scheduling
            needs—whether it’s a webinar for multiple guests (group scheduling)
            or a sales demo with more than one member of your team (collective
            scheduling). Multi-person event types · Create a team to share event
            types and scheduling pages · Work with anyone in your organization
            with shared event types. Choose event types that will suit your
            multi-person scheduling needs—whether it's a webinar for multiple
            guests (group scheduling) or a sales demo with more than one member
            of your team (collective scheduling).
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetails;
