"use client"

import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import AppContext from './context';

// import { useAppContext } from "./context";

export default function Child() {

    // const { name, setName } = useAppContext() 
    const { nameAll, setNameAll, nameFruit, setNameFruit } = useContext(AppContext);
    // const [nameChild, setNameChild] = useState<string>('Name Default');

    // console.log('name', name)
    // console.log('nameChild', nameChild)
    const updateNameAll = () => {
        // console.log('updateName')
        setNameAll([{ name: 'updateNameAll' }]);
        console.log('nameAll', nameAll)
    };

    const updateNameFruit = () => {
        // console.log('updateName')
        setNameFruit([{ name: 'updateNameFruit' }]);
        console.log('nameFruit', nameFruit)
    };

    return (
        <>
            {nameAll.map((name, index) => (
                <div key={index} className="py-1" >
                    <h2 className=' text-xl text-sky-400/100'>Current name is: {name.name} type={name.type}</h2>
                </div>
            ))}
            {/* <h2 className=' text-xl text-sky-400/100'>Current name is: {nameAll}</h2> */}
            <div className=' flex flex-row space-x-2'>
                <button onClick={updateNameAll}>Update Name</button>
            </div>

            {nameFruit.map((name, index) => (
                <div key={index} className="py-1" >
                    <h2 className=' text-xl text-sky-400/100'>Current name is: {name.name} type={name.type}</h2>
                </div>
            ))}

            {/* <h2 className=' text-xl text-sky-400/100'>Current name is: {nameFruit}</h2> */}
            <div className=' flex flex-row space-x-2'>
                <button onClick={updateNameFruit}>Update Name2</button>
            </div>

            {/* <h2 className=' text-xl text-sky-400/100'>Current name is: {nameChild}</h2>
            <div className=' flex flex-row space-x-2'>
                <button onClick={() => setNameChild('Name New')}>Update Name</button>
            </div> */}

        </>
    )

}