import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoslice";
export default function Addform(){
    const[task,setTask]=useState("");
    const dispatch=useDispatch();
    const submitHandler=(event)=>{
        event.preventDefault();
        dispatch(addTodo(task))
        setTask("");
    }
    return(
        <>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={(e)=>setTask(e.target.value)}/>
            <button>Add Task</button>
        </form>
        </>
    )
}