import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

const todoForm = ({ todoList, setTodoList }) => {
  const [input, setInput] = useState("");

  const getInputValue = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    const nextTodo = {
      id: uuid(),
      text: input,
      isDone: false,
    };

    setTodoList([...todoList, nextTodo]);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label>할 일 : </label>
        <input type="text" value={input} onChange={getInputValue} />
        <button type="submit"> 추가 </button>
      </form>
    </div>
  );
};

export default todoForm;
