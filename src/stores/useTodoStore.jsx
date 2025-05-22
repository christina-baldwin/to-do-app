import { create } from "zustand";

const initialState = {
  todos: [],
};

const useTodoStore = create((set) => ({
  ...initialState,

  createTodo: (message, category) => {
    const newTodo = {
      id: Date.now(),
      message,
      complete: false,
      category,
    };
    set((state) => ({ todos: [newTodo, ...state.todos] }));
  },

  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },

  completeTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, complete: true } : todo
      ),
    }));
  },

  uncompleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, complete: false } : todo
      ),
    }));
  },
}));

export default useTodoStore;
