import React from "react";
import DeleteTodo from "./DeleteTodo";
import useTodoListStore from "../zustand/store";
import ToggleTodo from "./ToggleTodo";

const ShowTodoList = () => {
  const { todoList } = useTodoListStore((state) => state);

  return (
    <div>
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <h3>{todo.title}</h3>
              <ToggleTodo todo={todo} />
              {/* <button>{todo.isDone ? "취소" : "완료"}</button> */}
              <DeleteTodo todo={todo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ShowTodoList;
