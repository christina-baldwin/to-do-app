import useTodoStore from "../stores/useTodoStore";

const ToDoMessage = ({ id, message, complete, category }) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const completeTodo = useTodoStore((state) => state.completeTodo);
  const uncompleteTodo = useTodoStore((state) => state.uncompleteTodo);

  return (
    <div>
      <p>{message}</p>
      <p>{category}</p>
      <button onClick={() => removeTodo(id)}>Delete</button>
      <button
        onClick={complete ? () => uncompleteTodo(id) : () => completeTodo(id)}
      >
        {complete ? "Click to uncomplete" : "Click to complete"}
      </button>
      <p>
        {complete
          ? "This task has been completed"
          : "This task has not been completed"}
      </p>
    </div>
  );
};

export default ToDoMessage;
