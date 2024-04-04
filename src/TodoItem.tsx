import {Todo} from "./App";
import DarkModeContext from "./DarkModeContext";
import {useContext} from "react";

export default function TodoItem({todo}:{todo:Todo}){
    const isLight = useContext(DarkModeContext);
    return (
        <p key={todo.id} className={isLight.mode?"todoLight":"todoDark"}>{todo.id}-s számú todo: {todo.text}</p>
    )
}