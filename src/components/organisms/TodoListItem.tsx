import { useState } from 'react';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { TodoItem } from '../../store/lists/lists.types';
import TodoListItemTitle from '../molecules/TodoListItemTitle';
import TodoListItemDescription from '../molecules/TodoListItemDescription';

const TodoListItem = ({ id, createData, description, done, title }: TodoItem) => {
  const dispatch = useAppDispatch();
  const listId = useAppSelector((state) => state.main.selectedList);
  const [edit, setEdit] = useState(false);
  const [newTitle, setNewTitle] = useState<string>(title);
  const [newDescription, setNewDescription] = useState<string>(description);
  return (
    <div className="flex flex-col p-4 my-6 bg-slate-900 rounded-md text-white">
      <div
        className={clsx(
          done && 'line-through',
          'flex flex-col items-start justify-between font-semibold tracking-wide'
        )}>
        <TodoListItemTitle title={newTitle} setTitle={setNewTitle} edit={edit} />
        <TodoListItemDescription
          description={newDescription}
          setDescription={setNewDescription}
          edit={edit}
          done={done}
        />
      </div>
    </div>
  );
};

export default TodoListItem;
