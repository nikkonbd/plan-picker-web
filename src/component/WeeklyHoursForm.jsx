

import React, { useState } from 'react';

const WeeklyHoursForm = () => {
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    const [hours, setHours] = useState(
        daysOfWeek.reduce((acc, day) => {
            acc[day] = { checked: false, times: [] };
            return acc;
        }, {})
    );

    const handleHoursChange = (day) => {
        setHours(prevHours => ({
            ...prevHours,
            [day]: {
                ...prevHours[day],
                checked: !prevHours[day].checked,
                times: prevHours[day].checked ? [] : [{ startTime: '', endTime: '' }],
            },
        }));
    };

    const handleStartTimeChange = (day, index, value) => {
        setHours(prevHours => {
            const newHours = { ...prevHours };
            newHours[day].times[index].startTime = value;
            return newHours;
        });
    };

    const handleEndTimeChange = (day, index, value) => {
        setHours(prevHours => {
            const newHours = { ...prevHours };
            newHours[day].times[index].endTime = value;
            return newHours;
        });
    };

    const handleCopyTimes = (day) => {
        setHours(prevHours => {
            const newHours = { ...prevHours };
            if (newHours[day].times.length < 3) {
                const copiedTimes = { ...newHours[day].times[1] };
                newHours[day].times.push(copiedTimes);
            }
            return newHours;
        });
    };

    const handleDeleteTime = (day, index) => {
        setHours(prevHours => {
            const newHours = { ...prevHours };
            newHours[day].times.splice(index, 1);
            return newHours;
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Send the hours to an API or perform other actions here
    };

    return (
        <form onSubmit={handleSubmit} className="w-full mx-auto p-4">
            <div className="day-list border-2 p-6">
                {daysOfWeek.map(day => (
                    <div key={day} className="day mb-4">
                        <label className="block mb-2">
                            <input
                                type="checkbox"
                                checked={hours[day].checked}
                                onChange={() => handleHoursChange(day)}
                                className="mr-2"
                            />
                            {day.charAt(0).toUpperCase() + day.slice(1)}:
                            {!hours[day].checked && <span className="text-red-500 ml-2">Unavailable</span>}
                        </label>
                        {hours[day].checked && (
                            <div className="time-block">
                                <button
                                    type="button"
                                    onClick={() => handleCopyTimes(day)}
                                    className={`${hours[day].times.length >= 5
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-blue-500 hover:bg-blue-600'
                                        } text-white px-2 py-1 rounded mb-2`}
                                    disabled={hours[day].times.length >= 5}
                                >
                                    Copy Times
                                </button>
                                {hours[day].times.map((time, index) => (
                                    <div key={index} className="mb-2">
                                        <label className="block mb-2">
                                            Start Time:
                                            <input
                                                type="time"
                                                value={time.startTime}
                                                onChange={e => handleStartTimeChange(day, index, e.target.value)}
                                                className="block border-2 p-2 w-full mt-1"
                                            />
                                        </label>
                                        <label className="block mb-2">
                                            End Time:
                                            <input
                                                type="time"
                                                value={time.endTime}
                                                onChange={e => handleEndTimeChange(day, index, e.target.value)}
                                                className="block w-full mt-1 border-2 p-2"
                                            />
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteTime(day, index)}
                                            className="bg-red-500 text-white px-2 py-1 rounded mb-2 hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600">
                Submit
            </button>
        </form>
    );
};

export default WeeklyHoursForm;

