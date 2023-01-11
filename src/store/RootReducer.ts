import { combineReducers } from 'redux';
import { listsReducer } from './lists/lists.reducer';

const RootReducer = combineReducers({
  lists: listsReducer
});

export default RootReducer;
