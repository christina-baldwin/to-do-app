import useTodoStore from "../stores/useTodoStore";
import ToDoMessage from "./ToDoMessage";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0) {
    return <p>No tasks yet. Be the first!</p>;
  } else {
    return (
      <>
        {todos.map((todo) => (
          <ToDoMessage key={todo.id} {...todo} />
        ))}
      </>
    );
  }
};

export default TodoList;
