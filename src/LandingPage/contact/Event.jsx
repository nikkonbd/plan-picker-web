import React, { useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Event = () => {
  const [value, setValue] = useState("");

  return (
    <div className="mt-10 md:px-10 py-6">
      <h2 className="text-center">One On One</h2>
      <div className=" flex flex-col gap-6 md:flex-row md:justify-between  ">
        <div className="flex gap-2">
          <div className="w-7 h-7 bg-red-400 rounded-full"></div>
          <div>
            <h2 className="text-2xl">What event is this?</h2>
            <p className="text-gray">No Location given</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center md:justify-between">
          <button className="rounded-md btn p-2">Cancel</button>
          <button className="rounded-md btn  btn-primary px-2 ">Next</button>
        </div>
      </div>
      <div className="divider"></div>
      <form className="mt-6">
        <div className="form-control w-full md:max-w-4xl">
          <label className="label">
            <span className="label-text font-bold flex gap-3 items-center">
              Event Name * <BiInfoCircle></BiInfoCircle>
            </span>
          </label>
          <input
            type="text"
            placeholder="Event Name"
            className="input input-bordered font-semibold w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full md:max-w-4xl">
          <label className="label">
            <span className="label-text font-bold flex gap-3 items-center">
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
        <div className="form-control w-full md:max-w-4xl h-[300px]">
          <label className="label">
            <span className="label-text font-bold flex gap-3 items-center">
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
        <div className="form-control w-full md:max-w-4xl mt-10">
          <label className="label">
            <span className="label-text font-bold flex gap-3 items-center">
              Event Link * <BiInfoCircle></BiInfoCircle>
            </span>
          </label>
          <p className="label ">PlanPicker.com</p>
          <input
            type="text"
            className="input input-bordered font-semibold w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-2xl mt-10">
          <label className="label">
            <span className="label-text font-bold flex gap-3 items-center">
              Event Color * <BiInfoCircle></BiInfoCircle>
            </span>
          </label>
          <div className="flex gap-1">
            <div className="w-7 h-7 bg-red-500 rounded-full"></div>
            <div className="w-7 h-7 bg-green-500 rounded-full"></div>
            <div className="w-7 h-7 bg-brown-500 rounded-full"></div>
            <div className="w-7 h-7 bg-blue-500 rounded-full"></div>
            <div className="w-7 h-7 bg-yellow-500 rounded-full"></div>
          </div>
        </div>
      </form>
      <div className="divider"></div>
      <div className="flex justify-center md:justify-end">
        <div className="flex gap-4 ">
          <button className="rounded-md btn p-2">Cancel</button>
          <button className="rounded-md btn btn-primary px-2 ">Next</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
