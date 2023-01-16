import { Dispatch, SetStateAction } from 'react';
// import { EditTodoListItemAction } from '../../store/lists/lists.types';

export type TTodoListItemBar = {
  id: string;
  done: boolean;
  edit: boolean;
  setEdit: Dispatch<SetStateAction<boolean>>;
  onApprove: () => false;
  // | EditTodoListItemAction;
  onCancel: () => void;
};

type NewType = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  edit: boolean;
};

export type TTodoListItemTitle = NewType;

export type TTodoListItemDescription = {
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  edit: boolean;
  done: boolean;
};

export type NewTodoListItemContentProps = {
  isOpen: boolean;
};

export type NewTodoListItemBarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
