import React, { useContext, useEffect, useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { submitFormData } from "../../store/features/formSubmission/formSubmissionSlice";
import { setObjectData } from "../../store/features/objectData/ObjectDataSlice";
import axios from "axios";

import { v4 as uuidv4 } from "uuid";

// import ZoomIntegration from "../../integration/zoom/ZoomIntegration";

import TimeSelect from "./TimeSelect";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";

const Event = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [eventColor, setEventColor] = useState("");
  const [sanitizedValue, setSanitizedValue] = useState("");
  const { user } = useContext(AuthContext);

  const uniqueId = uuidv4();

  const dispatch = useDispatch();
  // const { isLoading, isSuccess, error } = useSelector(
  //   (state) => state.formSubmission
  // );

  const handleChange = (html) => {
    const sanitizedText = removePTags(html);
    setValue(html);
    setSanitizedValue(sanitizedText);
  };

  const handleCancel = () => {
    navigate("/dashboard/schedule");
  };

  const handleNextForm = () => {
    // Store the data in an object
    const formData = {
      eventName,
      location,
      description: sanitizedValue,
      eventLink,
      id: uniqueId,
      email: user?.email,
    };

    dispatch(setObjectData(formData));

    navigate("/dashboard/one-on-one-form/event_set_edit_form");
  };

  // Utility function to remove <p> tags
  const removePTags = (content) => {
    const div = document.createElement("div");
    div.innerHTML = content;
    return div.textContent || div.innerText || "";
  };

  return (
    <div className="py-6 md:max-w-6xl">
      <form className="mt-6">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="flex gap-2">
            <div className="bg-red-400 rounded-full w-7 h-7"></div>
            <div>
              <h2 className="text-2xl">
                Which type event do you want to create?
              </h2>
              <p className="text-gray">Event Information Billow</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 md:justify-between">
            <button
              onClick={() => handleCancel()}
              className="px-3 rounded-md btn bg-[#61677A] hover:bg-[#464955] text-white">
              Cancel
            </button>
            <button
              type="text"
              onClick={() => handleNextForm()}
              className="bg-[#5EBEC4] hover:bg-[#42a6ad] duration-200 text-white px-3 rounded-md btn">
              Next
            </button>
          </div>
        </div>
        <div className="divider"></div>

        <div className="gap-6 md:flex">
          <div className="w-full max-w-md form-control">
            <label className="label">
              <span className="flex items-center gap-3 font-bold label-text">
                Event Name * <BiInfoCircle />
              </span>
            </label>
            <input
              required
              type="text"
              placeholder="Event Name"
              className="w-full max-w-md font-semibold input input-bordered"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>
          <div className="w-full max-w-sm form-control">
            <label className="label">
              <span className="flex items-center gap-3 font-bold label-text">
                Location <BiInfoCircle />
              </span>
            </label>
            <select
              className="select select-bordered"
              value={location}
              required
              onChange={(e) => setLocation(e.target.value)}>
              <option disabled selected className="text-gray-200">
                Add Location
              </option>
              <option>Audio Call</option>
              <option>Video Call</option>
            </select>
          </div>
        </div>
        <div className="form-control w-full md:max-w-[855px] h-[300px]">
          <label className="label">
            <span className="flex items-center gap-3 font-bold label-text">
              Description * <BiInfoCircle></BiInfoCircle>
            </span>
          </label>
          <ReactQuill
            required
            value={value}
            onChange={handleChange}
            className="h-[300px]"
          />
        </div>
        <div className="gap-6 md:flex">
          <div className="w-full max-w-sm mt-10 form-control">
            <label className="label">
              <span className="flex items-center gap-3 font-bold label-text">
                Which type meeting do you want? <BiInfoCircle />
              </span>
            </label>
            <select
              className="select select-bordered"
              value={location}
              onChange={(e) => setLocation(e.target.value)}>
              <option>Select One</option>
              <option>Google Meet</option>
              <option>Zoom</option>
              <option>Skype</option>
              <option>WhatsApp</option>
              <option>Microsoft Team</option>
              <option>Google Hangouts</option>
            </select>
            <p>Google Meet and Zoom for dynamic link</p>
          </div>
          <div className="w-full mt-10 form-control md:max-w-4xl">
            <label className="label">
              <span className="flex items-center gap-3 font-bold label-text">
                Event Link * <BiInfoCircle />
              </span>
            </label>
            <input
              type="text"
              placeholder="Skype, Whatsapp, Microsoft, Hangouts for link here"
              className="w-full max-w-md font-semibold input input-bordered"
              value={eventLink}
              onChange={(e) => setEventLink(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Event;
