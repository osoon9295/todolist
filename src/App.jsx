import React from "react";
import { useState } from "react";
import uuid from "react-uuid";

const App = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

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
    <div>
      <form onSubmit={handleAddTodo}>
        <label>할 일 : </label>
        <input type="text" value={input} onChange={getInputValue} />
        <button type="submit"> 추가 </button>
      </form>
      <ul>
        {todoList.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
            >
              <input
                type="checkbox"
                onChange={() => handleChangeIsDone(todo.id)}
              />
              {todo.text}
              <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
