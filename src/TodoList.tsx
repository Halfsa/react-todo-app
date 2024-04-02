import {Todo} from "./App";
import TodoItem from "./TodoItem";

interface Props{
    todoList: Todo[],
}
export default function TodoList(props:Props){
    return(
        <div>
            <ul>
                {props.todoList.map((todo)=>{
                    return (
                        <TodoItem key={todo.id} todo={todo}/>
                    )
                })}
            </ul>
        </div>
    )
}