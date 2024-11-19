"use client";
import React from "react";
import { AccordionFilterProps } from "@/types/generic";

export default function AccordionFilter({ title, properties, state, setState, isOpen, toggleAccordion }: AccordionFilterProps & { isOpen: boolean; toggleAccordion: () => void; }) {
    const handleFilter = (property: string) => {
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
                className="flex justify-between items-center w-full"
            >
                <div className="flex items-center justify-center space-x-4">
                    <h3 className="font-poppins text-base text-white text-lg font-medium leading-[27px] ml-1">
                        {title}
                    </h3>
                </div>

                <svg
                    className={`fill-white transition duration-200 ease-out transform ${isOpen ? "!rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                >
                    <rect
                        y="7"
                        width="15"
                        height="1"
                        rx="1"
                        className={`transition-all duration-200 ease-out lg:w-4 lg:h-[2px]`}
                    />
                    <rect
                        y="7"
                        width="15"
                        height="1"
                        rx="1"
                        className={`transition-all duration-200 ease-out lg:w-4 lg:h-[2px]`}
                    />
                </svg>
            </button>

            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm mt-1 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <ol className="overflow-hidden">
                    {properties &&
                        properties.map((property, index) => (
                            <li key={index} className="flex justify-between py-2 ml-1 font-poppins text-sm">
                                <label htmlFor={property}>{property}</label>
                                <input
                                    type="checkbox"
                                    id={`checkbox-${index}`}
                                    name={property}
                                    value={property}
                                    checked={state.includes(property)}
                                    onChange={() => handleFilter(property)}
                                    className="appearance-none border-[2px] border-white bg-transparent w-4 h-4 rounded-sm checked:bg-white checked:border-transparent"
                                />
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