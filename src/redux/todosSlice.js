import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialState = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: uuid(),
        text: action.payload,
        isDone: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      // const todo = state.find((todo) => todo.id === action.payload);
      // if (todo) {
      //   todo.isDone = !todo.isDone;
      // }

      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;
