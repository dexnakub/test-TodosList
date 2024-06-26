import { useEffect, useContext } from 'react'
import AppContext from "../todos/context";
import IButton from "../interface/button.interface";

// export default function Button (name: any) {
export default function Button({ name, type, onFinishChildTwo }: IButton) {

    const { nameAll, setNameAll, nameFruit, setNameFruit } = useContext(AppContext);

    useEffect(() => {
    }, []);

    const addTodo = (name?: string, type?: string) => {
        setNameFruit([{ name: name }, { type: type }]);
        if (onFinishChildTwo) {
            onFinishChildTwo(name, type);
        } else {
            console.error("onFinishChildTwo is not defined");
        }
    }

    return (
        <>
            <button
                type="button"
                className="w-full inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 motion-reduce:transition-none dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
                data-twe-ripple-init
                onClick={() => addTodo(name || '', type || '')}
            >
                {name} , {type}
            </button>
        </>
    )
}
