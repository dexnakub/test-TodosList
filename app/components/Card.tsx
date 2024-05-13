'use client'

import { useState, useEffect, useContext } from "react"

import card from "../interface/card.interface";
import Button from "../components/Button";
import ITodos from "../interface/todos.interface";

// import { TestContext } from "../todos/page";


// export default function Button (name: any) {
export default function Card({ title }: card) {

    // const context = useContext(TestContext);
    // console.log('context', context)
    // if (!context) {
    //     throw new Error('SidebarContext ไม่ถูกต้อง');
    // }
    
    // หลังจากตรวจสอบแล้วสามารถใช้งาน todosState และ setTodosState ได้
    // const { todosState, setTodosState } = context;


    // const { todosState, setTodosState } = useContext(useAppContext)

    // if (!todosState || !setTodosState) {
    //     throw new Error('SidebarContext ไม่ถูกต้อง');
    // }

    return (
        <>
            {!title && (
                <div className="block rounded-lg border border-success-600 bg-transparent text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white h-full">
                    <div className="p-6">
                        <p className="text-base text-success-600">
                            {/* <Button name={todos.name} type={todos.type} /> */}
                            {/* {todosState.map((todos, index) => (
                                <div key={index} className="py-1" >
                                    <Button name={todos.name} type={todos.type} />
                                </div>
                            ))} */}
                            {/* {todosState} */}
                        </p>
                    </div>
                </div>
            )}

            {title && (
                <div className="block rounded-lg border border-success-600 bg-transparent text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white h-full">
                    <div className="border-b-2 border-success-600 px-6 py-3 flex justify-center">{title}</div>
                    <div className="p-6">
                        <p className="text-base text-success-600">
                            {/* <Button name={todos.name} type={todos.type} /> */}
                        </p>
                    </div>
                </div>
            )}
        </>
    )
}
