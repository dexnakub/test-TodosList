import {ITodos} from "./todos.interface";

export default interface ICard {
    title?: string;
    datas?: ITodos[];
    onFinishChildOne?: Function;
    // todos?: ITodos[]
}
