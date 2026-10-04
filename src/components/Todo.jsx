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
      <h2 className="text-center fw-bold text-primary mb-4">Todo List App</h2>
      <Addform />
      
      <ul className="list-group list-group-flush mt-4 p-0">
        {todos.length === 0 ? (
          <li className="list-group-item text-center text-muted border-0 py-4">
            No tasks found. Add a new task above!
          </li>
        ) : (
          todos.map((todo) => (
            <li
              key={todo.id}
              className="list-group-item d-flex justify-content-between align-items-center bg-light rounded-3 mb-2 p-3 border-0 shadow-sm"
            >
              <span
                className={`flex-grow-1 me-3 ${
                  todo.isDone
                    ? "text-decoration-line-through text-muted"
                    : "fw-medium text-dark"
                }`}
                style={{ wordBreak: "break-word" }}
              >
                {todo.task}
              </span>

              <div className="d-flex gap-2">
                <button
                  onClick={() => handleMarkAsDone(todo.id)}
                  className={`btn btn-sm ${
                    todo.isDone ? "btn-outline-secondary" : "btn-success"
                  }`}
                >
                  {todo.isDone ? "Undone" : "Mark Done"}
                </button>
                <button
                  onClick={() => clickedbtn(todo.id)}
                  className="btn btn-sm btn-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </>
  );
}