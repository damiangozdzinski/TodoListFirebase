import { useEffect, useState } from 'react';
import date from 'date-and-time';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { TList } from '../../store/lists/lists.types';
import TodoListItem from '../organisms/TodoListItem';

const Main = () => {
  const lists = useTypedSelector((state) => state.lists.lists);
  const selectedListID = useTypedSelector((state) => state.main.selectedList);

  const [selectedList, setSelectedList] = useState<TList | null>(lists[0]);

  useEffect(
    () => setSelectedList(lists.filter((list) => list.id === selectedListID)[0]),
    [selectedListID, lists]
  );

  return (
    <div className="bg-slate-700 min-h-screen h-fit w-full p-6 pt-32">
      {!!selectedList && (
        <div className="text-white">
          <div className="flex row group items-center justify-start w-full">
            <h1 className="text-white text-3xl font-semibold tracking-wider mb-3 mt-2">
              {selectedList.name}
            </h1>
          </div>
          <h3 className="font-semibold">00-00-0000</h3>
        </div>
      )}

      <div>
        {!!selectedList?.todo?.length &&
          selectedList.todo.map(({ id, createData, description, done, title }) => (
            <TodoListItem
              key={id}
              id={id}
              createData={createData}
              description={description}
              done={done}
              title={title}
            />
          ))}
      </div>
    </div>
  );
};

export default Main;
