import { useState } from "react";
import useTodoStore from "../stores/useTodoStore";

const ToDoForm = () => {
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("");
  const createTodo = useTodoStore((state) => state.createTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(message, category);
    setMessage("");
    setCategory("");
  };

  return (
    <form
      className="border border-solid border-blue-200 rounded-sm p-4 flex flex-col gap-4 min-w-sm"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg">What do you need to do?</h2>
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        required
        value={message}
        className="border border-gray-300 h-10 px-3 focus:border-rose-200 focus:ring-rose-300 focus:outline-none focus:ring-2 "
      />
      <h3>Task category:</h3>
      <div className="p-2 flex flex-col gap-2">
        <label>
          <input
            type="radio"
            name="category"
            value="Work"
            checked={category === "Work"}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="accent-rose-300 focus:ring-2 focus:ring-rose-300"
          />{" "}
          Work
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="Study"
            checked={category === "Study"}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="accent-rose-300 focus:ring-2 focus:ring-rose-300"
          />{" "}
          Study
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="Chores"
            checked={category === "Chores"}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="accent-rose-300 focus:ring-2 focus:ring-rose-300"
          />{" "}
          Chores
        </label>
        <label>
          <input
            type="radio"
            name="category"
            value="Misc"
            checked={category === "Misc"}
            onChange={(e) => setCategory(e.target.value)}
            required
            className="appearence-none bg-gray-800 accent-rose-300 focus:ring-2 focus:ring-rose-300"
          />{" "}
          Misc
        </label>
      </div>
      <button
        className="border border-solid border-blue-200 hover:bg-blue-200 hover:text-gray-800  rounded-md cursor-pointer"
        type="submit"
      >
        Add my to-do
      </button>
    </form>
  );
};

export default ToDoForm;
