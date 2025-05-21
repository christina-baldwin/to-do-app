import { create } from "zustand";

const useTodoStore = create((set) => ({
  todo: "",
  setTodo: () => set((state) => ({ todo: state.todo })),
}));

export default useTodoStore;
