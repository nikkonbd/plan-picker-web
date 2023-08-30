import { Link } from "react-router-dom";
import image from "../../assets/Info_project_schedule_ss.jpg";
import img from "../../assets/dd.jpg";
import img1 from "../../assets/pp.jpg";

const Banner = () => {
  return (
    <div className="md:w-11/12 mx-auto">
      <div className="text-center pt-20">
        <h2 className="text-4xl md:text-6xl font-bold">
          Welcome to Easy Scheduling <br /> Ahead For Your Needs.
        </h2>
        <p className="text-md md:text-xl pt-4 pb-10">
          Plan Picker is your scheduling platform for eliminating the
          back-and-forth emails <br /> to find the perfect time — and so much
          more.
        </p>
        <button className="mt-1 rounded-lg bg-teal-500 px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0 mr-4">
          Sign up free now
        </button>
        <Link to="/more-plan">
          <button className="mt-1 rounded-lg border-2 px-6 py-4 text-sm font-bold uppercase tracking-wide hover:text-white transition-none hover:bg-teal-600 sm:mt-0 sm:w-auto sm:shrink-0">
            Learn more plan
          </button>
        </Link>
      </div>
      <div className="md:flex gap-4 mt-14">
        <div className="columns-md bg-[#e8e6fe] rounded-md">
          <h2 className="text-3xl text-center py-6 font-semibold">
            Book & schedule <br /> with Plan picker
          </h2>
          <img className="w-[380px] mx-auto rounded-md" src={img} alt="" />
        </div>
        <div className="md:columns-3xl bg-[#ffefe7] rounded-md">
          <div className="md:flex gap-10 items-center">
            <img
              className="w-[400px] h-[368px] pt-16 rounded-lg"
              src={img1}
              alt=""
            />
            <div className="text-center md:text-left">
              <h2 className="text-3xl pt-6 md:pt-0 font-semibold">
                Choose <br /> Whatever you <br /> want to book
              </h2>
              <p className="pt-4 pb-10 md:pb-0">
                Plan picker support to book <br /> whatever you want for meeting
                or <br />
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
