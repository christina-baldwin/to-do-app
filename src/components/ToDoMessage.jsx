import useTodoStore from "../stores/useTodoStore";

const ToDoMessage = ({ id, message, complete, category }) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const completeTodo = useTodoStore((state) => state.completeTodo);
  const uncompleteTodo = useTodoStore((state) => state.uncompleteTodo);

  return (
    <div className="border border-solid border-black rounded-sm flex flex-col gap-6 p-4 min-w-sm">
      <p className="text-lg mb-6">{message}</p>
      <div className="bg-black text-white max-w-20 flex items-center justify-center rounded-lg p-1 text-sm">
        <p>{category}</p>
      </div>
      <div className="text-md flex flex-row items-center gap-2">
        <p>Complete?</p>

        {complete ? (
          <ion-icon name="checkmark-circle-outline"></ion-icon>
        ) : (
          <ion-icon name="close-circle-outline"></ion-icon>
        )}
      </div>
      <div className="flex flex-row gap-4">
        <button
          className="border border-solid border-black rounded-md cursor-pointer p-2"
          onClick={() => removeTodo(id)}
        >
          Delete
        </button>
        <button
          className="border border-solid border-black rounded-md cursor-pointer p-2"
          onClick={complete ? () => uncompleteTodo(id) : () => completeTodo(id)}
        >
          {complete ? "Mark as incomplete" : "Mark as complete"}
        </button>
      </div>
      <p>Task added: {new Date(id).toLocaleString()}</p>
    </div>
  );
};

export default ToDoMessage;
