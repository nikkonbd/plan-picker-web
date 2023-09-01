import { Button } from "@material-tailwind/react";

const StayConnectedSection = () => {
  return (
    <div className="my-20 py-10 bg-gradient-to-r from-[#5EBEC4] to-[#42a6ad]">
      <div>
        <div className="lg:w-1/2 text-white text-center mx-auto space-y-5">
          <h1 className="text-2xl md:text-3xl font-bold">
            Don't leave your prospects, customers, and candidates waiting
          </h1>
          <p>
            Calendly eliminates the scheduling back and forth and helps you hit
            goals faster. Get started in seconds.
          </p>
        </div>
        <div className="flex md:flex-row flex-col gap-5 justify-center my-10">
          <Button className="block" color="blue">
            Sing up for free
          </Button>
          <Button className="block" color="white">
            Contact sales
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StayConnectedSection;
