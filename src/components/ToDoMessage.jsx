import useTodoStore from "../stores/useTodoStore";

const ToDoMessage = ({ id, message, complete, category }) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const completeTodo = useTodoStore((state) => state.completeTodo);
  const uncompleteTodo = useTodoStore((state) => state.uncompleteTodo);

  return (
    <div className="border border-solid border-blue-200 rounded-sm flex flex-col gap-6 p-4 min-w-sm">
      <div className="bg-purple-200 text-gray-800 flex items-center justify-center rounded-lg p-1 text-sm">
        <p>{category}</p>
      </div>
      <p className="bg-white text-gray-800 text-lg p-4 rounded-sm">{message}</p>
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
          className="border border-solid border-blue-200 rounded-md cursor-pointer p-2  hover:bg-blue-200 hover:text-gray-800 "
          onClick={complete ? () => uncompleteTodo(id) : () => completeTodo(id)}
        >
          {complete ? "Mark as incomplete" : "Mark as complete"}
        </button>
        <button
          className="bg-blue-200 text-gray-800 border border-solid border-blue-200 rounded-md cursor-pointer p-2  hover:bg-gray-800 hover:text-blue-200 "
          onClick={() => removeTodo(id)}
        >
          Delete
        </button>
      </div>
      <p className="italic">Task added: {new Date(id).toLocaleString()}</p>
    </div>
  );
};

export default ToDoMessage;
