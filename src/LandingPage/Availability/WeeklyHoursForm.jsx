import React, { useState } from 'react';

const WeeklyHoursForm = () => {
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    const [hours, setHours] = useState(
        daysOfWeek.reduce((acc, day) => {
            acc[day] = { checked: false, startTime: '', endTime: '' };
            return acc;
        }, {})
    );

    const handleHoursChange = (day) => {
        setHours(prevHours => ({
            ...prevHours,
            [day]: {
                ...prevHours[day],
                checked: !prevHours[day].checked,
            },
        }));
    };

    const handleStartTimeChange = (day, value) => {
        setHours(prevHours => ({
            ...prevHours,
            [day]: {
                ...prevHours[day],
                startTime: value,
            },
        }));
    };

    const handleEndTimeChange = (day, value) => {
        setHours(prevHours => ({
            ...prevHours,
            [day]: {
                ...prevHours[day],
                endTime: value,
            },
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Send the hours to an API or perform other actions here
    };

    return (
        <form className='border-2 rounded-lg py-4 px-6' onSubmit={handleSubmit}>
            <p className='text-sm font-bold mb-2'>Time zone</p>
            {daysOfWeek.map(day => (
                <div className={`flex align-center ${hours[day].checked ? 'border-2 rounded-xl' : ''}`} key={day}>
                    <div className='ms-2'>
                        <label>
                            {day.charAt(0).toUpperCase() + day.slice(1)}:
                            <input
                                className='my-3'
                                type="checkbox"
                                checked={hours[day].checked}
                                onChange={() => handleHoursChange(day)}
                            />
                        </label>
                    </div>
                    <div>
                        {hours[day].checked ? (
                            <div className='p-2'>
                                <label>
                                    <span className='me-1'>Start Time:</span>
                                    <input
                                        type="time"
                                        value={hours[day].startTime}
                                        onChange={e => handleStartTimeChange(day, e.target.value)}
                                    />
                                </label>
                                <label>
                                    <span className='me-1'> End Time:</span>
                                    <input
                                        type="time"
                                        value={hours[day].endTime}
                                        onChange={e => handleEndTimeChange(day, e.target.value)}
                                    />
                                </label>
                            </div>
                        ) : (
                            <p className='mt-[0.4rem]'>Unavailable</p>
                        )}
                    </div>
                </div>
            ))}
            <button className='ms-2 py-2 px-2 rounded-md mt-2 text-white bg-teal-400' type="submit">Submit</button>
            <button className='ms-6 py-2 px-2 rounded-md mt-2 text-white bg-red-400' type="submit">Cancel</button>
        </form>
    );
};

export default WeeklyHoursForm;
