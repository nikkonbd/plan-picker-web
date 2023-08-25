import React, { useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const Event = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  
  const handleNextForm = () => {
    navigate("/dashboard/one-on-one-form/event_set_edit_form");
  }

  return (
    <div className="py-6 mt-10 md:px-10">
      <h2 className="text-center">One On One</h2>
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="flex gap-2">
          <div className="bg-red-400 rounded-full w-7 h-7"></div>
          <div>
            <h2 className="text-2xl">What event is this?</h2>
            <p className="text-gray">No Location given</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 md:justify-between">
          <button className="p-2 rounded-md btn">Cancel</button>
          <button onClick={() => handleNextForm()} className="px-2 rounded-md btn btn-primary ">Next</button>
        </div>
      </div>
      <div className="divider"></div>
      <form className="mt-6">
        <div className="w-full max-w-md form-control">
          <label className="label">
            <span className="flex items-center gap-3 font-bold label-text">
              Event Name * <BiInfoCircle></BiInfoCircle>
            </span>
          </label>
          <input
            type="text"
            placeholder="Event Name"
            className="w-full max-w-md font-semibold input input-bordered"
          />
        </div>
        <div className="w-full max-w-md form-control">
          <label className="label">
            <span className="flex items-center gap-3 font-bold label-text">
              Location <BiInfoCircle></BiInfoCircle>
            </span>
          </label>
          <select className="select select-bordered">
            <option disabled selected className="text-gray-200">
              Add Location
            </option>
            <option>Dhaka</option>
            <option>Jhenaidah</option>
            <option>Magura</option>
            <option>Barishal</option>
            <option>Noakhali</option>
          </select>
        </div>
        <div className="form-control w-full max-w-md h-[300px]">
          <label className="label">
            <span className="flex items-center gap-3 font-bold label-text">
              Description * <BiInfoCircle></BiInfoCircle>
            </span>
          </label>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className="h-[300px] "
          />
          ;
        </div>
        <div className="w-full mt-10 form-control md:max-w-4xl">
          <label className="label">
            <span className="flex items-center gap-3 font-bold label-text">
              Event Link * <BiInfoCircle></BiInfoCircle>
            </span>
          </label>
          <p className="label ">PlanPicker.com</p>
          <input
            type="text"
            className="w-full max-w-md font-semibold input input-bordered"
          />
        </div>
        <div className="w-full max-w-2xl mt-10 form-control">
          <label className="label">
            <span className="flex items-center gap-3 font-bold label-text">
              Event Color * <BiInfoCircle></BiInfoCircle>
            </span>
          </label>
          <div className="flex gap-1">
            <div className="bg-red-500 rounded-full w-7 h-7"></div>
            <div className="bg-green-500 rounded-full w-7 h-7"></div>
            <div className="rounded-full w-7 h-7 bg-brown-500"></div>
            <div className="bg-blue-500 rounded-full w-7 h-7"></div>
            <div className="bg-yellow-500 rounded-full w-7 h-7"></div>
          </div>
        </div>
      </form>
      <div className="divider"></div>
      <div className="flex justify-center md:justify-end">
        <div className="flex gap-4 ">
          <button className="p-2 rounded-md btn">Cancel</button>
          <button onClick={() => handleNextForm()} className="px-2 rounded-md btn btn-primary ">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
