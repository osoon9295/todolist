import React from "react";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import ShowTodoList from "./components/ShowTodoList";

const App = () => {
  return (
    <div>
      <AddTodo />
      <ShowTodoList />
    </div>
  );
};

export default App;
