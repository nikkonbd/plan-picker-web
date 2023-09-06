import React from 'react';

const ScheduleDetails = () => {
    return (
        <div className='mx-5'>
            <p className='text-center text-4xl text-blue-500 my-8'>Scheduling Details</p>
            <div className='md:flex md:justify-around mx-auto my-3 md:mx-32 md:gap-60 items-center'>
                <img className='md:w-[50%] mx-auto' src="12.webp" alt="" />
                <div>
                    <p className='font-bold text-blue-400 text-2xl my-3'>Give invitees options</p>
                    <p>Display a variety of meeting choices on a single page, letting invitees schedule based on the nature of the meeting. Mix and match meeting types to offer a variety of hosts and availability.
                    </p>
                </div>
            </div>
            <div className='md:flex md:justify-around mx-auto my-3 md:mx-32 md:gap-60 items-center md:flex-row-reverse'>
                <img className='md:w-[50%] mx-auto' src="13.webp" alt="" />
                <div>
                    <p className='font-bold text-blue-400 text-2xl my-3'>Automated meeting assignment</p>
                    <p>Eliminate any manual tasks that come with routing or assigning meetings. Let your invitees book a time that works for them, and Calendly will round robin the meeting by availability or priority automatically.
                    </p>
                </div>

            </div>
            <div className='md:flex md:justify-around mx-auto my-3 md:mx-32 md:gap-60 items-center'>
                <img className='md:w-[50%] mx-auto' src="14.webp" alt="" />
                <div>
                    <p className='font-bold text-blue-400 text-2xl my-3'>multi-person scheduling</p>
                    <p>Choose event types that will suit your multi-person scheduling needs—whether it’s a webinar for multiple guests (group scheduling) or a sales demo with more than one member of your team (collective scheduling).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ScheduleDetails;