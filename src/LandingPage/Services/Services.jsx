import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { GiCheckMark } from "react-icons/gi";
import ServiceCardAccordion from "./serviceCard/ServiceCardAccordion";
import ServiceCard5 from "./serviceCard/ServiceCard5";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Service || Plan Picker</title>
      </Helmet>
      <div className="px-4 md:px-0 md:w-10/12 mx-auto py-16 sm:px-10">
        <Card className="w-full flex-row">
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              startups
            </Typography>
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 text-2xl md:text-4xl text-[#5EBEC4]">
              Pick the perfect plan for your team
            </Typography>
            <Typography color="gray" className="mb-3 text-base text-[#61677A]">
              Create organization-wide value with enterprise admin, security,
              and IT-oriented features to grow pipeline, close more deals, and
              hire faster. It was until recently a traditional boxed software
              company selling licenses. Yet its own business model disruption is
              only part of the story
            </Typography>
            <div className="mb-8 pt-10 space-y-3 text-[#61677A]">
              <div className="flex items-center gap-2">
                <GiCheckMark></GiCheckMark>
                <p className="text-base text-[#61677A]">
                  Enable Single Sign-On and advanced user provisioning
                </p>
              </div>
              <div className="flex items-center gap-2">
                <GiCheckMark></GiCheckMark>
                <p>Ensure compliance with an audit log and data deletion API</p>
              </div>
              <div className="flex items-center gap-2">
                <GiCheckMark></GiCheckMark>
                <p>Claim your domain and work in one account</p>
              </div>
              <div className="flex items-center gap-2">
                <GiCheckMark></GiCheckMark>
                <p>Use the full suite of Salesforce routing features</p>
              </div>
              <div className="flex items-center gap-2">
                <GiCheckMark></GiCheckMark>
                <p>Access expedited support, onboarding and implementation</p>
              </div>
            </div>
            <a href="#" className="inline-block">
              <Button
                variant="text"
                className="flex items-center gap-2 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardBody>
        </Card>
        <div className="mt-16">
          <ServiceCard5></ServiceCard5>
        </div>
        <div>
          <ServiceCardAccordion></ServiceCardAccordion>
        </div>
      </div>
    </>
  );
};

export default Services;
