import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import img from "../../assets/Images/FaQ.jpg";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
const SecondHero = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <>
      <div>
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold pt-24">
            Frequently asked questions <br /> (FAQ)
          </h2>
          <p className="pt-4 text-base md:text-lg">
            A frequently asked questions list is often used in articles,
            websites, email lists, and online forums where <br /> common
            questions tend to recur, for example through posts or queries by{" "}
            <br /> new users related to common knowledge gaps.
          </p>
        </div>
        <div className="flex justify-between flex-col-reverse md:max-w-6xl lg:max-w-7xl my-10 mx-auto md:flex-row gap-2 md:gap-10 px-4 md:px-0 items-center bg-[#ffefe7] rounded-xl">
          <div className="w-full p-10 ">
            <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="text-2xl hover:text-red-300">
                What are Plan Picker apps?
              </AccordionHeader>
              <AccordionBody className="text-2xl text-black shadow-lg">
                Plan Picker apps let you leverage scheduling automation wherever
                you are on the web via browser extensions, or while you’re
                on-the-go via mobile apps.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="text-2xl hover:text-red-300">
                What are Plan Picker integrations?
              </AccordionHeader>
              <AccordionBody className="text-2xl text-black shadow-lg">
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
                className="text-2xl hover:text-red-300">
                How do I install and use integrations?
              </AccordionHeader>
              <AccordionBody className="text-2xl text-black shadow-lg ">
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
                className="text-2xl hover:text-red-300">
                Want to build a Plan Picker integration? Learn about our API.
              </AccordionHeader>
              <AccordionBody className="text-2xl text-black shadow-lg">
                You can use our APIs to build integrations that connect Calendly
                to your tools. Visit our Developer Portal to find more
                information about building to our APIs.
              </AccordionBody>
            </Accordion>
          </div>
          <div className="w-full">
            <img
              src={img}
              alt="Image Here"
              className="w-full p-10 md:mx-auto transition hover:scale-110 hover:duration-500 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondHero;
