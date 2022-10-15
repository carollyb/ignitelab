import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx'
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={clsx(
      "p-3 bg-violet-800 rounded font-semibold text-gray-800 text-sm w-full transition-colors outline-none hover:bg-violet-500 focus:ring ring-offset-2 ring-offset-gray-800 focus:ring-violet-800",
      className,
      )}
      {...props}
      >
        {children}
    </Comp>
  );
}