import * as React from "react";

import TodoDisplay from "./todo-display/TodoDisplay";
import TodoInput from "./todo-input/TodoInput";

import "./Todo.scss";

import { ITodo } from "../../types/index";

type TodoProps = {
  children?: React.ReactNode;
  className?: string;
  todo: ITodo;
};

function Todo(props: TodoProps) {
  return (
    <li
      className={`todo ${props.className} ${
        props.todo.editing ? "editing" : ""
      } ${props.todo.isDone ? "completed" : ""}`}
    >
      {!props.todo.editing ? (
        <TodoDisplay todo={props.todo}></TodoDisplay>
      ) : (
        <TodoInput todo={props.todo}></TodoInput>
      )}
    </li>
  );
}

Todo.defaultProps = {
  className: "",
};

export default React.memo(Todo);
