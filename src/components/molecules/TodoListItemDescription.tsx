import clsx from 'clsx';
import Textarea from '../atoms/Textarea';
import { TTodoListItemDescription } from './Molecules.types';

const TodoListItemDescription = ({
  description,
  setDescription,
  edit,
  done
}: TTodoListItemDescription) => (
  <>
    {edit ? (
      <Textarea
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    ) : (
      <p className={clsx(done && 'line-through', 'mt-2 text-justify')}>{description}</p>
    )}
  </>
);

export default TodoListItemDescription;
