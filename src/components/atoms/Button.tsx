import { TButton } from './atoms.types';

const Button = ({ icon, title, onClick }: TButton) => (
  <button
    onClick={onClick}
    className=" group flex row items-center justify-center w-full py-2 px-2 my-3 rounded-md cursor-pointer text-white text-sm font-bold bg-slate-800 hover:bg-slate-700 active:bg-slate-600">
    {icon && icon}
    {title && title}
  </button>
);

export default Button;
