import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EventTypeDetails = () => {

    const EventType = useLoaderData();

    const paramsId = useParams();

    const EventTypeDetails = EventType.find(event => event.date = paramsId.id)

    const { title, date, location, description, imageUrl } = EventTypeDetails


    return (
        <div className="overflow-hidden bg-white rounded-lg shadow-md md:w-[50%] mx-auto">
            <img
                src={imageUrl}
                alt={`Event: ${title}`}
                className="object-cover w-full h-40"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-2 text-gray-600">{date}</p>
                <p className="text-gray-600">{location}</p>
                <p className="mt-4 text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default EventTypeDetails;