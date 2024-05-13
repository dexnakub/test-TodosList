"use client"

import ITodos from "../interface/todos.interface";

import { AppWrapper } from './context'

export default function TodosLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {

    return (
        <section >
            <AppWrapper>
                {children}
            </AppWrapper>
        </section>
    );
}
