import React from "react";
import useTodoListStore from "../zustand/store";

const ToggleTodo = ({ todo }) => {
  const { todoList, newTodoList } = useTodoListStore((state) => state);

  const changeIsDone = (id) => {
    newTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : none
      )
    );
  };

  return (
    <div>
      <button onClick={() => changeIsDone(todo.id)}>
        {todo.isDone ? "취소" : "완료"}
      </button>
    </div>
  );
};

export default ToggleTodo;
