import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = ({}) => {
  const todoList = useSelector((state) => state.todos);

  return (
    <div>
      <ul>
        {todoList.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
