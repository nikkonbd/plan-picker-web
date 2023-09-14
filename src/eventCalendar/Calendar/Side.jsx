import React from 'react';
import CreateEventButton from './CreateEventButton';
import SmallCalendar from './SmallCalendar';
import Labels from './Labels';

const Side = () => {
    return (
        <div className='className="border p-5 w-64"'>
            <CreateEventButton></CreateEventButton>
            <SmallCalendar></SmallCalendar>
            <Labels></Labels>
        </div>
    );
};

export default Side;