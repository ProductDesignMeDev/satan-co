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
    toggleAccordion: () => void;
    isOpen: boolean;
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
    filter:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    resetFilter:(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    stateFilter:ProductProps[]
}