import React from "react";

const Profile = () => {
  return (
    <div className="mx-4">
      <p className="mt-4 mb-2 text-2xl md:ms-10">Welcome Ali H.</p>
      <div className="">
        <div className="flex items-center ms-2">
          <img
            className="w-32 my-4 rounded-full ms-8 me-5 sm:w-24"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Mashrafe_Bin_Mortaza_%28cropped%29.jpg"
            alt=""
          />
          <div>
            <div>
              <p className="text-sm border-[1px] rounded-2xl border-blue-gray-600 p-1 ps-2 w-fit mb-2">
                Upload Image
              </p>
            </div>
            <p className="text-blue-gray-400 me-6">
              JPG, GIF OR PNG. MAX size of 5mb
            </p>
          </div>
        </div>

        <p className="text-sm font-bold md:ms-10">Name</p>
        <input
          className="mt-2 me-6 ps-3 md:ms-10 md:w-96 w-80 h-9 border-[1px] border-blue-gray-400 rounded-2xl"
          type="text"
          name=""
          id=""
          placeholder="Ali Hasan Mashrafi"
        />
        <p className="mt-6 text-sm font-bold md:ms-10">Language</p>
        <select
          className="mt-2 md:ms-10 ps-3 md:w-96 w-80 me-6 border-[1px] border-blue-gray-400 rounded-2xl h-9"
          name="language"
          id="language">
          <option value="">English</option>
          <option value="">Bangla</option>
          <option value="Arabic">Arabic</option>
          <option value="Hindi">Hindi</option>
        </select>
        <div className="md:flex">
          <div>
            <p className="mt-6 text-sm font-bold md:ms-10">Data Format</p>
            <select
              className="mt-2 md:ms-10 ps-3 w-full md:w-[10.4rem]  border-[1px] border-blue-gray-400 rounded-2xl h-9"
              name="language"
              id="language">
              <option value="">MM/DD/YYYY</option>
              <option value="">DD/MM/YYYY</option>
            </select>
          </div>
          <div>
            <p className="mt-6 text-sm font-bold md:ms-10">Time Format</p>
            <select
              className="mt-2 md:ms-10 ps-3 w-full md:w-[10.4rem] border-[1px] border-blue-gray-400 rounded-2xl h-9"
              name="language"
              id="language">
              <option value="">12h (am/pm)</option>
              <option value="">24h</option>
            </select>
          </div>
        </div>
        <div>
          <p className="mt-6 text-sm font-bold md:ms-10">Country</p>
          <select
            className="mt-2 md:ms-10 ps-3 md:w-96 w-80 me-6 border-[1px] border-blue-gray-400 rounded-2xl h-9"
            name="language"
            id="language">
            <option value="">Bangladesh</option>
            <option value="">India</option>
            <option value="">Philippian</option>
          </select>
        </div>
        <div>
          <p className="mt-6 text-sm font-bold md:ms-10">Time Zone</p>
          <select
            className="mt-2 md:ms-10 ps-3 md:w-96 w-80 me-6 border-[1px] border-blue-gray-400 rounded-2xl h-9"
            name="language"
            id="language">
            <option value="">Asia/Dhaka</option>
            <option value="">India, Sri Lanka Time</option>
          </select>
        </div>
      </div>
      <button className="p-2 my-4 text-white px-2 bg-blue-700 md:ms-10 rounded-xl">
        Save Change
      </button>
      <button className="p-2 text-white bg-red-500 ms-3 rounded-xl">
        Cancel
      </button>
    </div>
  );
};

export default Profile;