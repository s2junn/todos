import * as React from "react";

import "./TodoDisplay.scss";

import { ITodo, TodoPriority } from "../../../@types/index.d";
// import { todoPriority } from "../../../models/Todo";
import { dateFormatter } from "../../../utilities";
import {
  useTodoState,
  useTodoDispatch,
} from "../../../store/contexts/TodoContext";

type TodoDisplayProps = {
  children?: React.ReactNode;
  className?: string;
  todo: ITodo;
};

function TodoDisplay(props: TodoDisplayProps) {
  const { editing } = useTodoState();
  const dispatch = useTodoDispatch();

  const completeTodo = (e: any) => {
    const isDone = e.currentTarget.checked;
    dispatch({
      type: "UPDATE",
      payload: {
        ...props.todo,
        isDone: isDone,
        completed: isDone ? new Date() : undefined,
      },
    });
  };

  const editTodo = (e: any) => {
    e.preventDefault();
    dispatch({ type: "EDIT", payload: { ...props.todo } });
  };

  const deleteTodo = (e: any) => {
    e.preventDefault();
    dispatch({ type: "DELETE", payload: { ...props.todo } });
  };

  return (
    <div className={`todo-display ${props.className}`}>
      <div className={`checkbox-wrapper`}>
        <input
          type="checkbox"
          checked={props.todo.isDone}
          onChange={completeTodo}
          disabled={editing}
        />
      </div>
      <div className={`contents-wrapper`}>
        <div className={`task-header`}>
          <h3 className={`todo-task`}>{props.todo.task}</h3>
          <div className={`button-wrapper`}>
            <button
              className={`todo-btn btn-edit`}
              onClick={editTodo}
              disabled={editing || props.todo.isDone}
            >
              Edit
            </button>
            <button
              className={`todo-btn btn-delete`}
              onClick={deleteTodo}
              disabled={editing}
            >
              Delete
            </button>
          </div>
        </div>
        {!!props.todo.details?.trim() && (
          <p className={`todo-details`}>{props.todo.details}</p>
        )}
        <div className={`extra-info`}>
          <div className={`action-info`}>
            <span className={`todo-info`}>
              <span className={`label`}>우선순위 : </span>
              <span className={`value`}>
                {TodoPriority[props.todo.priority]}
              </span>
            </span>
            {!!props.todo.deadline && (
              <span className={`todo-info`}>
                <span className={`label`}>마감기한 : </span>
                <span className={`value`}>
                  {`${dateFormatter("yyyy.MM.dd (KS)", props.todo.deadline)}`}
                </span>
              </span>
            )}
            {!!props.todo.deadline &&
              new Date() > new Date(props.todo.deadline) && (
                <span className={`todo-info caution`}>
                  마감기한이 지났습니다.
                </span>
              )}
          </div>
          <div className={`datetime-info`}>
            <span className={`todo-info`}>
              <span className={`label`}>created : </span>
              <span className={`value`}>
                {`${dateFormatter(
                  "yyyy.MM.dd (KS) HH:mm:ss",
                  props.todo.created
                )}`}
              </span>
            </span>
            {!!props.todo.updated && (
              <span className={`todo-info`}>
                <span className={`label`}>last updated : </span>
                <span className={`value`}>
                  {`${dateFormatter(
                    "yyyy.MM.dd (KS) HH:mm:ss",
                    props.todo.updated
                  )}`}
                </span>
              </span>
            )}
            {!!props.todo.completed && (
              <span className={`todo-info`}>
                <span className={`label`}>completed : </span>
                <span className={`value`}>
                  {`${dateFormatter(
                    "yyyy.MM.dd (KS) HH:mm:ss",
                    props.todo.completed
                  )}`}
                </span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

TodoDisplay.defaultProps = {
  className: "",
};

export default React.memo(TodoDisplay);
