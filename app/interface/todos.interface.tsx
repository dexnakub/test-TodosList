import { Dispatch, SetStateAction } from "react";

export interface ITodos {
    name?: string;
    type?: string;
}

export interface ICardType {
    type: string;
    state: ITodos[];
    setState: Dispatch<SetStateAction<ITodos[]>>;
    functionName?: string;
    action?: (name: string,type: string) => void;
}

export interface ITimerItem {
    id: string;
    timerId: number;
}