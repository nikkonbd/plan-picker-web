import React, { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider';

const EventDetails = ({ eventDetails }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className="w-full">
      <p className="text-gray-600 font-semibold mb-2">{user?.displayName}</p>
      <h1 className="text-2xl font-bold mb-3">{eventDetails?.eventName}</h1>
      <p className="text-gray-600 mb-2 font-semibold">{eventDetails?.formData?.eventDuration} min</p>
      <p className="text-gray-600 mb-3 font-semibold">
        Web conferencing details provided upon confirmation.
      </p>
      <p className="text-base font-medium">{eventDetails?.description}</p>
    </div>
  );
};

export default EventDetails