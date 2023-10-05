import { Button } from "@material-tailwind/react";
import Login from "../login/Login";
import { Link } from "react-router-dom";

const StayConnectedSection = () => {
  return (
    <div className="my-20 py-10 bg-gradient-to-r from-teal-200 to-teal-500">
      <div className="py-16">
        <div className="lg:w-1/2 text-white text-center mx-auto space-y-5">
          <h1 className="text-3xl md:text-3xl font-bold">
            Don't leave your prospects, customers, and candidates waiting
          </h1>
          <p>
            Calendly eliminates the scheduling back and forth and helps you hit
            goals faster. Get started in seconds.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-5 justify-center my-10">
          <Login></Login>
          <Link to="/contact-sales">
            <Button className="block" color="white">
              Contact sales
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StayConnectedSection;
