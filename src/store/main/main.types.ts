import store from '../store';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// * Initial State * //
export interface MainReducerState {
  userId: string;
  selectedList?: string;
}

// * Actions Name Type * //

export enum MainReducerActions {
  SET_CURRENT_LIST = 'SET_CURRENT_LIST',
  SET_USER_ID = 'SET_USER_ID'
}

// * Actions Types * //

export interface SetUserIdAction {
  type: MainReducerActions.SET_USER_ID;
  payload: string;
}

export interface SetSelectedListAction {
  type: MainReducerActions.SET_CURRENT_LIST;
  payload: string;
}

export type MainActionTypes = SetUserIdAction | SetSelectedListAction;

// export type Action = {
//   type: string;
//   payload?: any;
// };
