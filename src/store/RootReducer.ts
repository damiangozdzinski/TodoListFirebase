import { combineReducers } from 'redux';
import { listsReducer } from './lists/lists.reducer';
import { mainReducer } from './main/main.reducer';

const RootReducer = combineReducers({
  main: mainReducer,
  lists: listsReducer
});

export default RootReducer;
