'use client'

import React, { useState, useEffect, useContext, createContext, Dispatch, SetStateAction } from "react"

import { ITodos, ICardType, ITimerItem } from "../interface/todos.interface"
import Card from "../components/Card"

import { Grid } from "../components/styled"

// import Child from './child'
import AppContext, { TestContext } from "./context"


export default function Todos() {
    // const [todosStateBackup, setTodosStateBackup] = useState<ITodos[]>([]);
    const [isLoading, setisLoading] = useState(true);
    const [todosState, setTodosState] = useState<ITodos[]>([]);
    const [todosFruitState, setTodosFruitState] = useState<ITodos[]>([]);
    const [todosVegetableState, setTodosVegetableState] = useState<ITodos[]>([]);
    // const { nameAll, setNameAll, nameFruit, setNameFruit } = useContext(AppContext);

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
        try {
            const result = await getData()
            setisLoading(false)
            // setTodosStateBackup(result)
            setTodosState(result)
        } catch (error) {
            console.log('Error', error)
        }
    }

    useEffect(() => {
        initData()
    }, []);

    const onFinishParent = (name: string, type: string) => {
        const [removedDataClick, addDataClick]: [ITodos[], ITodos[]] = todosState.reduce((acc, curr) => {
            if (curr.name !== name) {
                acc[0].push(curr);
            } else {
                acc[1].push(curr);
            }
            return acc;
        }, [[], []] as [ITodos[], ITodos[]]);

        setTodosState(removedDataClick);
        startInterval(removedDataClick, addDataClick[0]);
    }

    //------------------ settimeout-------------------------
    const [timerQueue, setTimerQueue] = useState<ITimerItem[]>([]);
    const [completedTimers, setCompletedTimers] = useState<string[]>([]);

    // ฟังก์ชันในการเพิ่มหรืออัปเดตคิว
    const updateTimerQueue = (id: any, timerId: any) => {
        setTimerQueue((queue) => {
            const itemExists = queue.some((item) => item.id === id);
            if (!itemExists) {
                return queue.concat({ id, timerId });
            }
            return queue.map((item) =>
                item.id === id ? { ...item, timerId } : item
            );
        });
    };

    // ฟังก์ชันในการตั้งค่าเมื่อ timer สิ้นสุดการทำงาน
    const handleTimerCompletion = (id: any, timerId: any) => {
        clearTimeout(timerId);  // ล้าง timeout
        setCompletedTimers((completed) => [...completed, id]); // เพิ่ม queue ที่เสร็จแล้ว
        setTimerQueue((queue) => queue.filter((item) => item.id !== id));  // ลบ timer ที่เสร็จสิ้นแล้วออกจาก queue
    };

    // แสดงผลค่า Queue ทุกครั้งที่มีการเปลี่ยนแปลง
    useEffect(() => {
        // console.log('Current Timer Queue:', timerQueue);
    }, [timerQueue]);

    // แสดงผลค่า Completed Timers ทุกครั้งที่มีการเปลี่ยนแปลง
    useEffect(() => {
        // console.log('Completed Timers:', completedTimers);
    }, [completedTimers]);

    //------------------ settimeout-------------------------

    const startInterval = (dataAll: ITodos[], dataAdd: ITodos) => {
        const selectedState = dataCard.find(card => card.type == dataAdd.type)?.setState;
        if (selectedState) {
            selectedState(prevSeconds => [...prevSeconds, dataAdd]);

            const id_q = dataAdd.name
            const timerId = setTimeout(() => {
                selectedState(prevSeconds => prevSeconds.filter(item => item.name !== dataAdd.name));
                setTodosState(prevState => {
                    if (prevState.some(data => data.name === dataAdd.name)) {
                        return prevState
                    } else {
                        return [...prevState, dataAdd]
                    }
                });
                handleTimerCompletion(id_q, timerId);
            }, 5000);
            updateTimerQueue(id_q, timerId);
        }
    }

    const onFinishChild = (name: string, type: string) => {
        let dataChild = { name: name, type: type }
        const [removedDataClick, addDataClick]: [ITodos[], ITodos[]] = todosState.reduce((acc, curr) => {
            if (curr.name !== name) {
                acc[0].push(curr);
            } else {
                acc[1].push(curr);
            }
            return acc;
        }, [[], []] as [ITodos[], ITodos[]]);

        if (!addDataClick.length) {
            const foundItem = timerQueue.find((item) => item.id === name);
            const timerId = foundItem ? foundItem.timerId : undefined;

            clearTimeout(timerId);
            setTimerQueue((queue) => queue.filter((item) => item.id !== name));

            const selectedState = dataCard.find(card => card.type == type)?.setState;
            if (selectedState) {
                selectedState(prevSeconds =>
                    prevSeconds.filter(item => item.name != dataChild.name && item.type == dataChild.type)
                );
            }
            setTodosState(prevState => [...prevState, dataChild]);
        }
    }

    const dataCard: ICardType[] = [{
        type: '',
        state: todosState,
        setState: setTodosState,
        functionName: 'onFinishChildOne',
        action: onFinishParent
    }, {
        type: 'Fruit',
        state: todosFruitState,
        setState: setTodosFruitState,
        functionName: 'onFinishChildOne',
        action: onFinishChild
    }, {
        type: 'Vegetable',
        state: todosVegetableState,
        setState: setTodosVegetableState,
        functionName: 'onFinishChildOne',
        action: onFinishChild
    }];

    return (
        <>
            {/* <TestContext> */}
            {/* <Child ></Child> */}
            {isLoading && (<div className="max-w-screen-xl flex items-center justify-center mx-auto"> Loading... </div>)}
            {!isLoading && (<div className="max-w-screen-xl items-center justify-center mx-auto">
                <Grid $rowGap='20px' $colGap='20px' $gridTemCol={3}>
                    {dataCard.map((card, index) => (
                        <div key={index} className="h-[600px]">
                            <Card title={card.type} datas={card.state} {...card.functionName ? { [card.functionName]: card.action } : null} />
                            {/* <Card title={card.type} datas={card.state} onFinishChildOne={onFinishParent} /> */}
                        </div>
                    ))}
                </Grid>
            </div>
            )}
            {/* </TestContext> */}
        </>
    )
}
