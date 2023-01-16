import { nanoid } from 'nanoid';
import { ListsActionTypes, ListsReducerActions, ListsReducerState, TList } from './lists.types';

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
    case ListsReducerActions.CREATE_NEW_TODO_LIST: {
      const newList: TList = {
        id: nanoid(),
        name: 'New list',
        createData: new Date(),
        todo: []
      };
      return {
        ...state,
        lists: state.lists.concat(newList)
      };
    }
    default:
      return state;
  }
};
