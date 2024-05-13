import ITodos from "../interface/todos.interface";
import { useState, useEffect } from 'react'

// export default function Button (name: any) {
export default function Button({ name, type }: ITodos) {

    const [todosState, setTodosState] = useState<ITodos[]>([]);

    useEffect(() => {
    }, []); 

    const addTodo = async (name: any, type: any) => {
        setTodosState([...todosState, name]);
    }

    return (
        <>
            <button
                type="button"
                className="w-full inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 motion-reduce:transition-none dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                data-twe-ripple-init
                onClick={async () => {
                    await addTodo({ name }, { type })
                }}>
                {name}
            </button>
        </>
    )
}
