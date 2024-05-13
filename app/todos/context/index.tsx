'use client'

import { useContext, createContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: {
    children: React.ReactNode;
}) {
    let [name, setName] = useState('name default')

    return (
        <AppContext.Provider value={{
            name, setName
        }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}