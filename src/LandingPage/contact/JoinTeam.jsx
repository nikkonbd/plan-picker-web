import { Alert, Typography } from "@material-tailwind/react";
import React from "react";

const JoinTeam = () => {
  function IconSolid() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="#42a6ad"
        className="h-6 w-6">
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  const featuresData = [
    {
      title: "Identify Your Interests and Skills:",
      description:
        "Determine your areas of interest and the skills you possess. This will help you narrow down the types of teams or organizations you'd like to join.",
    },
    {
      title: "Network:",
      description:
        "Connect with people in your chosen field or industry. Attend networking events, conferences, and workshops to meet potential team members and employers.",
    },
    {
      title: "Online Platforms:",
      description:
        "Many teams and organizations post job openings or opportunities to collaborate on online platforms like LinkedIn, Indeed, or specialized job boards related to your field.",
    },
    {
      title: "Volunteer:",
      description:
        "Volunteering can be a great way to gain experience and make connections in your chosen field. Look for volunteer opportunities with organizations that align with your interests.",
    },
    {
      title: "Prepare Your Resume and Cover Letter:",
      description:
        "Tailor your resume and cover letter to the specific team or organization you're interested in. Highlight your relevant skills and experiences.",
    },
    {
      title: "Apply:",
      description:
        "Submit your application and any required documents, such as a resume and cover letter, to the team or organization you're interested in. Follow their application instructions carefully.",
    },
    {
      title: "Interview:",
      description:
        "If you're selected for an interview, be prepared to discuss your qualifications, experiences, and why you want to join the team.",
    },
    {
      title: "Follow Up:",
      description:
        "After the interview, send a thank-you email expressing your continued interest in joining the team. This demonstrates professionalism and enthusiasm.",
    },
    {
      title: "Keep Exploring:",
      description:
        "If you don't succeed with one team or organization, don't get discouraged. Keep exploring opportunities and refining your skills and application materials.",
    },
    {
      title: "Be Persistent:",
      description:
        "Finding the right team or organization can take time. Stay persistent and continue to actively seek out opportunities that align with your goals.",
    },
  ];

  return (
    <div>
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
              Join Our Team!
            </h2>
            <p className="pt-4">
              I appreciate your interest in joining a team, but I'm just a
              text-based AI and don't have the capability to participate in
              teams or organizations. However, I can certainly provide you with
              some general advice on how to join a team:
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 mt-10 mx-auto grid grid-cols-1 px-4 md:px-0 md:grid-cols-2 gap-4">
        {featuresData.map((data, idx) => (
          <Alert
            className="border border-[#33B3AA]"
            key={idx}
            variant="outlined"
            icon={<IconSolid />}>
            <Typography className="font-medium text-[#5EBEC4]">
              {data.title}
            </Typography>
            <ul className="mt-2 ml-2 list-inside list-disc">
              <li className="text-[#61677A]">{data.description}</li>
            </ul>
          </Alert>
        ))}
      </div>
    </div>
  );
};

export default JoinTeam;
