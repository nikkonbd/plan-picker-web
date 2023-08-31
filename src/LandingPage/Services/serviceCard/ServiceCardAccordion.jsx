import React from 'react';
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
        <div className='pt-12 text-[#61677A]'>
            <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(1)}>Core Features!</AccordionHeader>
                <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                Teams!
                </AccordionHeader>
                <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                Customizations!
                </AccordionHeader>
                <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                Integrations!
                </AccordionHeader>
                <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 5} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                Business Support!
                </AccordionHeader>
                <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} animate={CUSTOM_ANIMATION}>
                <AccordionHeader onClick={() => handleOpen(6)}>
                What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                We&apos;re not always in the position that we want to be at. We&apos;re constantly
                growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
        </div>
    );
};

export default ServiceCardAccordion;