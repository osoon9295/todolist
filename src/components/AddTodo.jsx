import React from "react";
import { useState } from "react";
import uuid from "react-uuid";
import useTodoListStore from "../zustand/store";

const AddTodo = () => {
  const { setTodoList } = useTodoListStore((state) => state);
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: uuid(),
      title: input,
      isDone: false,
    };

    setTodoList(newTodo);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={addTodo}>
        <label> 할 일 : </label>
        <input type="text" value={input} onChange={handleInput} />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
};

export default AddTodo;
