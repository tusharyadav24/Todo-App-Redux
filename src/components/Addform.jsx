import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoslice";

export default function Addform() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTodo(task.trim()));
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-3">
      <input
        type="text"
        className="form-control form-control-lg fs-6 rounded-3 shadow-none border"
        placeholder="Enter your task here..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit" className="btn btn-primary px-4 fw-semibold rounded-3">
        Add
      </button>
    </form>
  );
}