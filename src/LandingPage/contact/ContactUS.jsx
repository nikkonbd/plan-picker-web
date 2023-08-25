import EventPage from "../../component/EventPage";
import Event from "./Event";
import Event2 from "./Event2";

const ContactUS = () => {
  return (
    <>
      <div>
        <h2 className="pt-20 text-6xl text-center">
          Contact <span className="text-secondary">Us</span>
        </h2>
        <p className="text-center">Do you need changes please contact Us!</p>
      </div>
      <div className="flex flex-col gap-10 mt-10 md:flex-row md:gap-10">
        <div className="flex flex-col items-center justify-center w-full mx-auto space-y-2 text-center ">
          <h2 className="text-5xl font-bold ">Get in Touch</h2>
          <h2 className="text-4xl font-semibold">Let's Chat Us</h2>
          <p className="text-xl md:text-2xl">
            Fill in the form to start a conversation
          </p>
        </div>
        <div className="w-full ">
          <form className="flex flex-col w-screen px-6 space-y-3 md:w-full md:px-20 ">
            <input
              type="text"
              name="from_name"
              placeholder="Enter Your Name"
              className="p-3 text-black bg-transparent border-2 rounded-md shadow-lg focus:outline-none"
            />
            <input
              type="email"
              name="from_email"
              placeholder="name@gmail.com"
              className="p-3 text-black bg-transparent border-2 rounded-md shadow-lg focus:outline-none"
            />
            <textarea
              name="message"
              className="p-3 text-black bg-transparent border-2 rounded-md shadow-lg focus:outline-none"
              placeholder="Message"
              rows="8"></textarea>
            <button className="flex items-center px-6 py-2 mx-auto my-8 font-bold text-white duration-300 rounded-md bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="mx-4 md:mx-12">
        {/* <Event></Event> */}
      </div>
      <div className="mx-4 md:mx-12">
        {/* <Event2></Event2> */}
      </div>
      <div className="mx-4 md:mx-12">
        {/* <EventPage></EventPage> */}
      </div>
    </>
  );
};

export default ContactUS;
