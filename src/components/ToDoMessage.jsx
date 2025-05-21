import useTodoStore from "../stores/useTodoStore";

const ToDoMessage = ({ id, message, complete }) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <div>
      <p>{message}</p>
      <button onClick={() => removeTodo(id)}>Delete</button>
      <button>{complete ? "Click to uncomplete" : "Click to complete"}</button>
      <p>
        {complete
          ? "This task has been completed"
          : "This task has not been completed"}
      </p>
    </div>
  );
};

export default ToDoMessage;
