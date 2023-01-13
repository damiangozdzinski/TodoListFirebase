import { PlusCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import Button from '../atoms/Button';
import { SidebarT } from './templates.types';

const Sidebar = ({ showSidebar, setShowSidebar }: SidebarT) => {
  const lists = useTypedSelector((state) => state.lists.lists);

  return (
    <div
      className={clsx(
        'absolute min-h-screen w-full md:max-w-[22rem] top-0  bg-slate-900 z-1 transition-all duration-300 p-6 pt-24',
        showSidebar ? 'left-0' : '-left-full md:left-0'
      )}>
      <Button
        icon={<PlusCircleIcon className="text-white max-w-[1.325rem] mr-1" />}
        title="ADD NEW LIST"
        onClick={() => console.log('ee')}
      />
      {!!lists?.length &&
        lists.map(({ id, name }) => (
          <Button key={id} title={name} onClick={() => console.log('id', id)} />
        ))}
    </div>
  );
};

export default Sidebar;
