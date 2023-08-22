import React from "react";

const Profile = () => {
  return (
    <div className="mx-4 md:mx-12">
      <p className="ms-10 mt-4 text-2xl mb-2">Welcome Ali H.</p>
      <div className="">
        <div className="flex items-center ms-2">
          <img
            className="w-32 rounded-full ms-8 me-5"
            src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Mashrafe_Bin_Mortaza_%28cropped%29.jpg"
            alt=""
          />
          <div>
            <div>
              <p className="text-sm border-[1px] rounded-2xl border-blue-gray-600 p-1 ps-2 w-[41.5%] mb-2">
                Upload Image
              </p>
            </div>
            <p className="text-blue-gray-400">
              JPG, GIF OR PNG. MAX size of 5mb
            </p>
          </div>
        </div>

        <p className="font-bold text-sm ms-10">Name</p>
        <input
          className="mt-2 ps-3 ms-10 w-96 h-9 border-[1px] border-blue-gray-400 rounded-2xl"
          type="text"
          name=""
          id=""
          placeholder="Ali Hasan Mashrafi"
        />
        <p className="mt-6 ms-10 font-bold text-sm">Language</p>
        <select
          className="mt-2 ms-10 ps-3 w-96 border-[1px] border-blue-gray-400 rounded-2xl h-9"
          name="language"
          id="language">
          <option value="">English</option>
          <option value="">Bangla</option>
          <option value="Arabic">Arabic</option>
          <option value="Hindi">Hindi</option>
        </select>
        <div className="flex">
          <div>
            <p className="mt-6 ms-10 font-bold text-sm">Data Format</p>
            <select
              className="mt-2 ms-10 ps-3 border-[1px] border-blue-gray-400 rounded-2xl h-9"
              name="language"
              id="language">
              <option value="">MM/DD/YYYY</option>
              <option value="">DD/MM/YYYY</option>
            </select>
          </div>
          <div>
            <p className="mt-6 ms-10 font-bold text-sm">Time Format</p>
            <select
              className="mt-2 ms-10 ps-3 w-[10.4rem] border-[1px] border-blue-gray-400 rounded-2xl h-9"
              name="language"
              id="language">
              <option value="">12h (am/pm)</option>
              <option value="">24h</option>
            </select>
          </div>
        </div>
        <div>
          <p className="mt-6 ms-10 font-bold text-sm">Country</p>
          <select
            className="mt-2 ms-10 ps-3 w-96 border-[1px] border-blue-gray-400 rounded-2xl h-9"
            name="language"
            id="language">
            <option value="">Bangladesh</option>
            <option value="">India</option>
            <option value="">Philippian</option>
          </select>
        </div>
        <div>
          <p className="mt-6 ms-10 font-bold text-sm">Time Zone</p>
          <select
            className="mt-2 ms-10 ps-3 w-96 border-[1px] border-blue-gray-400 rounded-2xl h-9"
            name="language"
            id="language">
            <option value="">Asia/Dhaka</option>
            <option value="">India, Sri Lanka Time</option>
          </select>
        </div>
      </div>
      <button className="my-4 ms-10 bg-blue-700 text-white p-2 rounded-3xl">
        Save Change
      </button>
      <button className="ms-3 bg-red-500 text-white p-2 rounded-3xl">
        Cancel
      </button>
    </div>
  );
};

export default Profile;
