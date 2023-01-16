import Input from '../atoms/Input';
import { TTodoListItemTitle } from './Molecules.types';

const TodoListItemTitle = ({ title, setTitle, edit }: TTodoListItemTitle) => (
  <>
    {edit ? (
      <Input
        name="task title"
        placeholder="Input title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    ) : (
      <h3 className="max-w-2/3 text-xl">{title}</h3>
    )}
  </>
);
export default TodoListItemTitle;
