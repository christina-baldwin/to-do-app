import { useState } from "react";
import useTodoStore from "../stores/useTodoStore";
import ToDoMessage from "./ToDoMessage";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "complete") return todo.complete;
    if (filter === "incomplete") return !todo.complete;
    return true;
  });

  return (
    <div className="flex items-center flex-col gap-10 w-full max-w-xl mx-auto px-4 sm:px-8">
      <div className="flex flex-row gap-8 flex-wrap">
        <p>All tasks: {todos.length}</p>
        <p>
          Incomplete tasks:{" "}
          {todos.filter((todo) => todo.complete === false).length}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Filter tasks by:</p>
        <div className="flex gap-2 flex-wrap">
          <button
            aria-label="Show all tasks"
            className={`border border-solid border-blue-200 rounded-md cursor-pointer p-2 hover:bg-blue-200 hover:text-gray-800 ${
              filter === "all" ? "bg-blue-200 text-gray-800 shadow-md" : ""
            }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            aria-label="Show complete tasks"
            className={`border border-solid border-blue-200 rounded-md cursor-pointer p-2 hover:bg-blue-200 hover:text-gray-800 ${
              filter === "complete" ? "bg-blue-200 text-gray-800 shadow-md" : ""
            }`}
            onClick={() => setFilter("complete")}
          >
            Complete
          </button>
          <button
            aria-label="Show incomplete tasks"
            className={`border border-solid border-blue-200 rounded-md cursor-pointer p-2 hover:bg-blue-200 hover:text-gray-800 ${
              filter === "incomplete"
                ? "bg-blue-200 text-gray-800 shadow-md"
                : ""
            }`}
            onClick={() => setFilter("incomplete")}
          >
            Incomplete
          </button>
        </div>
      </div>
      <div className="flex gap-6 flex-wrap justify-center w-full max-w-6xl mx-auto px-4 sm:px-8">
        {filteredTodos.length === 0 ? (
          filter === "complete" ? (
            <div className="flex flex-col items-center gap-6">
              <ion-icon
                aria-hidden="true"
                style={{ fontSize: "5rem" }}
                name="document-outline"
              ></ion-icon>
              <p>No completed tasks yet. Complete a task to see it here.</p>
            </div>
          ) : filter === "incomplete" ? (
            <div className="flex flex-col items-center text-center gap-6">
              <ion-icon
                aria-hidden="true"
                style={{ fontSize: "5rem" }}
                name="document-outline"
              ></ion-icon>
              <p>
                No incomplete tasks yet. Add a task or uncheck a completed one.
              </p>{" "}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6">
              <ion-icon
                aria-hidden="true"
                style={{ fontSize: "5rem" }}
                name="document-outline"
              ></ion-icon>
              <p>You have no tasks yet. Add a to-do to get started!</p>{" "}
            </div>
          )
        ) : (
          filteredTodos.map((todo) => <ToDoMessage key={todo.id} {...todo} />)
        )}
      </div>
    </div>
  );
};

export default TodoList;
