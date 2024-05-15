'use client'

import Button from "../components/Button";
import ICard from "../interface/card.interface";

export default function Card({ title, datas, onFinishChildOne }: ICard) {

    return (
        <>
            {datas && (
                <div className="block rounded-lg border border-success-600 bg-transparent text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white h-full">
                    {title && (<div className="border-b-2 border-success-600 px-6 py-3 flex justify-center">{title}</div>)}
                    <div className="p-6">
                        <div className="text-base text-success-600">
                            {
                                datas.map((todos, index) => (
                                    <div key={index} className="py-1" >
                                        <Button name={todos.name} type={todos.type} onFinishChildTwo={onFinishChildOne} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
