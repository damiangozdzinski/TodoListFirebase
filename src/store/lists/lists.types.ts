export interface ListsReducerState {
  loading: boolean;
  lists: TList[];
}

export enum ListsReducerActions {
  FETCH_LISTS_SUCCESS = 'FETCH_LISTS_SUCCESS',
  FETCH_LISTS_LOADING = 'FETCH_LISTS_LOADING',
  FETCH_LISTS_FAIL = 'FETCH_LISTS_FAIL',
  CREATE_NEW_TODO_LIST = 'CREATE_NEW_TODO_LIST'
}

export interface FetchListsSuccess {
  type: ListsReducerActions.FETCH_LISTS_SUCCESS;
  payload: TList[];
}
export interface FetchListsLoading {
  type: ListsReducerActions.FETCH_LISTS_LOADING;
}

export interface FetchListsFail {
  type: ListsReducerActions.FETCH_LISTS_FAIL;
}

export interface CreateNewTodoListAction {
  type: ListsReducerActions.CREATE_NEW_TODO_LIST;
}

export type ListsActionTypes =
  | FetchListsSuccess
  | FetchListsLoading
  | FetchListsFail
  | CreateNewTodoListAction;

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
