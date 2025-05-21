import ToDoForm from "./components/ToDoForm";
import TodoList from "./components/TodoList";

export const App = () => {
  return (
    <>
      <h1>My To Do List</h1>
      <ToDoForm />
      <TodoList />
    </>
  );
};
