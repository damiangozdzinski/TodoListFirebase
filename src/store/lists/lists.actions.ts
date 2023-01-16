import { Dispatch } from 'redux';
import { newListMock } from '../../constants/NewListMock';
import { addDocument } from '../../firebase/addDocument';
import { getCollection } from '../../firebase/getCollection';
import { setSelectedList } from '../main/main.actions';
import { ListsReducerActions } from './lists.types';

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
        payload: ['none']
      });
    } else {
      if (coll) {
        await dispatch({
          type: ListsReducerActions.FETCH_LISTS_SUCCESS,
          payload: coll.lists
        });

        await dispatch(setSelectedList(coll.lists[0].id));
      }
    }
  } catch (e) {
    dispatch({
      type: ListsReducerActions.FETCH_LISTS_FAIL
    });
    console.error(e);
  }
};
