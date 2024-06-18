import React from "react";
import useTodoListStore from "../zustand/store";

const DeleteTodo = ({ todo }) => {
  const { todoList, newTodoList } = useTodoListStore((state) => state);

  const handleDeleteTodo = (id) => {
    newTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <button
        onClick={() => {
          handleDeleteTodo(todo.id);
        }}
      >
        삭제
      </button>
    </div>
  );
};

export default DeleteTodo;
