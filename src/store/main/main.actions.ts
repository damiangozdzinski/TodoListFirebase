import { MainReducerActions, SetSelectedListAction, SetUserIdAction } from './main.types';

export const setUserId = (userId: string): SetUserIdAction => ({
  type: MainReducerActions.SET_USER_ID,
  payload: userId
});

export const setSelectedList = (id: string): SetSelectedListAction => ({
  type: MainReducerActions.SET_CURRENT_LIST,
  payload: id
});
