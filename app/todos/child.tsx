"use client"
import { useAppContext } from "./context";
export default function Child() {

    const { name, setName } = useAppContext() 

    return (
        <>
            <h2 className=' text-xl text-sky-400/100'>From child {name}</h2>
            <div className=' flex flex-row space-x-2'>
                <button onClick={() => setName('name1') }>Change name 1</button>
                <button onClick={() => setName('name2') }>Change name 2</button>
            </div>
        </>
    )

}