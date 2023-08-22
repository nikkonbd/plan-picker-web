import React, { useState } from 'react';

const WeeklyHoursForm = () => {
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    const [hours, setHours] = useState(
        daysOfWeek.reduce((acc, day) => {
            acc[day] = { checked: false, times: [{ startTime: '', endTime: '' }] };
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

    const handleCopyTimes = (day, index) => {
        setHours(prevHours => {
            const newHours = { ...prevHours };
            const copiedTimes = { ...newHours[day].times[index] };
            newHours[day].times.push(copiedTimes);
            return newHours;
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        // Send the hours to an API or perform other actions here
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="day-list">
                {daysOfWeek.map(day => (
                    <div key={day} className="day">
                        <label>
                            <input
                                type="checkbox"
                                checked={hours[day].checked}
                                onChange={() => handleHoursChange(day)}
                            />
                            {day.charAt(0).toUpperCase() + day.slice(1)}:
                        </label>
                        {hours[day].checked && (
                            <div className="time-blocks">
                                {hours[day].times.map((time, index) => (
                                    <div key={index} className="time-block">
                                        <label>
                                            Start Time:
                                            <input
                                                type="time"
                                                value={time.startTime}
                                                onChange={e => handleStartTimeChange(day, index, e.target.value)}
                                            />
                                        </label>
                                        <label>
                                            End Time:
                                            <input
                                                type="time"
                                                value={time.endTime}
                                                onChange={e => handleEndTimeChange(day, index, e.target.value)}
                                            />
                                        </label>
                                        <button
                                            type="button"
                                            onClick={() => handleCopyTimes(day, index)}
                                        >
                                            Copy Times
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <button type="submit">login</button>
        </form>
    );
};

export default WeeklyHoursForm;

