import React from 'react'

const EventDetails = () => {
  return (
    <div className='w-full'>
      <p className="text-gray-600 font-semibold mb-2">Host Name</p>
      <h1 className="text-2xl font-bold mb-3">Event Title</h1>
      <p className="text-gray-600 mb-2 font-semibold">15 min</p>
      <p className="text-gray-600 mb-3 font-semibold">
        Web conferencing details provided upon confirmation.
      </p>
      <p className='text-base font-medium'>Descriptions</p>
    </div>
  );
}

export default EventDetails