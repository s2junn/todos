import { ITodo } from "../@types/index";

const TODO_ID_LENGTH = 8;
const generateId = (length: number) =>
  [...Array(length)].map(() => Math.random().toString(36)[2]).join("");


export default class Todo implements ITodo {
  details?: string;
  deadline?: Date;
  priority: number;
  isDone?: boolean;
  created?: Date;
  updated?: Date;
  completed?: Date;
  editing?: boolean;
  

  constructor(public task: string = '', public id: string = generateId(TODO_ID_LENGTH)) {
    this.details = '';
    this.priority = 3;
    this.isDone = false;
    this.deadline = undefined;
    this.created = undefined;
    this.updated = undefined;
    this.completed = undefined;
    this.editing = true;
  }

  
}
