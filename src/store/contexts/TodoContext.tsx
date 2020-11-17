import * as React from "react";
import { createContext, Dispatch, useContext, useReducer } from "react";
import { ITodo } from "../../@types";
import Todo from "../../models/Todo";
import { getItem, setItem } from "../../utilities";

const initialState = {
  todos: [],
  editing: false,
};

type TodoState = {
  todos?: ITodo[];
  editing: boolean;
};

type TodoAction =
  | { type: "NEW" }
  | { type: "NEW_CHILD"; payload: ITodo }
  | { type: "EDIT"; payload: ITodo }
  | { type: "UPDATE"; payload: ITodo }
  | { type: "DELETE"; payload: ITodo };

type TodoDispatch = Dispatch<TodoAction>;

function todoReducer(state: any, action: TodoAction) {

  function* findTodo (todos: ITodo[], target: string): Iterator<ITodo, any, boolean> {
    if ( !todos ) {
      return;
    }

    for ( let i = 0; i < todos.length; i++ ) {
      const todo = todos[i];
      // yield (todo.id === target) ? todo : findTodo(todo.children || [], target);
      if (todo.id === target) {
        yield todo;
      } else {
        findTodo(todo.children || [], target);
      }
    }
  }

  const addTodo = (todo: ITodo, target: string): ITodo => {
    return todo.id === target ? { 
      ...todo,
      children: [
        ...(todo.children || []),
        new Todo({ task: "", editing: true })
      ] 
    } : (!!todo.children && todo.children.length > 0) ? 
      { 
        ...todo,
        children: todo.children.map( (child) => updateTodo(child, target) ) 
      }
      : todo
  }

   const updateTodo = (todo: ITodo, target: string, options: any = {}): ITodo => {
    return todo.id === target ? { 
      ...todo,
      ...options 
    } : (!!todo.children && todo.children.length > 0) ? 
      { 
        ...todo,
        children: todo.children.map( (child) => updateTodo(child, target, options) ) 
      }
      : todo
  }

  function* deleteTodo (todos: ITodo[], target: string) {
    if (!todos) {
      return;
    }

    for ( let i = todos.length - 1; i >= 0; i-- ) {
      const todo = todos[i];
      // yield (todo.id === target) ? todo : findTodo(todo.children || [], target);
      if (todo.id === target) {
        yield todo;
      } else {
        findTodo(todo.children || [], target);
      }
    }
  }

  let newState;
  switch (action.type) {
    case "NEW": {
      const newTodos = [...(state.todos), new Todo({ task: "" })];

      return {
        ...state,
        todos: newTodos,
        editing: true,
      };
    }

    case "NEW_CHILD": {
      const newTodos = [
        ...(state.todos.map((todo: ITodo) => addTodo( todo, action.payload.id || '' ))),
      ]

      newState = {
        ...state,
        todos: newTodos,
        editing: false,
      };
    }

      break;
    case "EDIT":
      {
        const newTodos = [
          ...(state.todos.map((todo: ITodo) => updateTodo( todo, action.payload.id || '', { editing: true } ))),
        ];

        newState = {
          ...state,
          todos: newTodos,
          editing: true,
        };
      }

      break;
    case "UPDATE":
      {
        const newTodos = [
          ...(state.todos.map((todo: ITodo) => updateTodo( todo, action.payload.id || '', action.payload ))),
        ];

        newTodos.sort(function (prev: ITodo, next: ITodo) {
          // prev - next : ASC(오름차순)
          // next - prev : DESC(내림차순)

          const now = Date.now();
          const compare = {
            completed:
              +new Date(next.completed || now) -
              +new Date(prev.completed || now),
            deadline:
              !!prev.deadline && !!next.deadline
                ? +new Date(prev.deadline || now) -
                  +new Date(next.deadline || now)
                : !prev.deadline && !!next.deadline
                ? 1
                : !!prev.deadline && !next.deadline
                ? -1
                : 0,
            priority: (next.priority || 3) - (prev.priority || 3),
            updated: +(prev.updated || 0) - +(next.updated || 0),
            created:
              +new Date(prev.created || now) - +new Date(next.created || now),
          };

          return compare.completed !== 0
            ? compare.completed
            : compare.deadline !== 0
            ? compare.deadline
            : compare.priority !== 0
            ? compare.priority
            : compare.created;
        });

        newState = {
          ...state,
          todos: newTodos,
          editing: false,
        };
      }

      break;
    case "DELETE":
      {
        const newTodos = [
          ...(state.todos.filter((todo: ITodo) => todo.id !== action.payload.id)),
        ];

        newState = {
          ...state,
          todos: newTodos,
          editing: false,
        };
      }
      break;
    default:
      throw new Error(`Unhandled action type: ${action}`);
  }

  setItem("todos", newState);

  return newState;
}

const TodoStateContext = createContext<TodoState | undefined>(undefined);
const TodoDispatchContext = createContext<TodoDispatch | undefined>(undefined);

export function TodoProvider({ children }: any) {
  const [state, dispatch] = useReducer(
    todoReducer,
    getItem("todos") || initialState
  );

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider :: TodoStateContext");
  }

  return context;
}

export function useTodoDispatch() {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider :: TodoDispatchContext");
  }

  return context;
}
