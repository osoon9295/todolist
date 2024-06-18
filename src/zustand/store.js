import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTodoListStore = create(
  persist(
    (set) => ({
      todoList: [],
      setTodoList: (todoList) =>
        set((state) => ({ todoList: [...state.todoList, todoList] })),
      newTodoList: (todoList) => set(() => ({ todoList: todoList })),
    }),
    {
      name: "todolist-storage",
    }
  )
);

export default useTodoListStore;
