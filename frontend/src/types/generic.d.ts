import { ReactNode } from "react";

export interface AccordionProps {
    title: string;
    answer: string;
}


export interface AccordionFilterProps {
    title: string;
    properties: string[];
    state: string[];
    setState: (state: string[]) => void;
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

export interface catalogState{
    state:string[];
    setState:(state:string[])=>void;
}