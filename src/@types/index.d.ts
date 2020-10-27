export type ITodo = {
  id?: string;
  task: string;
  details?: string;
  deadline?: Date;
  priority: number;
  isDone?: boolean;
  created?: Date;
  updated?: Date;
  completed?: Date;
  editing?: boolean;
};

export enum Priority {
  'lowest' = 1,
  'low',
  'medium',
  'high',
  'highest'
}

export const TodoPriority: {[Key in Priority]: string} = {
  [Priority.lowest]: '매우낮음',
  [Priority.low]: '낮음',
  [Priority.medium]: '보통',
  [Priority.high]: '높음',
  [Priority.highest]:'매우 높음'
}