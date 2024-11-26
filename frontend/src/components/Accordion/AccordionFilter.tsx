"use client";
import React, { useState } from "react";
import { AccordionFilterProps } from "@/types/generic";

export default function AccordionFilter({
  title,
  properties,
  state,
  setState,
  isOpen,
  toggleAccordion,
}: AccordionFilterProps & {
  isOpen: boolean;
  toggleAccordion: () => void;
}) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleFilter = (property: string) => {
    if (!Array.isArray(state)) {
      console.error("Error: el estado no es un array:", state);
      return;
  }
    setAccordionOpen(!accordionOpen);
    if (state.includes(property)) {
      setState(state.filter((item: string) => item !== property));
    } else {
      setState([...state, property]);
    }
  };

  return (
    <div className="my-4 align-center justify-center text-white w-full">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full lg:px-2 px-5"
      >
        <div className="flex items-center justify-center space-x-4 ">
          <h3 className="font-poppins lg:text-2xl text-lg text-white font-medium pt-5 pb-4 ml-1">
            {title}
          </h3>
        </div>

        <svg
          className="fill-white shrink-0 ml-8 lg:w-7 lg:h-7 w-5 h-5 transition-transform duration-300 ease-out"
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Línea horizontal (siempre visible) */}
          <rect
            y="10"
            width="24"
            height="2"
            rx="1"
            className="origin-center"
          />
          {/* Línea vertical (visible solo cuando está contraído) */}
          <rect
            x="10"
            height="24"
            width="2"
            rx="1"
            className={`origin-center transition-transform duration-300 ease-out ${isOpen ? "scale-0" : "scale-100"
              }`}
          />
        </svg>
      </button>

      <div
        className={`grid w-full overflow-hidden transition-all duration-300 ease-in-out text-white text-sm mt-1 lg:px-2 px-5 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <ol className="overflow-hidden">
          {properties &&
            properties.map((property, index) => (
              <li
                key={index}
                className="flex justify-between lg:py-4 py-2 ml-1 font-poppins lg:text-xl font-normal text-base"
              >
                <label htmlFor={property}>{property}</label>
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  name={property}
                  value={property}
                  checked={state.includes(property)}
                  onChange={() => handleFilter(property)}
                  className="hidden" // Oculta el checkbox real
                />
                <div
                  className={`w-5 h-5 border-2 rounded-md flex items-center justify-center cursor-pointer
      ${state.includes(property) ? ' text-textColor3-500' : 'bg-transparent border-white'} 
      relative`}
                  onClick={() => handleFilter(property)}
                >
                  {state.includes(property) && (
                    <span className="text-xl">✓</span> // Palomita dentro de la casilla
                  )}
                </div>
              </li>
            ))}
        </ol>
      </div>

      <div
        className={`h-[1px] mt-3 bg-borderpink transition-all duration-300 ease-in-out ${isOpen ? "transform translate-y-0" : "transform translate-y-[-100%]"
          }`}
      />
    </div>
  );
}