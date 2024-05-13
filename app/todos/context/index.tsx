'use client'

// import { useContext, createContext, useState } from "react";

// const AppContext = createContext<any>(undefined);

// export function AppWrapper({ children }: {
//     children: React.ReactNode;
// }) {
//     let [name, setName] = useState('name default')

//     return (
//         <AppContext.Provider value={{
//             name, setName
//         }}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// export function useAppContext() {
//     return useContext(AppContext);
// }


import { createContext, Context, Dispatch, SetStateAction } from 'react';

// Interface สำหรับ context
interface AppContextType {
    name: string;
    setName: Dispatch<SetStateAction<string>>;
}

// ค่าเริ่มต้นสำหรับ context
const defaultValues: AppContextType = {
    name: '',
    setName: () => {} // ฟังก์ชันว่างเปล่าที่ไม่ทำอะไร
};

// สร้าง context
const AppContext = createContext<AppContextType>(defaultValues);

export default AppContext;
