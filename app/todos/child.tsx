"use client"

import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import AppContext from './context';

// import { useAppContext } from "./context";

export default function Child() {

    // const { name, setName } = useAppContext() 
    const { name, setName } = useContext(AppContext);
    const [nameChild, setNameChild] = useState<string>('Name Default');

    const updateName = () => {
        console.log('updateName')
        setName('Updated Name 222');
    };

    return (
        <>
            <h2 className=' text-xl text-sky-400/100'>Current name is: {name}</h2>
            <div className=' flex flex-row space-x-2'>
                <button onClick={updateName}>Update Name</button>
            </div>
            
            <h2 className=' text-xl text-sky-400/100'>Current name is: {nameChild}</h2>
            <div className=' flex flex-row space-x-2'>
                <button onClick={() => setNameChild('Name New')}>Update Name</button>
            </div>

        </>
    )

}