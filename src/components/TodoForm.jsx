import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todosSlice";

const todoForm = ({}) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const getInputValue = (e) => {
    setInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
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
