import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList }) => {
  return (
    <div>
      <ul>
        {todoList.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              setTodoList={setTodoList}
              todoList={todoList}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
