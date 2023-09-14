import React, { useContext } from 'react';
import GlobalContext from './Context/GlobalContext';
import { BsPlusLg } from 'react-icons/bs';

const CreateEventButton = () => {
    const { setShowEventModal } = useContext(GlobalContext);
    return (
        <div>
            <button
                onClick={() => setShowEventModal(true)}
                className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
            >
                <BsPlusLg></BsPlusLg>
                <span className="pl-3 pr-7"> Create Event</span>
            </button>
        </div>
    );
};

export default CreateEventButton;