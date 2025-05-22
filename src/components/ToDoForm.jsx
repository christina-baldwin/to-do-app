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
    <form onSubmit={handleSubmit}>
      <h2>What do you need to do?</h2>
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        required
        value={message}
      />
      <h3>Select task category:</h3>
      <label>
        <input
          type="radio"
          name="category"
          value="Work"
          checked={category === "Work"}
          onChange={(e) => setCategory(e.target.value)}
          required
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
        />{" "}
        Misc
      </label>
      <button type="submit">Add my to-do</button>
    </form>
  );
};

export default ToDoForm;
