import { Alert, Typography } from '@material-tailwind/react';
import React from 'react';

const MoreService = () => {


    function IconSolid() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#42a6ad"
                className="h-6 w-6"
            >
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
            title: "Cloud Transition and SaaS Model",
            description: "Transition from boxed software to a cloud-based Software as a Service (SaaS) model. This allows for easier updates, scalability, and remote accessibility."
        },
        {
            title: "Enhanced Security Features",
            description: "Implement robust security features to address the concerns of enterprise clients. Features may include data encryption, multi-factor authentication (MFA), and regular security audits."
        },
        {
            title: "Admin Control and Customization",
            description: "Provide enterprise administrators with granular control over user access and permissions. Offer customization options to tailor the software to specific business needs."
        },
        {
            title: "Integration Capabilities",
            description: "Develop APIs and integrations with other popular enterprise software (e.g., CRM, ERP) to streamline workflows and data sharing."
        },
        {
            title: "Advanced Analytics and Reporting",
            description: "Offer comprehensive analytics and reporting tools that help organizations track software usage, employee productivity, and ROI."
        },
        {
            title: "User Training and Support",
            description: "Provide training resources and excellent customer support to ensure that IT teams can effectively implement and maintain the software."
        },
        {
            title: "Compliance and Regulations",
            description: "Stay updated on industry-specific compliance regulations (e.g., GDPR, HIPAA) and ensure that the software complies with these standards."
        },
        {
            title: "Scalability and Performance",
            description: "Design the software to scale seamlessly with the growth of the organization, ensuring optimal performance even as user numbers increase."
        },
        {
            title: "Pipeline Growth",
            description: "Offer features that help sales and marketing teams track leads, analyze customer behavior, and optimize their sales processes."
        },
        {
            title: "Deal Management",
            description: "Provide tools for efficient deal tracking, negotiation, and management, including contract generation and e-signature capabilities."
        },
        {
            title: "Faster Hiring",
            description: "Develop HR-oriented features for recruitment, onboarding, and talent management to speed up the hiring process."
        },
        {
            title: "User-Friendly Interface",
            description: "Ensure a user-friendly interface for all users, from administrators to end-users, to encourage adoption and minimize training time."
        },
        {
            title: "Feedback Loops",
            description: "Create mechanisms for collecting and acting on customer feedback to continuously improve the software."
        },
        {
            title: "Partnerships and Ecosystem",
            description: "Collaborate with complementary software vendors to expand the ecosystem and provide users with a comprehensive solution."
        },
        {
            title: "Data Migration Tools",
            description: "Offer tools and services to assist organizations in migrating their data from traditional boxed software to the new cloud-based platform."
        },
        {
            title: "Subscription Models and Pricing",
            description: "Develop flexible subscription pricing models to accommodate the needs and budgets of different enterprises."
        },
        {
            title: "Marketing and Education",
            description: "Launch marketing campaigns and educational resources to inform existing and potential customers about the benefits of the new software model."
        },
        {
            title: "User Adoption Strategies",
            description: "Implement strategies to ensure that users transition smoothly to the new software, including training programs and communication plans."
        }
    ];


    return (
        <div>
            <div className="relative bg-gradient-to-r from-teal-300 to- h-[40vh] py-16">
                <div className="container mx-auto text-center relative z-10">
                    <h1 className="text-5xl font-extrabold text-white mb-4">
                        Pick the perfect plan for your team
                    </h1>
                    <p className="text-white text-lg mb-8">
                        Choose from our tailored plans to meet your team's needs.
                    </p>
                </div>
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <img
                        src="https://img.freepik.com/free-vector/coworking-infographics-template_1284-18204.jpg?w=826&t=st=1693922524~exp=1693923124~hmac=7b49450952b20560d06b6b85fd67294725bc631d49ebffd3e076b04f0588ff52"
                        alt="Team Planning"
                        className="object-cover w-full h-full opacity-30"
                    />
                </div>
            </div>
            <div className='lg:w-2/3 mt-10 mx-auto grid grid-cols-2 gap-4'>
                {
                    featuresData.map((data,idx)=> <Alert className='border border-[#33B3AA]' key={idx} variant="outlined" icon={<IconSolid />}>
                    <Typography className="font-medium">
                       {data.title}
                    </Typography>
                    <ul className="mt-2 ml-2 list-inside list-disc">
                        <li>{data.description}</li>
                    </ul>
                </Alert>)
                }
            </div>
        </div>
    );
};

export default MoreService;