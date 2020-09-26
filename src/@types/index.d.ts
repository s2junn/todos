export type ITodo = {
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
};