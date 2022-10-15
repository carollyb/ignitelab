import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput(props: TextInputProps) {
  return (
    <input className={clsx(
      "p-4 rounded bg-gray-800 w-full outline-none text-gray-100 text-xs placeholder:text-gray-400 focus:ring focus:ring-violet-800",
      )}
      {...props}
    />
  );
}