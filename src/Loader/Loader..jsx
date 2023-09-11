import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="h-[70vh] flex flex-col justify-center items-center 
    ">
      <RingLoader color="#42a6ad" size={120} />
    </div>
  );
};

export default Loader;
