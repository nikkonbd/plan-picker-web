import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import book1 from "../../../assets/Images/book1.jpg";
import book2 from "../../../assets/Images/book2.png";
import book3 from "../../../assets/Images/book3.png";

const MorePlan = () => {

  const [scheduleDetails, setScheduleDetails] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:5000/plans')
    .then(res => res.json())
    .then(data => 
      setScheduleDetails(data))
  },[])

  return (
    <div className="px-4 md:px-0 md:w-10/12 mx-auto">
      {scheduleDetails.map((plan, idx) => (
        <div
          key={idx}
          className="flex md:pb-14 flex-col-reverse items-center justify-between gap-4 mt-12 md:flex lg:flex lg:flex-row md:flex-row">
          <div data-aos="fade-up-right">
            <div className="text-center md:text-start">
              <h2 className="text-4xl font-medium">{plan.title}</h2>
              <p className="py-4 lg:w-[500px] ">{plan.description}</p>
            </div>
          </div>
          <div data-aos="fade-up-left">
            <img
              className="rounded-xl w-full h-full md:h-[400px] md:w-[600px]"
              src={plan.img}
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MorePlan;
