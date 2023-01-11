import { ListsActionTypes, ListsReducerActions, ListsReducerState } from './lists.types';

const initialState = {
  loading: false,
  lists: []
};

export const listsReducer = (state: ListsReducerState = initialState, action: ListsActionTypes) => {
  switch (action.type) {
    case ListsReducerActions.FETCH_LISTS_LOADING:
      return {
        ...state,
        loading: true
      };
    case ListsReducerActions.FETCH_LISTS_FAIL:
      return {
        ...state,
        loading: false
      };
    case ListsReducerActions.FETCH_LISTS_SUCCESS:
      console.log('action', action.payload);
      return {
        ...state,
        loading: false,
        lists: action.payload
      };
    default:
      return state;
  }
};
