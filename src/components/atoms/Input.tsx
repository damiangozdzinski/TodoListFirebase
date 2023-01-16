import { IInput } from './atoms.types';

const Input = ({ name, label, ...rest }: IInput) => (
  <>
    {label && <label htmlFor={name}>{label}</label>}
    <input id={name} {...rest} className="bg-slate-800 px-4 py-2 rounded-md w-full" />
  </>
);

export default Input;
