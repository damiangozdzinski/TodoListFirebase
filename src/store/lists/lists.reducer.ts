import { ListsActionTypes, ListsReducerState } from './lists.types';

const initialState = {
  lists: []
};

export const listsReducer = (state: ListsReducerState = initialState, action: ListsActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
};
