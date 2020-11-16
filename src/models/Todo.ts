import { ITodo } from "../@types/index";

const TODO_ID_LENGTH = 8;
const _generateId = (length: number) =>
  [...Array(length)].map(() => Math.random().toString(36)[2]).join("");

export const todoPriorities = [
  {
    label: "매우 높음",
    value: 5,
  },
  {
    label: "높음",
    value: 4,
  },
  {
    label: "보통",
    value: 3,
  },
  {
    label: "낮음",
    value: 2,
  },
  {
    label: "매우 낮음",
    value: 1,
  },
];

/**
 *
 */
//*
export default class Todo implements ITodo {
  id?: string;
  task: string;
  details?: string;
  deadline?: Date | undefined;
  priority?: number;
  isDone?: boolean;
  created?: Date | undefined;
  updated?: Date | undefined;
  completed?: Date | undefined;
  editing?: boolean;
  children?: Array<Todo>;

  constructor({
    id = _generateId(TODO_ID_LENGTH),
    task = "",
    details = "",
    priority = 3,
    isDone = false,
    deadline = undefined,
    created = undefined,
    updated = undefined,
    completed = undefined,
    editing = true,
    children = [],
  }) {
    this.id = id;
    this.task = task;
    this.details = details;
    this.priority = priority;
    this.isDone = isDone;
    this.deadline = deadline;
    this.created = created;
    this.updated = updated;
    this.completed = completed;
    this.editing = editing;
    this.children = children;
  }
}
// */

/**
 * Typescript 에서 접근 제한자를 생성자 함수 매개변수에 사용할 경우에는 해당 매개변수는 class 의 속성이 된다.
 */
/*
export default class Todo implements ITodo {
  constructor(
    public id = _generateId(TODO_ID_LENGTH),
    public task = "",
    public details = "",
    public priority = 3,
    public isDone = false,
    public deadline = undefined,
    public created = undefined,
    public updated = undefined,
    public completed = undefined,
    public editing = true
  ) {}
}
// */
