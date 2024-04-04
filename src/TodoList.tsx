import {Todo} from "./App";
import TodoItem from "./TodoItem";
import Card from "./Card";
import {useContext} from "react";
import DarkModeContext from "./DarkModeContext";
import SplitPanel from "./SplitPanel";

interface Props{
    todoList: Todo[],
}
export default function TodoList(props:Props){
    const mode = useContext(DarkModeContext);
    return(
        <div>
            <ul>
                {props.todoList.map((todo)=>{
                    return (
                       <Card  className={(mode.mode?"":"dark")} onClick={()=>alert("hello :D")}>
                            <TodoItem key={todo.id} todo={todo}/>
                        </Card>
                    )
                })}
                    <SplitPanel left={
                        <>vhjjjjjjjjjjjjjjjjjjj</>
                    } right={
                        <>iodahhhhhhhhhhhhhcklhcdlks</>
                    }/>
            </ul>
        </div>
    )
}