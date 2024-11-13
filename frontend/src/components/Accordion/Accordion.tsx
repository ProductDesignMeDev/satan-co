"use client";
import React, { useState, FC } from "react";

interface AccordionProps {
  title: string;
  answer: string;
}

const Accordion: FC<AccordionProps> = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 text-white border-b border-[#ff31ff]">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span className="w-[1022px] text-justify text-white lg:text-lg text-xs font-medium leading-[27px]">
          {title}
        </span>
        <svg
          className="fill-white shrink-0 ml-8 lg:w-4 lg:h-4"
          width="15"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="15"
            height="1"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out lg:w-4 lg:h-[2px] ${
              accordionOpen ? "!rotate-180" : ""
            }`}
          />
          <rect
            y="7"
            width="15"
            height="1"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out lg:w-4 lg:h-[2px] ${
              accordionOpen ? "!rotate-180" : ""
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm mt-1 ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
