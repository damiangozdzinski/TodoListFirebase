import Button from '../atoms/Button';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { HeaderT } from './templates.types';

const Header = ({ showSidebar, setShowSidebar }: HeaderT) => (
  <div className="absolute top-0 w-full bg-slate-900 text-white flex md:flex-row-reverse justify-between items-center text-2xl font-semibold tracking-wider px-4 py-4 md:py-8">
    <div className="relative w-10 h-full flex md:hidden items-center z-50">
      <Button
        icon={showSidebar ? <XMarkIcon /> : <Bars3Icon />}
        onClick={() => setShowSidebar(!showSidebar)}
      />
    </div>
    <h3>Todo List App</h3>
  </div>
);

export default Header;
