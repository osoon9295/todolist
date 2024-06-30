import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/todosSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  console.log(todo);

  return (
    <li style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
      <input type="checkbox" onChange={() => dispatch(toggleTodo(todo.id))} />
      {todo.text}
      <button onClick={() => dispatch(deleteTodo(todo.id))}>삭제</button>
    </li>
  );
};

export default TodoItem;
