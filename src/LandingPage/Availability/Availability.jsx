import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WeeklyHoursForm from './WeeklyHoursForm';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { Helmet } from 'react-helmet-async';


const Availability = () => {
    return (
        <>
            <Helmet>
                <title>Availability|| PlanPicker</title>
            </Helmet>
            <div className='ms-10'>
                <p className=' text-sm mt-5'>Personal</p>
                <p className='text-3xl my-2'>Availability</p>

                <Tabs>
                    <TabList className="flex border-b-2 pb-2">
                        <Tab className='w-48'><Link>Hours & Preferences</Link></Tab>
                        <Tab className='w-48'><Link>Connected Calenders</Link></Tab>
                        <Tab className='w-48'><Link>Holidays</Link></Tab>
                    </TabList>
                    <TabPanel className='w-auto me-12'>
                        <h2 className='mt-8 text-2xl'>Default Hours</h2>
                        <p className='mt-3 mb-2 font-medium'>Set default hours used for new events or events you're co-hosting with your team</p>
                        <WeeklyHoursForm />
                    </TabPanel>
                    <TabPanel className='me-12'>
                        <h2 className='mt-10 font-bold text-2xl mb-4'>Connected Calenders</h2>
                        <div className='border-2 rounded-lg p-5'>
                            <div className='flex justify-between'>
                                <p className='text-xl'>My Calender Account <span className='text-blue-gray-400'>1/6</span></p>
                                <button className='bg-light-blue-600 py-2 px-2 rounded text-white'>Add Calender Account</button>
                            </div>
                            <div className='flex justify-between items-center border-2 rounded-lg p-4 mt-6'>
                                <div className='flex items-center'>
                                    <img className='w-10 h-10 me-4' src="https://cdn-icons-png.flaticon.com/512/1869/1869397.png" alt="" />
                                    <div>
                                        <p>Google</p>
                                        <p>mdmasrafi902@gmail.com</p>
                                    </div>
                                </div>
                                <div className='p-3 bg-red-400 rounded'>
                                    <AiOutlineDelete className='text-white' />
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='mt-10 mb-4 font-semibold text-2xl '>Holidays</h2>
                        <p className='mb-5 w-[32rem]'>Calendly automatically removes certain holidays from your availability <span className='font-bold'>on all your Event Types</span> based on your country. You can choose which holidays you observe here.
                        </p>

                        <p className='bg-blue-gray-50 p-4 rounded-lg w-[32rem]'>
                            <span className='font-bold'>Tip:</span> Don’t see a holiday you observe? Add an all-day, busy, or out-of-office event to your connected calendar to prevent Calendly from booking that date.

                        </p>

                        <div className='border-2 rounded-lg mt-7 w-auto me-16'>
                            <div className='border-b py-3 ps-3'>
                                <p className='font-normal text-sm text-blue-gray-400'>COUNTRY USED FOR HOLIDAYS</p>
                                <p><span className='font-normal text-black'>Other</span> <span className='text-blue-500'>Change</span></p>
                            </div>
                            <div>
                                <p className='ps-3 py-3'>Holidays for other countries are not yet supported.</p>
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div >
        </>

    );
};

export default Availability;