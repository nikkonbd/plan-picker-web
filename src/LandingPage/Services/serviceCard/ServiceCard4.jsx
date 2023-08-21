import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

  function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-3 w-3"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }

const ServiceCard4 = () => {
    return (
        <div className='mb-6'>
            <Card color="gray" variant="gradient" className="w-full md:h-[800px] p-8">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                >
                    <Typography
                    variant="small"
                    color="white"
                    className="font-normal uppercase"
                    >
                    Teams
                    </Typography>
                    <Typography
                    variant="h1"
                    color="white"
                    className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                    >
                    <span className="mt-2 text-4xl">$</span>16{" "}
                    <span className="self-end text-4xl">/mo</span>
                    </Typography>
                </CardHeader>
                <CardBody className="p-0">
                    <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">Create round robin event types</Typography>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">Route with Marketo or HubSpot forms</Typography>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">40+ built-in pages</Typography>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">1 year free updates</Typography>
                    </li>
                    <li className="flex items-center gap-4">
                        <span className="rounded-full border border-white/20 bg-white/20 p-1">
                        <CheckIcon />
                        </span>
                        <Typography className="font-normal">
                        Life time technical support
                        </Typography>
                    </li>
                    </ul>
                </CardBody>
                <CardFooter className="mt-12 p-0">
                <a href="#" className="inline-block">
                        <Button variant="text" className="flex md:mt-[190px] hover:bg-gray-700 text-white items-center gap-2">
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4 text-white"
                        >
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ServiceCard4;