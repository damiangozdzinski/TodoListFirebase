import { Dispatch } from 'redux';
import { newListMock } from '../../constants/NewListMock';
import { addDocument } from '../../firebase/addDocument';
import { getCollection } from '../../firebase/getCollection';
import { updateDocument } from '../../firebase/updateDocument';
import { setSelectedList } from '../main/main.actions';
import Store from '../store';
import { CreateNewTodoListAction, ListsReducerActions } from './lists.types';

export const createNewTodoList = (): CreateNewTodoListAction => ({
  type: ListsReducerActions.CREATE_NEW_TODO_LIST
});

export const GetLists = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch({
      type: ListsReducerActions.FETCH_LISTS_LOADING
    });

    const user = localStorage.getItem('todo-app-user') ?? '';
    const userID = await JSON.parse(user);
    const coll = await getCollection('todo-lists', userID);

    if (userID && coll === undefined) {
      await addDocument('todo-lists', userID, newListMock);
      await dispatch({
        type: ListsReducerActions.FETCH_LISTS_SUCCESS,
        payload: newListMock.lists
      });
    } else {
      if (coll) {
        await dispatch({
          type: ListsReducerActions.FETCH_LISTS_SUCCESS,
          payload: coll.lists
        });
      }
    }
    coll && (await dispatch(setSelectedList(coll.lists[0].id)));
  } catch (e) {
    dispatch({
      type: ListsReducerActions.FETCH_LISTS_FAIL
    });
    console.error(e);
  }
};

export const AddNewList = () => async (dispatch: Dispatch<any>) => {
  try {
    dispatch(createNewTodoList());
    const store = Store.getState().lists.lists;
    const user = localStorage.getItem('todo-app-user') ?? '';
    const userID = await JSON.parse(user);
    const coll = await getCollection('todo-lists', userID);

    await updateDocument('todo-lists', userID, { lists: store });
  } catch (e) {
    dispatch({
      type: ListsReducerActions.FETCH_LISTS_FAIL
    });
    console.log('error', e);
  }
};
