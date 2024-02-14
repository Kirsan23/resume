import { ReactNode, forwardRef } from 'react';

import styles from './Button.module.scss';

export interface ButtonProps {
  onClick: () => void;
  children?: ReactNode;
  title?: string;
  className?: string;
  nonScale?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ onClick, children, title, className, nonScale = false }, ref) => {
    return (
      <button
        className={`${styles.btn} ${nonScale ? styles.nonScale : ''} ${
          className ? className : ''
        }`}
        onClick={onClick}
        ref={ref}
      >
        {children || title}
      </button>
    );
  }
);
