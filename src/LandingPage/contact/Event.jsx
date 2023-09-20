import React, { useContext, useEffect, useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setObjectData } from "../../store/features/objectData/ObjectDataSlice";
import { v4 as uuidv4 } from "uuid";
import { AuthContext } from "../../providers/AuthProvider";


const Event = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [location, setLocation] = useState("");
  const [conferenceType, setConferenceType] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventLink, setEventLink] = useState("");
  const [sanitizedValue, setSanitizedValue] = useState("");
  const { user, monthName } = useContext(AuthContext);

  const uniqueId = uuidv4();
  const dispatch = useDispatch();

  // Validation state variables
  const [eventNameError, setEventNameError] = useState("");
  const [eventLinkError, setEventLinkError] = useState("");
  const [eventConferenceError, setEventConferenceError] = useState("");
  const [eventLocationError, setEventLocationError] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);

  // Track whether the event link input is focused
  const [eventLinkFocused, setEventLinkFocused] = useState(false);

  // Function to validate the Event Name field
  const validateEventName = (name) => {
    if (name.trim() === "") {
      setEventNameError("Event Name is required");
      return false;
    }
    setEventNameError("");
    return true;
  };

  // Function to validate the Event Link field
  const validateEventLink = (link) => {
    if (location === "Google Meet" || location === "Zoom") {
      // No validation needed for Google Meet and Zoom
      setEventLinkError("");
      return true;
    }

    if (link.trim() === "") {
      setEventLinkError("Event Link is required");
      return false;
    }

    setEventLinkError("");
    return true;
  };

  // Function to validate the conferenceType
  const validateConferenceType = (conferenceType) => {
    if (conferenceType.trim() === "") {
      setEventConferenceError("Conference Type is required");
      return false;
    }
    setEventConferenceError("");
    return true;
  };

  // Function to validate the location
  const validateLocation = (locationValue) => {
    if (locationValue.trim() === "") {
      setEventLocationError("Location is required");
      return false;
    }
    setEventLocationError("");
    return true;
  };

  // Function to handle changes in Event Name input
  const handleEventNameChange = (e) => {
    const name = e.target.value;
    setEventName(name);
    validateEventName(name);
  };

  // Function to handle changes in Event Name input
  const handleEventConferenceChange = (e) => {
    const conferenceTypeValue = e.target.value;
    setConferenceType(conferenceTypeValue);
    validateConferenceType(conferenceTypeValue);
  };

  // Function to handle changes in Event Name input
  const handleEventLocationChange = (e) => {
    const locationValue = e.target.value;

    // Disable the event link input for "Google Meet" and "Zoom"
    // const isDisabled =
    //   locationValue === "Google Meet" || locationValue === "Zoom";
    // setEventLink("");
    // document.getElementById("eventLinkInput").disabled = isDisabled;

    setLocation(locationValue);
    validateLocation(locationValue);

    // Automatically focus on the event link input for other locations
    if (!isDisabled) {
      document.getElementById("eventLinkInput").focus();
    }
  };

  // Function to handle changes in Event Link input
  const handleEventLinkChange = (e) => {
    const link = e.target.value;
    setEventLink(link);

    // Validate the event link only when it's focused and location is not "Google Meet" or "Zoom"
    if (eventLinkFocused && location !== "Google Meet" && location !== "Zoom") {
      validateEventLink(link);
    } else {
      // Clear any previous validation errors
      setEventLinkError("");
    }
  };

  // Function to handle focus on Event Link input
  const handleEventLinkFocus = () => {
    setEventLinkFocused(true);
    validateEventLink(eventLink); // Validate when focused
  };

  // Function to handle blur on Event Link input
  const handleEventLinkBlur = () => {
    setEventLinkFocused(false);
  };

  // Function to handle changes in Quill editor
  const handleChange = (html) => {
    const sanitizedText = removePTags(html);
    setValue(html);
    setSanitizedValue(sanitizedText);
  };

  // Utility function to remove <p> tags
  const removePTags = (content) => {
    const div = document.createElement("div");
    div.innerHTML = content;
    return div.textContent || div.innerText || "";
  };

  //Function to cancel form
  const handleCancel = () => {
    navigate("/dashboard/schedule");
  };

  // Function to handle the "Next" button click
  const handleNextForm = () => {
    // Validate all fields before proceeding
    const isNameValid = validateEventName(eventName);
    const isLinkValid = validateEventLink(eventLink);
    const isConferanceValid = validateConferenceType(conferenceType);
    const isLocationValid = validateLocation(location);
    

    if (isNameValid && isLinkValid && isConferanceValid && isLocationValid) {
      // Store the data in an object
      const formData = {
        eventName,
        conferenceType,
        location,
        monthName,
        description: sanitizedValue,
        eventLink,
        id: uniqueId,
        email: user?.email,
        name: user?.displayName,
      };

      dispatch(setObjectData(formData));

      navigate("/dashboard/one-on-one-form/event_set_edit_form");
    }
  };

  // Effect to enable/disable the "Next" button based on form validity
  useEffect(() => {
    setFormIsValid(
      !eventNameError && !eventConferenceError && !eventLocationError
    );
  }, [eventNameError, eventConferenceError, eventLocationError]);

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
              className={`bg-[#5EBEC4] hover:bg-[#42a6ad] duration-200 text-white px-3 rounded-md btn ${
                !formIsValid ? "disabled:opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={!formIsValid}>
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
              onChange={handleEventNameChange}
            />
            {eventNameError && <p className="text-red-500">{eventNameError}</p>}
          </div>

          <div className="w-full max-w-sm form-control">
            <label className="label">
              <span className="flex items-center gap-3 font-bold label-text">
                Conference Type <BiInfoCircle />
              </span>
            </label>
            <select
              className="select select-bordered"
              value={conferenceType}
              required
              onChange={handleEventConferenceChange}>
              <option value="" disabled selected className="text-gray-200">
                Add Conference Type
              </option>
              <option value="Audio Call">Audio Call</option>
              <option value="Video Call">Video Call</option>
            </select>
            {eventConferenceError && (
              <p className="text-red-500">{eventConferenceError}</p>
            )}
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
                Add Location <BiInfoCircle />
              </span>
            </label>
            <select
              className="select select-bordered"
              value={location}
              required
              onChange={handleEventLocationChange}>
              <option value="" disabled selected className="text-gray-200">
                Select One
              </option>
              <option>Google Meet</option>
              <option>Zoom</option>
              <option>Skype</option>
              <option>WhatsApp</option>
              <option>Microsoft Team</option>
              <option>Google Hangouts</option>
            </select>
            <p>Google Meet and Zoom for dynamic link</p>
            {eventLocationError && (
              <p className="text-red-500">{eventLocationError}</p>
            )}
          </div>

          <div className="w-full mt-10 form-control md:max-w-4xl">
            <label className="label">
              <span className="flex items-center gap-3 font-bold label-text">
                Event Link * <BiInfoCircle />
              </span>
            </label>
            <input
              id="eventLinkInput"
              type="text"
              placeholder="Skype, Whatsapp, Microsoft, Hangouts for link here"
              className="w-full max-w-md font-semibold input input-bordered"
              value={eventLink}
              onChange={handleEventLinkChange}
              onFocus={handleEventLinkFocus}
              onBlur={handleEventLinkBlur}
            />
            {eventLinkError && eventLinkFocused && (
              <p className="text-red-500">{eventLinkError}</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Event;
