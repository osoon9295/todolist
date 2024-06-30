import React from "react";

const TodoItem = ({ todo, setTodoList, todoList }) => {
  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => id !== todo.id));
  };

  const handleChangeIsDone = (id) => {
    setTodoList(
      todoList.map((todo) =>
        id === todo.id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <li style={{ textDecoration: todo.isDone ? "line-through" : "none" }}>
      <input type="checkbox" onChange={() => handleChangeIsDone(todo.id)} />
      {todo.text}
      <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
