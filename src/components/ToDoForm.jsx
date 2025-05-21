import useTodoStore from "../stores/useTodoStore";

const ToDoForm = () => {
  const { todo, setTodo } = useTodoStore;

  return (
    <form>
      <h2>What do you need to do?</h2>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ToDoForm;
