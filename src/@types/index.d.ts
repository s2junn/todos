export type HTMLElementProps = {
  id?: string;
  className?: string;
};

export type ReactComponentProps = HTMLElementProps & {
  children?: React.ReactNode;
};

export interface ITodo {
  id?: string; //TODO: HTML unique attribute 인 id 와 중복될 수 있으므로 id 라는 이름 사용 지양
  task: string;
  details?: string;
  deadline?: Date;
  priority?: number;
  isDone?: boolean;
  created?: Date;
  updated?: Date;
  completed?: Date;
  editing?: boolean;
  children?: Array<T>;
}

export interface IPriority {
  label: string;
}
