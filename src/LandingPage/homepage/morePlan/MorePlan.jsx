import { Button } from "@material-tailwind/react";
import React from "react";
import book1 from "../../../assets/Images/book1.jpg";
import book2 from "../../../assets/Images/book2.png";
import book3 from "../../../assets/Images/book3.png";

const MorePlan = () => {
  const scheduleDetails = [
    {
      title: "Share your Plan Availability",
      description:
        "Enable users to share their detailed plan availability with friends, colleagues, or clients. This feature simplifies the process of coordinating meetings, appointments, and social gatherings. Users can set their preferred times and dates, and the system automatically suggests the best options for everyone involved. Whether it's a professional meeting or a casual get-together, this tool enhances collaboration and time management.In today's fast-paced world, juggling responsibilities and commitments has become a daily norm. Whether it's work meetings, family gatherings, or personal hobbies, keeping track of your schedule can often feel like a challenge. But what if there was a way to not only manage your time effectively but also build connections and enhance collaboration with others?",
      img: book1, // Example image URL
      icon: "share", // Icon for sharing
    },
    {
      title: "Schedule as a Team",
      description:
        "Empower teams to seamlessly schedule events, meetings, and tasks together. This collaborative scheduling feature ensures that team members can view each other's schedules and availability, preventing scheduling conflicts and streamlining the coordination process. With easy-to-use group views and real-time updates, teams can align their efforts and stay productive.In today's fast-paced world, the ability to effectively manage and optimize time is crucial for success in any endeavor. Whether you're running a business, planning an event, or even coordinating a group project, the key to achieving goals lies in a well-structured schedule. But what if the responsibility of scheduling doesn't rest on one person's shoulders? What if it's a collective effort involving a team?",
      img: book2, // Example image URL
      icon: "team", // Icon for team scheduling
    },
    {
      title: "Keep Prospects Engaged",
      description:
        "Maintain meaningful engagement with potential clients and prospects in between meetings. Our platform includes tools to automate personalized follow-ups, share relevant resources, and provide updates on upcoming events. By nurturing these connections, you can build stronger relationships and increase the likelihood of successful conversions.In the fast-paced world of sales, maintaining consistent engagement with potential clients is crucial for driving conversions. One of the most challenging aspects of the sales process is keeping prospects engaged between meetings. This is where a well-thought-out strategy comes into play. In this blog post?",
      img: book3, // Example image URL
      icon: "engagement", // Icon for prospect engagement
    },
    // Add more objects as needed
  ];

  return (
    <div className="px-4 md:px-0 md:w-10/12 mx-auto">
      {scheduleDetails.map((plan, idx) => (
        <div
          key={idx}
          className="flex md:pb-14 flex-col-reverse items-center justify-between gap-4 mt-12 md:flex lg:flex lg:flex-row md:flex-row">
          <div data-aos="fade-up-right">
            <div className="text-center md:text-start">
              <h2 className="text-4xl font-medium">{plan.title}</h2>
              <p className="py-4 lg:w-[500px] ">{plan.description}</p>
            </div>
          </div>
          <div data-aos="fade-up-left">
            <img
              className="rounded-xl w-full h-full md:h-[400px] md:w-[600px]"
              src={plan.img}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MorePlan;
