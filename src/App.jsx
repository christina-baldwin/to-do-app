import ToDoForm from "./components/ToDoForm";
import TodoList from "./components/TodoList";

export const App = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="flex items-center min-h-screen flex-col gap-10 p-8 text-blue-200 bg-gray-800 mx-auto w-full">
        <h1 className="text-center text-5xl font-bold">My To-Do List</h1>
        <ToDoForm />
        <TodoList />
      </div>
    </div>
  );
};
