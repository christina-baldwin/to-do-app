import { create } from "zustand";

const initialState = {
  todos: [
    {
      id: 1,
      message: "",
      complete: false,
    },
  ],
};

const useTodoStore = create((set) => ({
  ...initialState,

  createTodo: (message) => {
    const newTodo = {
      id: Date.now(),
      message,
      complete: false,
    };

    set((state) => ({ todos: [newTodo, ...state.todos] }));
  },

  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },
}));

export default useTodoStore;
