// import React from "react";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

const ConfirmedSchedule = () => {
  const { user } = useContext(AuthContext);
  const insertedId = useSelector(
    (state) => state.confirmedEventData.insertedId
  );
  const events = useSelector((state) => state.confirmedEventData);
  const { isLoading, isSuccess, error } = useSelector(
    (state) => state.confirmedEventData
  );

  console.log(events?.eventData[0]);
  const {
    eventName,
    selectedDate,
    timeDurationRange,
    hostName,
    hostEmail,
    email,
    location,
    timeZone,
    name,
  } = events?.eventData[0];

  
  const isoDateTime = selectedDate;
  // Create a Date object from the ISO 8601 date and time string
  const date = new Date(isoDateTime);
  // Format the date and time using toLocaleString
  const formattedDateTime = date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Use 12-hour format
  });

  return (
    <div>
      {isLoading ? (
        <div className="flex items-center justify-center">Loading...</div>
      ) : (
        <>
          <div className="flex flex-row justify-center">
            <div
              className="inline-block bg-[#5ebdc433] px-8 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform border rounded-lg main sm:my-8 sm:max-w-xl bg-default dark:bg-muted border-booker border-booker-width sm:w-full sm:py-8 sm:align-middle"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline">
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-green-600">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="mt-6 mb-8 text-center last:mb-0">
                <h3
                  className="text-2xl font-semibold leading-6 text-emphasis"
                  data-testid=""
                  id="modal-headline">
                  This meeting is scheduled
                </h3>
                <div className="mt-3">
                  <p className="text-default">
                    We sent an email with a calendar invitation with the details
                    to everyone.
                  </p>
                </div>
                <div className="grid grid-cols-3 pt-8 mt-8 text-left border-t border-subtle text-default rtl:text-right">
                  <div className="font-medium">What:-</div>
                  <div
                    className="col-span-2 mb-6 last:mb-0"
                    data-testid="booking-title">
                    {`${eventName} between ${user?.displayName} and ${name}`}
                  </div>
                  <div className="font-medium">When:-</div>
                  <div className="col-span-2 mb-6 last:mb-0">
                    <div className="">
                      {`${formattedDateTime}, ${timeDurationRange}`}
                    </div>
                    <span className="text-bookinglight">{timeZone}</span>
                  </div>
                  <div className="font-medium">Who:-</div>
                  <div className="col-span-2 text-left last:mb-0">
                    <span data-testid="booking-host-name" className="mr-2">
                      {hostName}
                    </span>
                    <div className="font-medium inline-flex items-center justify-center rounded gap-x-1 bg-info py-1 px-1.5 text-xs leading-3 text-white">
                      Host
                    </div>
                    <p className="text-default">{hostEmail}</p>
                    <div className="mb-3 pt-2 text-left last:mb-0">
                      <p data-testid="attendee-name-Himangsu roy">{name}</p>
                      <p data-testid="attendee-email-himur98@gmail.com">
                        {email}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 font-medium">Where:-</div>
                  <div className="col-span-2 mt-3">
                    {`${location}: Confirmation email you get Meeting URL.`}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="mb-8 border-subtle" />
          <div className="text-center last:pb-4">
            <span className="text-emphasis ltr:mr-2 rtl:ml-2">
              Need to make a change?
            </span>
            <span className="inline text-default">
              <span className="font-medium" data-testid="reschedule-link">
                <a href="/reschedule/hDuSrsZGceAwWNgvgUCMbL">Reschedule</a>
              </span>
              <span className="mx-2">or</span>
            </span>
            <Link to={"/"}>
              <button data-testid="cancel" className="text-default font-medium">
                Home
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default ConfirmedSchedule;
