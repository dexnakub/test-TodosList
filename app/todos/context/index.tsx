'use client'
import { TodosContextType, defaultValues } from '@/app/interface/context.interface';
import { ITodos } from '@/app/interface/todos.interface';
import { createContext, useState } from 'react';

// สร้าง context
const AppContext = createContext<TodosContextType>(defaultValues);

export const TestContext = ({children}: React.PropsWithChildren ) => {

    const [nameAll, setNameAll] = useState<ITodos[]>(defaultValues.nameAll);
    const [nameFruit, setNameFruit] = useState<ITodos[]>(defaultValues.nameFruit);

    const contextValue = {
        nameAll,
        setNameAll,
        nameFruit,
        setNameFruit
    }

    return (
        <>
            <AppContext.Provider value={contextValue}>
                {children}
            </AppContext.Provider>
        </>
    )
}

export default AppContext;
