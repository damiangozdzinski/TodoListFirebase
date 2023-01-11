export interface ListsReducerState {
  lists: TList[];
}

export type ListsActionTypes = any;

export type TodoItem = {
  id: string;
  done: boolean;
  title: string;
  createData: Date;
  description: string;
};

export type TList = {
  id: string;
  name: string;
  createData: Date;
  todo: TodoItem[];
};
