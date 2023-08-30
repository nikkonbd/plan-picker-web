import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { GiCheckMark } from 'react-icons/gi';
import ServiceCard from './serviceCard/ServiceCard1';
import ServiceCard2 from './serviceCard/ServiceCard2';
import ServiceCard3 from './serviceCard/ServiceCard3';
import ServiceCard4 from './serviceCard/ServiceCard4';
import ServiceCardAccordion from './serviceCard/ServiceCardAccordion';
import ServiceCard5 from './serviceCard/ServiceCard5';

const Services = () => {
  return (
    <div className="px-4 md:px-0 md:w-8/12 mx-auto py-16 sm:px-10">
      <Card className="w-full flex-row">
        {/* <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader> */}
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            startups
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2 text-4xl text-[#5EBEC4]">
          Pick the perfect plan for your team
          </Typography>
          <Typography color="gray" className="mb-3 font-normal text-[#61677A]">
          Create organization-wide value with enterprise admin, security, and IT-oriented features to grow pipeline, close more deals, and hire faster. It was until recently a traditional boxed software company
            selling licenses. Yet its own business model disruption is only part
            of the story
          </Typography>
          <div className='mb-8 text-[#61677A]'>
            <div className='flex items-center gap-2'>
            <GiCheckMark></GiCheckMark>
            <p>Enable Single Sign-On and advanced user provisioning</p>
            </div>
            <div className='flex items-center gap-2'>
            <GiCheckMark></GiCheckMark>
            <p>Ensure compliance with an audit log and data deletion API</p>
            </div>
            <div className='flex items-center gap-2'>
            <GiCheckMark></GiCheckMark>
            <p>Claim your domain and work in one account</p>
            </div>
            <div className='flex items-center gap-2'>
            <GiCheckMark></GiCheckMark>
            <p>Use the full suite of Salesforce routing features</p>
            </div>
            <div className='flex items-center gap-2'>
            <GiCheckMark></GiCheckMark>
            <p>Access expedited support, onboarding and implementation</p>
            </div>
          </div>
          <a href="#" className="inline-block">
            <Button variant="text" className="flex items-center gap-2 bg-[#5EBEC4] hover:bg-[#42a6ad] text-white">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                className="h-4 w-4"
              >
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
      <div className='mt-16 md:flex justify-between gap-3'>
        {/* <ServiceCard></ServiceCard>
        <ServiceCard2></ServiceCard2>
        <ServiceCard3></ServiceCard3> */}
        {/* <ServiceCard4></ServiceCard4> */}
        <ServiceCard5></ServiceCard5>
      </div>
      <div>
        <ServiceCardAccordion></ServiceCardAccordion>
      </div>
    </div>
  );
};

export default Services;