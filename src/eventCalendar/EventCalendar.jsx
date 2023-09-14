import React, { useContext, useEffect, useState } from 'react';
import CalendarHeader from './Calendar/CalendarHeader';
import Side from './Calendar/Side';
import Month from './Calendar/Month';
import { getMonth } from './Calendar/utils';
import GlobalContext from './Calendar/Context/GlobalContext';
import EventModal from './Calendar/EventModal';


const EventCalendar = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext)

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (

    <React.Fragment>
      {showEventModal && <EventModal></EventModal>}

      <div className="flex flex-col h-screen">
        <CalendarHeader />
        <div className="flex flex-col h-full md:flex-row">
          <div className=' w-full md:w-[33%]'>
            <Side />
          </div>

          <div className='md:w-[66%] w-full h-screen'>
            <Month month={currenMonth} />
          </div>
        </div>
      </div>
    </React.Fragment>


  );
};

export default EventCalendar;

