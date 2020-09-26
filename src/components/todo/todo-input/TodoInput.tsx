import * as React from "react";
import { useState } from "react";

import "./TodoInput.scss";

import { ITodo } from "../../../@types";
import { todoPriority } from "../../../models/Todo";
import { dateFormatter } from "../../../utilities";
import { useTodoDispatch } from "../../../store/contexts/TodoContext";

type TodoInputProps = {
  children?: React.ReactNode;
  className?: string;
  todo: ITodo;
};

function TodoInput(props: TodoInputProps) {
  const [task, setTask] = useState(props.todo.task || "");
  const [details, setDetails] = useState(props.todo.details || "");
  const [priority, setPriority] = useState(props.todo.priority || 3);
  const [deadline, setDeadline] = useState(
    (!!props.todo.deadline && new Date(props.todo.deadline)) || undefined
  );

  const dispatch = useTodoDispatch();

  const saveTodo = (e: any) => {
    e.preventDefault();

    if (!task || !task.trim()) {
      alert("Required input item is missing.\nYou should enter task item.");
      return;
    }

    const data = {
      task: task.trim(),
      details: details,
      priority: priority,
      deadline: deadline,
      editing: false,
    };

    if (!!props.todo.created) {
      dispatch({
        type: "UPDATE",
        payload: {
          ...props.todo,
          ...data,
          updated: new Date(),
        },
      });
    } else {
      dispatch({
        type: "UPDATE",
        payload: {
          ...props.todo,
          ...data,
          created: new Date(),
        },
      });
    }
  };

  const cancelToEdit = (e: any) => {
    e.preventDefault();

    if (!!props.todo.created) {
      dispatch({ type: "UPDATE", payload: { ...props.todo, editing: false } });
    } else {
      dispatch({ type: "DELETE", payload: { ...props.todo } });
    }
  };

  return (
    <div className={`todo-input ${props.className}`}>
      <div className={`checkbox-wrapper`}></div>
      <div className={`contents-wrapper`}>
        <div className={`task-header`}>
          <input
            className={`todo-task task-input`}
            type="text"
            value={task}
            placeholder={`Please enter a task here.`}
            onChange={({ target }) => setTask(target.value)}
          />
          <div className={`button-wrapper`}>
            <button
              className={`todo-btn btn-save`}
              onClick={saveTodo}
              disabled={props.todo.isDone}
            >
              Save
            </button>
            <button className={`todo-btn btn-cancel`} onClick={cancelToEdit}>
              Cancel
            </button>
          </div>
        </div>

        <textarea
          className={`todo-details details-input`}
          value={details}
          placeholder={`Please enter more information about the task here.`}
          onChange={({ target }) => setDetails(target.value)}
        />
        <div className={`extra-info`}>
          <div className={`action-info`}>
            <span className={`todo-info`}>
              <select
                id={`todo-priority`}
                value={priority}
                onChange={({ target }) => setPriority(Number(target.value))}
              >
                {todoPriority.map((priority, index) => (
                  <option value={priority.value} key={`todo-priority-${index}`}>
                    {priority.label}
                  </option>
                ))}
              </select>
              <label htmlFor={`todo-priority`}>우선순위</label>
            </span>
            <span className={`todo-info`}>
              <input
                type="date"
                id={`todo-deadline`}
                value={dateFormatter("yyyy-MM-dd", deadline)}
                onChange={({ target }) =>
                  setDeadline(target.valueAsDate || undefined)
                }
              />
              <label htmlFor={`todo-deadline`}>마감기한</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

TodoInput.defaultProps = {
  className: "",
};

export default React.memo(TodoInput);
