import { useState } from "react";
import useTodoStore from "../stores/useTodoStore";

const ToDoForm = () => {
  const [message, setMessage] = useState("");
  const createTodo = useTodoStore((state) => state.createTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>What do you need to do?</h2>
      <input
        type="text"
        onChange={(e) => setMessage(e.target.value)}
        value={message}
      />
      <button type="submit">Add my to-do</button>
    </form>
  );
};

export default ToDoForm;
