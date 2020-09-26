import { ITodo } from "../@types/index";

const TODO_ID_LENGTH = 8;
const generateId = (length: number) =>
  [...Array(length)].map(() => Math.random().toString(36)[2]).join("");

export const todoPriority = [
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

export default class Todo implements ITodo {
  id?: string;
  task: string;
  details?: string;
  deadline?: Date;
  priority?: number;
  isDone?: boolean;
  created?: Date;
  updated?: Date;
  completed?: Date;
  editing?: boolean;

  constructor({
    id = generateId(TODO_ID_LENGTH),
    task = "",
    details = "",
    priority = 3,
    isDone = false,
    deadline = undefined,
    created = undefined,
    updated = undefined,
    completed = undefined,
    editing = true,
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
  }
}
