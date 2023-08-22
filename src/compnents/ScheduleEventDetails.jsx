import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'
import { BsClockHistory } from 'react-icons/bs'
import { MdOutlineEventNote } from 'react-icons/md'
import { ImEarth } from 'react-icons/im'
import { Button, Input } from '@material-tailwind/react';





const ScheduleEventDetails = () => {
    return (
        <div className='max-w-screen-xl mx-auto h-[60vh]'>

            <div className='lg:flex w-full px-4 mt-20'>

                <div className='space-y-2 lg:w-1/2'>
                    <FaArrowLeft className='text-2xl'></FaArrowLeft>
                    <p>Prince Tanjim</p>
                    <h3 className='text-3xl font-semibold'>30 Minute Meeting</h3>
                    <p className='flex items-center gap-2 font-semibold'><BsClockHistory></BsClockHistory>30 min</p>
                    <p className='flex items-center gap-2 font-semibold'><MdOutlineEventNote></MdOutlineEventNote> 9:30am - 10:00am, Wednesday, August 23, 2023</p>
                    <p className='flex items-center gap-2 font-semibold'><ImEarth></ImEarth>Asia/Dhaka</p>
                </div>

                <div className='space-y-2 lg:w-1/2'>
                    <h4 className='text-xl font-semibold'>Enter Details</h4>
                    <form className='space-y-5' action="">
                        <Input type='text' name='name' label="Name" />
                        <Input type='email' name='email' label="email" />
                        <Input type='email' name='email' className='h-16' label="Please share anything that will help prepare for our meeting." />
                        <div className='pt-5'>
                        <Button color="blue">shedule Event</Button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ScheduleEventDetails;