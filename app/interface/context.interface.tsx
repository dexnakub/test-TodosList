import { Dispatch, SetStateAction } from 'react';
import { ITodos } from './todos.interface';

// Interface สำหรับ context
export interface TodosContextType {
    nameAll: ITodos[];
    setNameAll: Dispatch<SetStateAction<ITodos[]>>;
    nameFruit: ITodos[];
    setNameFruit: Dispatch<SetStateAction<ITodos[]>>;
}

// ค่าเริ่มต้นสำหรับ context
export const defaultValues: TodosContextType = {
    nameAll: [],
    setNameAll: () => { },
    nameFruit: [],
    setNameFruit: () => { }
};