import ToDoForm from "./components/ToDoForm";
import TodoList from "./components/TodoList";

export const App = () => {
  return (
    <div className="flex items-center min-h-screen flex-col gap-8 p-8 text-blue-200 bg-gray-800">
      <h1 className="text-4xl">My To-Do List</h1>
      <ToDoForm />
      <TodoList />
    </div>
  );
};
