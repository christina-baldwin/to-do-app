import useTodoStore from "../stores/useTodoStore";
import ToDoMessage from "./ToDoMessage";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0) return <p>No tasks yet. Be the first!</p>;

  return (
    <>
      <p>All tasks: {todos.length}</p>
      <p>
        Uncompleted tasks:{" "}
        {todos.filter((todo) => todo.complete === false).length}
      </p>
      {todos.map((todo) => (
        <ToDoMessage key={todo.id} {...todo} />
      ))}
    </>
  );
};

export default TodoList;
