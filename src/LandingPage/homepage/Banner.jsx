import image from "../../assets/Info_project_schedule_ss.jpg"


const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-auto md:h-[100vh] flex flex-col md:flex-row items-center justify-center text-center md:text-left py-16 px-6 md:px-12 ">
      <div className="mb-6 md:mb-0 md:mr-12">
        <h1 className="text-3xl md:text-5xl font-semibold text-white mb-4">
          Welcome to Plan Picker
        </h1>
        <p className="text-base md:text-lg text-gray-300 mb-6">
          Effortlessly manage your tasks, events, and appointments.
        </p>
        <button className="px-8 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
          Get Started
        </button>
      </div>

      <div className=" md:block xl:w-1/2">
        <img
          src={image}
          alt="Banner"
          className="rounded-lg "
        />
      </div>
      
    </div>
  );
};

export default Banner;
