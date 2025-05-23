import { useState } from "react";
import useTodoStore from "../stores/useTodoStore";
import ToDoMessage from "./ToDoMessage";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.complete;
    if (filter === "uncompleted") return !todo.complete;
    return true;
  });

  return (
    <div className="flex items-center flex-col gap-10 min-w-sm">
      <div className="flex flex-row gap-8">
        <p>All tasks: {todos.length}</p>
        <p>
          Incomplete tasks:{" "}
          {todos.filter((todo) => todo.complete === false).length}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p>Filter tasks by:</p>
        <div className="flex gap-2">
          <button
            className="border border-solid border-blue-200  rounded-md cursor-pointer p-2  hover:bg-blue-200 hover:text-gray-800 "
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className="border border-solid border-blue-200  rounded-md cursor-pointer p-2  hover:bg-blue-200 hover:text-gray-800 "
            onClick={() => setFilter("completed")}
          >
            Complete
          </button>
          <button
            className="border border-solid border-blue-200 rounded-md cursor-pointer p-2  hover:bg-blue-200 hover:text-gray-800 "
            onClick={() => setFilter("uncompleted")}
          >
            Incomplete
          </button>
        </div>
      </div>
      {todos.length === 0 ? (
        <p>You have no tasks yet. Add a to-do to get started!</p>
      ) : (
        filteredTodos.map((todo) => <ToDoMessage key={todo.id} {...todo} />)
      )}
    </div>
  );
};

export default TodoList;
