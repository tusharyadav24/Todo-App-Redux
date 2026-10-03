# 📝 Redux Toolkit Todo App

A responsive, single-page Todo application built with **React**, **Redux Toolkit**, and **Vite**. This project demonstrates centralized state management, immutable state updates, and clean modular component architecture.

---

## ✨ Features

- **Add Tasks:** Create new todo items dynamically with unique IDs.
- **Delete Tasks:** Remove completed or unwanted tasks from the global store.
- **Toggle Completion (Mark Done / Undone):** Switch task status with reactive visual feedback (strikethrough styling).
- **Predictable State Flow:** Powered by Redux Toolkit slices, reducers, and action creators.

---

## 🛠️ Tech Stack

- **Frontend:** React (Hooks: `useSelector`, `useDispatch`)
- **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- **Build Tool:** Vite
- **Styling:** CSS / Utility Classes

---

## 📂 Project Structure

```text
src/
├── app/
│   └── store.js             # Redux central store configuration
├── features/
│   └── todo/
│       └── todoslice.js     # Redux slice (reducers & actions)
├── components/
│   ├── Addform.jsx          # Component for input & dispatching addTodo
│   └── Todo.jsx             # List rendering, delete & mark-as-done actions
├── App.jsx                  # Root component
├── main.jsx                 # Entry point with Redux <Provider>
└── index.css                # Global styles