import EventPage from "../../component/EventPage";
import Event from "./Event";
import Event2 from "./Event2";

const ContactUS = () => {
  return (
    <>
      <div>
        <h2 className="text-6xl text-center pt-20">
          Contact <span className="text-secondary">Us</span>
        </h2>
        <p className="text-center">Do you need changes please contact Us!</p>
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:gap-10 mt-10">
        <div className=" w-full text-center mx-auto flex flex-col items-center justify-center space-y-2 ">
          <h2 className="text-5xl font-bold ">Get in Touch</h2>
          <h2 className="text-4xl font-semibold">Let's Chat Us</h2>
          <p className="text-xl md:text-2xl">
            Fill in the form to start a conversation
          </p>
        </div>
        <div className=" w-full">
          <form className="flex flex-col w-screen md:w-full px-6 md:px-20 space-y-3 ">
            <input
              type="text"
              name="from_name"
              placeholder="Enter Your Name"
              className="p-3 bg-transparent  border-2 rounded-md  text-black focus:outline-none shadow-lg"
            />
            <input
              type="email"
              name="from_email"
              placeholder="name@gmail.com"
              className="p-3 bg-transparent border-2 rounded-md  text-black focus:outline-none  shadow-lg"
            />
            <textarea
              name="message"
              className="p-3 bg-transparent border-2 rounded-md  text-black focus:outline-none  shadow-lg"
              placeholder="Message"
              rows="8"></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300  font-bold">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="mx-4 md:mx-12">
        <Event></Event>
      </div>
      <div className="mx-4 md:mx-12">
        <Event2></Event2>
      </div>
      <div className="mx-4 md:mx-12">
        <EventPage></EventPage>
      </div>
    </>
  );
};

export default ContactUS;
