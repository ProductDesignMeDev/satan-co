import { ReactNode } from "react";

export interface AccordionProps {
    title: string;
    answer: string;
}


export interface AccordionFilterProps {
    title: string;
    properties: string[];
}


export interface toDetailProps {
    id: string;
    children?: ReactNode;
}

export interface DetailProps {
    params: {
        id: string
    }
}

export interface searchParam{
    id: string
}