import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import img from "../../assets/Images/FaQ.jpg";
import Lottie from "lottie-react";
import faq from "../../../public/faq.json";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
const SecondHero = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div id="faqHome">
        <div data-aos="fade-down" className="text-center px-4 md:px-0">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#61677A]">
            Frequently asked questions <br />{" "}
            <span className="text-[#42a6ad]">(FAQ)</span>
          </h2>
          <p className="pt-4 text-base text-[#61677A]">
            A frequently asked questions list is often used in articles,
            websites, email lists, and online forums where{" "}
            <br className="hidden md:block" /> common questions tend to recur,
            for example through posts or queries by{" "}
            <br className="hidden md:block" /> new users related to common
            knowledge gaps.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="flex justify-center flex-col-reverse my-10 md:flex-row md:gap-10 md:px-0 items-center bg-[#5ebdc444] rounded-xl"
        >
          <div className="w-full p-10 ">
            <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-xl hover:text-[#42a6ad] text-[#61677A]"
              >
                What are Plan Picker apps?
              </AccordionHeader>
              <AccordionBody className="text-base shadow-lg">
                Plan Picker apps let you leverage scheduling automation wherever
                you are on the web via browser extensions, or while you’re
                on-the-go via mobile apps.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-xl hover:text-[#42a6ad] text-[#61677A]"
              >
                What are Plan Picker integrations?
              </AccordionHeader>
              <AccordionBody className="text-base shadow-lg">
                Integrations let you use Plan Picker alongside other tools and
                services. By leveraging an integration, your meeting information
                and scheduling data can sync directly with other tools in your
                tech stack to eliminate additional work. Choose from the
                integrations on this page that will help automate your work. If
                a more enhanced customization is needed, you can do more using
                the Plan Picker API, or utilize our Workflows tool to optimize
                your own scheduling workflows.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="text-xl hover:text-[#42a6ad] text-[#61677A]"
              >
                How do I install and use integrations?
              </AccordionHeader>
              <AccordionBody className="text-base shadow-lg ">
                To install an app or connect an integration, find the tool you
                need in the integrations directory. Click “Add integration” and
                follow the prompts to install. Some integrations will be
                installed directly within Calendly, while others prompt you to
                open their tools first. You can also find apps and integrations
                directly in your Calendly account under “Integrations.”
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
              <AccordionHeader
                onClick={() => handleOpen(4)}
                className="text-xl hover:text-[#42a6ad] text-[#61677A]"
              >
                Want to build a Plan Picker integration? Learn about our API.
              </AccordionHeader>
              <AccordionBody className="text-base shadow-lg">
                You can use our APIs to build integrations that connect Calendly
                to your tools. Visit our Developer Portal to find more
                information about building to our APIs.
              </AccordionBody>
            </Accordion>
          </div>
          <div className="w-full">
            {/* <img
              src={img}
              alt="Image Here"
              className="w-full p-10 md:mx-auto transition hover:scale-110 hover:duration-500 "
            /> */}
            <Lottie animationData={faq} loop={true} className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondHero;
