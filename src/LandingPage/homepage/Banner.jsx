import { Link } from "react-router-dom";
import img from "../../assets/dd.jpg";
import img1 from "../../assets/pp.jpg";

const Banner = () => {
  // const users = useSelector((state) => console.log(state.auth.user));
  return (
    <div className="">
      <div className="text-center pt-20">
        <h2 className="text-3xl md:text-5xl text-[#61677A] cursor-pointer font-bold">
          <span className="text-[#5EBEC4]">Welcome to Easy</span> Scheduling{" "}
          <br /> Ahead For Your Needs.
        </h2>
        <p className="md:text-base text-[#61677A] cursor-pointer pt-4 pb-10">
          Plan Picker is your scheduling platform for eliminating the
          back-and-forth emails <br /> to find the perfect time — and so much
          more.
        </p>
        <button className="mt-1 rounded-lg bg-[#5EBEC4] px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-[#42a6ad] sm:mt-0 sm:w-auto sm:shrink-0 mr-4">
          Sign up free now
        </button>
        <Link to="/more-plan">
          <button className="mt-1 rounded-lg border px-4 py-3 text-sm font-bold uppercase tracking-wide hover:text-white transition-none hover:bg-[#5EBEC4] text-[#42a6ad] border-[#5EBEC4] sm:mt-0 sm:w-auto sm:shrink-0">
            Learn more plan
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-14">
        <div className="md:columns-md lg:columns-xl bg-[#f6f9fc] rounded-md transition duration-300 ease-in-out hover:scale-92">
          <h2 className="text-2xl text-[#5EBEC4] text-center py-6 font-semibold">
            Book & schedule with Plan picker
          </h2>
          <img
            className="w-[420px] md:h-[250px] mx-auto rounded-md"
            src={img}
            alt=""
          />
        </div>
        <div className="columns-md mt-8 md:mt-0 md:columns-3xl lg:columns-4xl xl:columns-4xl bg-[#f6f9fc] rounded-md transition duration-300 ease-in-out hover:scale-92">
          <div className="text-center">
            <img
              className="md:h-[362px]"
              src="https://i.stack.imgur.com/PwVy7.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
