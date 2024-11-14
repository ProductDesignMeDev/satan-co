"use client";
import React, { useState } from "react";
import { AccordionFilterProps } from "@/types/generic";

export default function AccordionFilter({ title, properties }: AccordionFilterProps) {
    const [accordionOpen, setAccordionOpen] = useState(false);
    const [filter, setFilter] = useState<string[]>([]);


    const handleFilter = (property: string) => {
        if (filter.includes(property)) {
            setFilter(filter.filter((item) => item !== property));
            console.log(filter)
        } else {
            setFilter([...filter, property]);
            console.log(filter)
        }
    };

    return (
        <div className="py-1 text-white w-full">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between items-center w-full"
            >
                <div className="flex items-center space-x-4">
                    <span className="text-justify text-white lg:text-lg text-xs font-medium leading-[27px] pl-1">
                        {title}
                    </span>
                </div>

                <svg
                    className={`fill-white transition duration-200 ease-out transform ${accordionOpen ? "!rotate-180" : ""
                        } lg:w-4 lg:h-4 w-4 h-4`}
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
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-sm mt-1 ${accordionOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <ol className="overflow-hidden">
                    {properties &&
                        properties.map((property, index) => (
                            <li key={index} className="flex justify-between py-2">
                                <label htmlFor={property}>{property}</label>

                                <input
                                    type="checkbox"
                                    id={`checkbox-${index}`}
                                    name={property}
                                    value={property}
                                    onChange={() => { handleFilter(property) }}
                                    className="appearance-none border-2 border-white bg-transparent w-4 h-4 rounded-sm checked:bg-white checked:border-transparent"
                                />
                            </li>
                        ))}
                </ol>
            </div>

            {/* Línea rosa debajo del título que sube y baja */}
            <div
                className={`h-[2px] bg-borderpink transition-all duration-300 ease-in-out ${accordionOpen ? "transform translate-y-0" : "transform translate-y-[-100%]"
                    }`}
            />
        </div>
    );
}