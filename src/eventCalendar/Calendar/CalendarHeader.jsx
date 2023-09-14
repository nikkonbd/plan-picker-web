import React, { useContext } from 'react';
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import GlobalContext from './Context/GlobalContext';
import dayjs from 'dayjs';

const CalendarHeader = () => {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext);

    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1);
    }
    function handleNextMonth() {
        setMonthIndex(monthIndex + 1);
    }
    function handleReset() {
        setMonthIndex(
            monthIndex === dayjs().month()
                ? monthIndex + Math.random()
                : dayjs().month()
        );
    }

    return (
        <div className="px-4 my-2 flex items-center">
            <h1 className="mr-10 text-xl text-gray-500 fond-bold">
                PlanPicker Calendar
            </h1>
            <button
                onClick={handleReset}
                className="border rounded py-2 px-4 mr-5"
            >
                Today
            </button>
            <button onClick={handlePrevMonth}>
                <span className="cursor-pointer text-gray-600 mx-2">
                    <BsChevronLeft></BsChevronLeft>
                </span>
            </button>
            <button onClick={handleNextMonth} className='px-10'>
                <span className=" cursor-pointer text-gray-600 mx-2">
                    <BsChevronRight></BsChevronRight>
                </span>
            </button>
            <h2 className="ml-4 text-xl text-gray-500 font-bold">
                {dayjs(new Date(dayjs().year(), monthIndex)).format(
                    "MMMM YYYY"
                )}
            </h2>
        </div>
    );
};

export default CalendarHeader;