'use client'

import React, { useState, useEffect, useContext, createContext, Dispatch, SetStateAction } from "react"

import ITodos from "../interface/todos.interface"
import Card from "../components/Card"

import { Grid } from "../components/styled"

import Child from './child'
// interface IContext {
//     todosState: ITodos[];
//     setTodosState: Dispatch<SetStateAction<ITodos[]>>;
// }

// const SidebarContext = React.createContext<IContext | null>(null);


export default function Todos() {
    const [todosState, setTodosState] = useState<ITodos[]>([]);
    const [isLoading, setisLoading] = useState(true);
    const [todosFruitState, setTodosFruitState] = useState<ITodos[]>([]);

    // const { todosState, setTodosState } = useContext(Context)

    // const [name, setName] = useState('word');

    async function getData() {
        try {
            const response = await fetch('http://localhost:3000/api/todos').then(function (response) {
                return response.json();
            }).then(function (data) {
                return data.data
            });
            return response
        } catch (error) {
            console.log('Error', error)
        }
    }

    const initData = async () => {
        // Update the document title using the browser API
        try {
            const result = await getData()
            setTodosState(result)
            setisLoading(false)
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        initData()
    }, []);

    // console.log('todosState', todosState)

    const onchange = (values: any) => {
        setTodosFruitState(values)
    }

    return (
        <>
            {isLoading && (<div className="max-w-screen-xl flex items-center justify-center mx-auto"> Loading... </div>)}
            {!isLoading && (<div className="max-w-screen-xl items-center justify-center mx-auto">
                <Grid $rowGap='20px' $colGap='20px' $gridTemCol={3}>
                    {/* {isLoading && (<div> Loading... </div>)} */}
                    <div className="w-full">
                        {/* {todosState.map((todos, index) => (
                            <div key={index} className="py-1" >
                                <Button name={todos.name} type={todos.type} />
                            </div>
                        ))} */}
                        {/* <Card onChange={onchange} /> */}
                        <Child></Child>

                    </div>
                    <div className="">
                        <Card title="Fruit" />
                    </div>
                    <div className="">
                        <Card title="Vegetable" />
                    </div>
                </Grid>
            </div>
            )}
        </>
    )
}
