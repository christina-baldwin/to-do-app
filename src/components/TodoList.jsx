import useTodoStore from "../stores/useTodoStore";
import ToDoMessage from "./ToDoMessage";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0)
    return <p>You have no tasks yet. Add a to-do to get started!</p>;

  return (
    <div className="flex items-center flex-col gap-10 min-w-sm">
      <div className="flex items-center flex-row gap-2">
        <p>All tasks: {todos.length}</p>
        <p>
          Uncompleted tasks:{" "}
          {todos.filter((todo) => todo.complete === false).length}
        </p>
      </div>
      {todos.map((todo) => (
        <ToDoMessage key={todo.id} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
