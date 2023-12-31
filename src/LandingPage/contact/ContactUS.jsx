import { Toaster, toast } from "react-hot-toast";
import EventPage from "../../component/EventPage";
import Event from "./Event";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Contact from "./Contact";
import { Helmet } from "react-helmet-async";

const ContactUS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r4pcuge",
        "template_6lcz4sg",
        form.current,
        "Isga3c42NwkRdKHwi"
      )
      .then(
        (result) => {
          toast.success("Email send Successfuly");
          e.target.reset();
        },
        (error) => {
          toast.error("An Accoured Error");
        }
      );
  };
  return (
    <>
      <Helmet>
        <title>ContactUs || Plan Picker</title>
      </Helmet>
      <Contact></Contact>
      <div className="max-w-[2520px] mx-auto lg:px-20 xl:px-28 md:px-10 px-4">
        <div className="text-[#61677A]">
          <div>
            <h2 className="pt-20 text-4xl font-semibold text-center">
              Contact <span className="text-[#5EBEC4]">Us</span>
            </h2>
            <p className="text-center">
              Do you need changes please contact Us!
            </p>
          </div>
          <div className="flex flex-col items-center gap-10 pb-20 mt-10 md:flex-row md:gap-10">
            <div className="w-full px-4 md:px-0 mx-auto space-y-2">
              <div>
                <h2 className="text-4xl font-semibold ">Get in Touch</h2>
                <h2 className="text-xl py-3">Let's Chat Us</h2>
                <p className="text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium, modi accusantium ipsum corporis quia asperiores
                  dolorem nisi corrupti eveniet dolores ad maiores repellendus
                  enim autem omnis fugiat perspiciatis? Ad, veritatis.
                </p>
                <p className="text-base pt-4">New York, 94126, United States</p>
                <p className="text-base py-2">+ 01 234 567 89</p>
                <p className="text-base">admin@planpicker.com</p>
              </div>
            </div>
            <div className="w-full mr-6 md:mr-0">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col w-screen px-4 space-y-3 md:w-full md:px-0 ">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter Your Name"
                  className="p-3 text-[#5EBEC4] bg-transparent border-2 rounded-md border-[#5ebdc45e] focus:outline-none"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="name@gmail.com"
                  className="p-3 text-[#5EBEC4] bg-transparent border-2 rounded-md border-[#5ebdc45e] focus:outline-none"
                />
                <textarea
                  name="message"
                  className="p-3 text-[#5EBEC4] bg-transparent border-2 rounded-md border-[#5ebdc45e] focus:outline-none"
                  placeholder="Message"
                  rows="8"></textarea>
                <button className="flex justify-center items-center w-full px-6 py-2 mx-auto my-8 font-bold text-white duration-300 rounded-md bg-gradient-to-b from-[#5EBEC4] to-[#42a6ad]">
                  Send Message
                </button>
                <Toaster />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUS;
