import React, { ChangeEvent, FormEvent, useState } from "react";
import uuid from "react-uuid";

interface Todo {
  id: string;
  text: string;
  isDone: boolean;
}

const App: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  // 인풋창의 입력된 값을 뽑아내는 중
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  // 추가버튼을 눌렀을 때 투두리스트에 새로운 투두 쌓기
  const addTodoList = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextTodo: Todo = { id: uuid(), text: input, isDone: false };
    setTodoList((prev) => [...prev, nextTodo]);
    setInput("");
  };

  // 목록 삭제
  const deleteTodo = (id: string) => {
    const filteredTodoList = todoList.filter((todo) => id !== todo.id);
    setTodoList(filteredTodoList);
  };

  // isDone 변경
  const changeIsDone = (id: string) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <div>
      <form onSubmit={addTodoList}>
        <label>할일 추가하기 : </label>
        <input
          type="text"
          placeholder="할일을 입력하세요."
          value={input}
          onChange={changeInput}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        <h2>working</h2>
        {todoList
          .filter((todo) => todo.isDone === false)
          .map((todo) => {
            return (
              <li key={todo.id}>
                {todo.text}
                <button
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    changeIsDone(todo.id);
                  }}
                >
                  {todo.isDone ? "취소" : "완료"}
                </button>
              </li>
            );
          })}
      </ul>
      <ul>
        <h2>Done</h2>
        {todoList
          .filter((todo) => todo.isDone === true)
          .map((todo) => {
            return (
              <li key={todo.id}>
                {todo.text}
                <button
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  삭제
                </button>
                <button
                  onClick={() => {
                    changeIsDone(todo.id);
                  }}
                >
                  {todo.isDone ? "취소" : "완료"}
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default App;
