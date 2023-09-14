import React, { useContext, useState } from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import GlobalContext from './Context/GlobalContext';
import { MdScheduleSend } from 'react-icons/md';
import { BiBookmark, BiMenuAltRight, BiTrash } from "react-icons/bi";
import { BsCheck2 } from 'react-icons/bs';




const labelsClasses = [
    "indigo",
    "gray",
    "green",
    "blue",
    "red",
    "purple",
];

const EventModal = () => {
    const {
        setShowEventModal,
        daySelected,
        dispatchCalEvent,
        selectedEvent,
    } = useContext(GlobalContext);

    const [title, setTitle] = useState(
        selectedEvent ? selectedEvent.title : ""
    );
    const [description, setDescription] = useState(
        selectedEvent ? selectedEvent.description : ""
    );
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent
            ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
            : labelsClasses[0]
    );


    const handleSubmit = (e) => {
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        if (selectedEvent) {
            dispatchCalEvent({ type: "update", payload: calendarEvent });
        }
        else {

            dispatchCalEvent({ type: "push", payload: calendarEvent });
        }
        setShowEventModal(false);
    }

    return (
        <div className="h-screen w-full md:w-full fixed md:left-60 md:top-0 flex justify-center items-center">
            <form className="bg-white rounded-lg shadow-2xl w-1/4">
                <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
                    <span className=" text-gray-400">
                        <HiMenuAlt4 fontSize={20}></HiMenuAlt4>
                    </span>

                    <div className='flex gap-4 items-center'>
                        {selectedEvent && (
                            <span
                                onClick={() => {

                                    dispatchCalEvent({
                                        type: "delete",
                                        payload: selectedEvent,
                                    });

                                    setShowEventModal(false);
                                }}
                                className="text-gray-400 hover:bg-red-800">
                                <BiTrash className='20'></BiTrash>
                            </span>
                        )}
                        <button onClick={() => setShowEventModal(false)}>
                            <span className="text-gray-400">
                                <RxCross2 fontSize={20}></RxCross2>
                            </span>
                        </button>
                    </div>
                </header>
                {/* /2nd / */}
                <div className="p-3">
                    <div className="grid grid-cols-1/5 items-end gap-y-7">

                        <input
                            type="text"
                            name="title"
                            placeholder="Add title"
                            value={title}
                            required
                            className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 px-4"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <div className='flex items-center gap-10'>
                            <span className="text-gray-400">
                                <MdScheduleSend fontSize={25}></MdScheduleSend>
                            </span>
                            <p>{daySelected.format("dddd, MMMM DD")}</p>
                        </div>
                        <div className='flex items-center gap-10'>
                            <span className="text-gray-400">
                                <BiMenuAltRight fontSize={25}></BiMenuAltRight>
                            </span>
                            <input
                                type="text"
                                name="description"
                                placeholder="Add a description"
                                value={description}
                                required
                                className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className='flex items-center gap-10'>
                            <span className="text-gray-400">
                                <BiBookmark fontSize={25}></BiBookmark>
                            </span>
                            <div className="flex gap-x-2">
                                {labelsClasses.map((lblClass, i) => (
                                    <span
                                        key={i}
                                        onClick={() => setSelectedLabel(lblClass)}
                                        className={`bg-${lblClass}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                                    >
                                        {selectedLabel === lblClass && (
                                            <span className=" text-black text-sm">
                                                <BsCheck2 fontSize={20}></BsCheck2>
                                            </span>
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
                <footer className="flex justify-end border-t p-3 mt-5">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
                    >
                        Save
                    </button>
                </footer>
            </form>
        </div>
    );
};

export default EventModal;