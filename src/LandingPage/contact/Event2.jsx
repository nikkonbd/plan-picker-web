import React, { useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitFormData } from "../../store/features/formSubmission/formSubmissionSlice";
import TimeSelect from "./TimeSelect";

const Event2 = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [eventColor, setEventColor] = useState("");
  const [sanitizedValue, setSanitizedValue] = useState("");

  const dispatch = useDispatch();
  const { isLoading, isSuccess, error } = useSelector(
    (state) => state.formSubmission
  );

  const handleChange = (html) => {
    const sanitizedText = removePTags(html);
    setValue(html);
    setSanitizedValue(sanitizedText);
  };

  const handleNextForm = () => {
    // Store the data in an object
    const formData = {
      eventName,
      location,
      description: sanitizedValue,
      eventLink,
      eventColor,
    };

    dispatch(submitFormData(formData));

    console.log(formData); // Display the form data
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
      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <div className="flex gap-2">
          <div className="bg-red-400 rounded-full w-7 h-7"></div>
          <div>
            <h2 className="text-2xl">What event is this Create?</h2>
            <p className="text-gray">Schedule Information Billow</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 md:justify-between">
          <button className="p-2 rounded-md btn">Cancel</button>
          <button
            onClick={() => handleNextForm()}
            className="px-2 rounded-md btn btn-primary "
          >
            Next
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <form className="mt-6">
        <div className="md:flex gap-6">
          <div className="w-full max-w-md form-control">
            <label className="label">
              <span className="flex items-center gap-3 font-bold label-text">
                Event Name * <BiInfoCircle />
              </span>
            </label>
            <input
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
              onChange={(e) => setLocation(e.target.value)}
            >
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
        </div>
        <div className="form-control w-full md:max-w-[855px] h-[300px]">
          <label className="label">
            <span className="flex items-center gap-3 font-bold label-text">
              Description * <BiInfoCircle></BiInfoCircle>
            </span>
          </label>
          <ReactQuill
            value={value}
            onChange={handleChange}
            className="h-[300px]"
          />
        </div>
        <div className="md:flex gap-6">
          <div className="w-full mt-10 max-w-sm form-control">
            <label className="label">
              <span className="flex items-center gap-3 font-bold label-text">
                Which type schedule do you want? <BiInfoCircle />
              </span>
            </label>
            <select
              className="select select-bordered"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option>Select One</option>
              <option>Google Meet</option>
              <option>Zoom</option>
              <option>Skype</option>
              <option>WhatsApp</option>
              <option>Microsoft Team</option>
              <option>Google Hangouts</option>
            </select>
          </div>
          <div className="w-full mt-10 form-control md:max-w-4xl">
            <label className="label">
              <span className="flex items-center gap-3 font-bold label-text">
                Event Link * <BiInfoCircle />
              </span>
            </label>
            <input
              type="text"
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

export default Event2;
