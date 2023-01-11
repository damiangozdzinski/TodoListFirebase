import { MainActionTypes, MainReducerActions } from './main.types';
import { MainReducerState } from './main.types';

const initialState = {
  userId: '',
  selectedList: ''
};

export const mainReducer = (state: MainReducerState = initialState, action: MainActionTypes) => {
  switch (action.type) {
    case MainReducerActions.SET_USER_ID:
      return {
        ...state,
        userId: action.payload
      };
    case MainReducerActions.SET_CURRENT_LIST:
      return {
        ...state,
        selectedList: action.payload
      };

    default:
      return state;
  }
};
