import { useEffect, useRef, useState } from 'react';
import { ITextarea } from './atoms.types';

const Textarea = ({ name, label, ...rest }: ITextarea) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [val, setVal] = useState(rest.value);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0px';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [val]);

  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <textarea
        ref={textareaRef}
        id={name}
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
        {...rest}
        className="bg-slate-800 px-4 py-2 rounded-md w-full min-h-fit"
      />
    </>
  );
};

export default Textarea;
