import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import image from "../../assets/Info_project_schedule_ss.jpg";
import img from "../../assets/dd.jpg";
import img1 from "../../assets/pp.jpg";

const Banner = () => {
  const users = useSelector((state) => console.log(state.auth.user));
  return (
    <div className="w-10/12 mx-auto sm:px-2 px-4">
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
        <div className="md:columns-md lg:columns-xl bg-[#5ebdc444] rounded-md transition duration-300 ease-in-out hover:scale-90">
          <h2 className="text-2xl text-[#61677A] text-center py-6 font-semibold">
            Book & schedule <br /> with Plan picker
          </h2>
          <img
            className="w-[380px] md:h-[242px] mx-auto rounded-md"
            src={img}
            alt=""
          />
        </div>
        <div className="columns-md md:columns-3xl lg:columns-4xl xl:columns-4xl bg-[#ffefe7] rounded-md transition duration-300 ease-in-out hover:scale-90">
          <div className="md:flex gap-10 items-center">
            <img
              className="w-[300px] md:h-[362px] pt-20 rounded-lg"
              src={img1}
              alt=""
            />
            <div className="text-center md:text-left">
              <h2 className="text-2xl pt-6 text-[#61677A] text-wrap md:pt-0 font-semibold">
                Choose <br /> Whatever you <br /> want to book
              </h2>
              <p className="pt-4 pb-10 text-base md:pb-0 text-[#61677A]">
                Plan picker support to book <br /> whatever you want for meeting
                organize your meeting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
