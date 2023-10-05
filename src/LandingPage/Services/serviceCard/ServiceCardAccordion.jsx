import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const ServiceCardAccordion = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl font-medium">Service According Policy</h2>
        <p>
          In a way that is suitable or right for the situation: When we receive
          your <br /> instructions we will act accordingly.
        </p>
      </div>
      <div className="pt-12 text-[#61677A]">
        <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
          <AccordionHeader
            className="text-2xl hover:text-[#5EBEC4]"
            onClick={() => handleOpen(1)}>
            Core Features!
          </AccordionHeader>
          <AccordionBody>
            A product's core feature is its more basic function. If the product
            is a chair, then its core feature is to give the customer a place to
            sit. Any additional features, like cushions or a reclining option,
            are considered augmented features.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
          <AccordionHeader
            className="text-2xl hover:text-[#5EBEC4]"
            onClick={() => handleOpen(2)}>
            Teams!
          </AccordionHeader>
          <AccordionBody>
            Plan-Picker Teams is a proprietary business communication platform
            developed by Microsoft, as part of the Plan-Picker 365 family of
            products. Teams primarily competes with the similar service Slack,
            offering workspace chat and videoconferencing, file storage and
            application integration.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
          <AccordionHeader
            className="text-2xl hover:text-[#5EBEC4]"
            onClick={() => handleOpen(3)}>
            Customizations!
          </AccordionHeader>
          <AccordionBody>
            Customization is done by the user. Users are asked to identify their
            preferences and they are then shown things that they prefer. For
            example, when customers sign up for Netflix, the service asks users
            to select a few shows they like and then displays a list of options
            based on those choices. A custom or customized design is something
            built to a specific order. A fitting example of custom design is a
            'custom-made wedding gown' where the dress is created as directed by
            the bride-to-be. The client usually gives the directions or asks the
            designer for their suggestion to create something unique.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
          <AccordionHeader
            className="text-2xl hover:text-[#5EBEC4]"
            onClick={() => handleOpen(4)}>
            Integrations!
          </AccordionHeader>
          <AccordionBody>
            At the simplest level, integration is the process of combining two
            or more things to create a whole. For businesses, the term
            integration often refers to software or system integration, which
            means bringing together multiple business systems to operate as a
            collaborative unit.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} animate={CUSTOM_ANIMATION}>
          <AccordionHeader
            className="text-2xl hover:text-[#5EBEC4]"
            onClick={() => handleOpen(5)}>
            Business Support!
          </AccordionHeader>
          <AccordionBody>
            Join our mailing list for the latest updates on public sector
            support for businesses in Scotland, including grants, funding,
            training, innovation, international trade, net zero, events and
            more.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
};

export default ServiceCardAccordion;
