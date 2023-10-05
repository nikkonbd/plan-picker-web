import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import book1 from "../../../assets/Images/book1.jpg";
import book2 from "../../../assets/Images/book2.png";
import book3 from "../../../assets/Images/book3.png";

const MorePlan = () => {
  const [scheduleDetails, setScheduleDetails] = useState([]);

  useEffect(() => {
    fetch("https://plan-picker-server-production-96ce.up.railway.app/plans")
      .then((res) => res.json())
      .then((data) => setScheduleDetails(data));
  }, []);

  return (
    <>
      <div
        className="hero h-[300px] mb-16"
        style={{
          backgroundImage:
            "url(https://isaless.wpenginepowered.com/wp-content/uploads/2021/07/ISS_Blog-Feature-Channel-Partner_v1_07-13-21.png)",
        }}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-semibold text-[#5EBEC4]">
              Learn More About PlanPicker!
            </h2>
            <p className="pt-4">
              Share your Plan Availability, Schedule as a Team and Keep
              Prospects Engaged.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 my-20 mx-auto md:px-0 md:w-10/12">
        {scheduleDetails.map((plan, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-center mt-12">
            <div>
              <div className="text-center md:text-start">
                <h2 className="text-4xl font-medium">{plan.title}</h2>
                <p className="py-4 lg:w-[500px] ">{plan.description}</p>
              </div>
            </div>
            <div>
              <img
                className="rounded-md w-full h-full md:h-[400px]"
                src={plan.img}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MorePlan;
