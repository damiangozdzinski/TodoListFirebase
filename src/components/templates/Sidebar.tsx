import { useCallback } from 'react';
import clsx from 'clsx';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { setSelectedList } from '../../store/main/main.actions';
import Button from '../atoms/Button';
import { SidebarT } from './templates.types';
import { AddNewList } from '../../store/lists/lists.actions';

const Sidebar = ({ showSidebar, setShowSidebar }: SidebarT) => {
  const dispatch = useAppDispatch();

  const lists = useTypedSelector((state) => state.lists.lists);
  const selectedList = useTypedSelector((state) => state.main.selectedList);

  const selectList = useCallback((id: string) => dispatch(setSelectedList(id)), [selectedList]);

  const addNewList = () => {
    dispatch<any>(AddNewList());
  };

  return (
    <div
      className={clsx(
        'absolute md:relative min-h-screen w-full md:max-w-[22rem] top-0  bg-slate-900 z-1 transition-all duration-300 p-6 pt-24',
        showSidebar ? 'left-0' : '-left-full md:left-0'
      )}>
      <Button
        icon={<PlusCircleIcon className="text-white max-w-[1.325rem] mr-1" />}
        title="ADD NEW LIST"
        onClick={() => addNewList()}
      />
      {!!lists?.length &&
        lists.map(({ id, name }) => (
          <Button
            key={id}
            title={name}
            onClick={() => {
              selectList(id);
              setShowSidebar(false);
            }}
          />
        ))}
    </div>
  );
};

export default Sidebar;
