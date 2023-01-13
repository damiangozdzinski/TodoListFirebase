import { InputHTMLAttributes, MouseEventHandler, ReactNode, TextareaHTMLAttributes } from 'react';

export type TSidebarButton = {
  icon?: ReactNode;
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export type TButton = {
  icon?: ReactNode;
  title?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
}
