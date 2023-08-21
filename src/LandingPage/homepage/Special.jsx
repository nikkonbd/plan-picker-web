import React from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";

const Special = () => {

    const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "Sales",
      value: "html",
      title: "Drive more revenue",
      image: "https://images.unsplash.com/photo-1529651737248-dad5e287768e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Marketing",
      value: "react",
      title: "Drive more revenue",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Customer Success",
      value: "vue",
      title: "Drive more revenue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "IT",
      value: "angular",
      title: "Drive more revenue",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Education",
      value: "svelte",
      title: "Drive more revenue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

    return (
        <div className="mx-4 md:mx-12 px-4 py-16 sm:px-10 lg:px-8">
            <h2 className='text-4xl font-semibold text-center pb-8'>Special features for teams who <br /> conduct meeting at scale</h2>
            <Tabs value={activeTab}>
                <TabsHeader
                    className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
                    indicatorProps={{
                    className:
                        "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                    }}
                >
                    {data.map(({ label, value }) => (
                    <Tab
                        key={value}
                        value={value}
                        onClick={() => setActiveTab(value)}
                        className={activeTab === value ? "text-gray-900" : ""}
                    >
                        {label}
                    </Tab>
                    ))}
                </TabsHeader>
                <TabsBody>
                    {data.map(({ value, title, image }) => (
                    <TabPanel key={value} value={value}>
                        <div className='md:flex justify-between'>
                        <div>
                        <h2 className='text-3xl'>{title}</h2>
                        <p>Book high-value meetings in seconds and turn scheduling into a competitive advantage.</p>
                        </div>
                        <img className='p-4 h-4/6' src={image} alt="" />
                        </div>
                    </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
};

export default Special;