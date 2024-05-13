"use client"

import ITodos from "../interface/todos.interface";

// import { AppWrapper } from './context'

import React, { useState } from 'react';
import AppContext from './context'; // นำเข้า AppContext ที่เราได้สร้างไว้

export default function TodosLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {

    const [name, setName] = useState<string>('');

    return (
        <section >
            {/* <AppWrapper>
                {children}
            </AppWrapper> */}
            <AppContext.Provider value={{ name, setName }}>
                {children}
            </AppContext.Provider>
        </section>
    );
}
