import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WeeklyHoursForm from './WeeklyHoursForm';
import { Link } from 'react-router-dom';

const Availability = () => {
    return (
        <div className='ms-10'>
            <p className=' text-sm mt-5'>Personal</p>
            <p className='text-3xl my-2'>Availability</p>

            <Tabs>
                <TabList className="flex border-b-2 pb-2">
                    <Tab className='w-48'><Link>Hours & Preferences</Link></Tab>
                    <Tab className='w-48'><Link>Connected Calenders</Link></Tab>
                    <Tab className='w-48'><Link>Holidays</Link></Tab>
                </TabList>
                <TabPanel className=''>
                    <h2 className='mt-8 text-2xl'>Default Hours</h2>
                    <p className='mt-3 mb-2 font-medium'>Set default hours used for new events or events you're co-hosting with your team</p>
                    <WeeklyHoursForm />
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div >
    );
};

export default Availability;