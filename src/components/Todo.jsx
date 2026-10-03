import { useSelector, useDispatch } from "react-redux";
import Addform from "./Addform";
import { deleteTodo, marksAsDone } from "../features/todo/todoslice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const clickedbtn = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleMarkAsDone = (id) => {
    dispatch(marksAsDone(id));
  };

  return (
    <>
      <Addform />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "6px" }}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
                color: todo.isDone ? "gray" : "inherit",
                marginRight: "10px",
              }}
            >
              {todo.task}
            </span>

            <button onClick={() => clickedbtn(todo.id)}>delete</button>
            <button onClick={() => handleMarkAsDone(todo.id)}>
              {todo.isDone ? "undone" : "mark as done"}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}