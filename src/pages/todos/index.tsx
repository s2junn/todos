import * as React from "react";

import Todo from "../../components/todo/Todo";

import "./Todos.scss";

import {
  useTodoState,
  useTodoDispatch,
} from "../../store/contexts/TodoContext";

type TodosProps = {
  children?: React.ReactNode;
  className?: string;
};

function Todos(props: TodosProps) {
  const { todos = [], editing = false } = useTodoState();
  const dispatch = useTodoDispatch();

  const addTodo = (e: any) => {
    e.preventDefault();
    dispatch({ type: "NEW" });
  };

  return (
    <div className={`todos ${props.className}`}>
      <ul className={`todo-list`}>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            <Todo todo={todo} key={`${todo.id}_${index}`} />
          ))
        ) : (
          <p>
            <span>To Do List is empty!</span>
            <br />
            <span>Try adding a task to the list.</span>
          </p>
        )}
      </ul>
      <div className={`button-area`}>
        <button
          className={`todo-btn btn-add`}
          type="button"
          onClick={addTodo}
          disabled={editing}
        >
          Add
        </button>
      </div>
    </div>
  );
}

Todos.defaultProps = {
  className: "",
};

export default React.memo(Todos);
