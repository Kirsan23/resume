import { forwardRef } from 'react';

import { Button } from '../../buttons';
import { ButtonProps } from '../Button/Button';

import styles from './RGBButton.module.scss';

interface RGBButtonProps extends ButtonProps {
  activated?: boolean;
  className?: string;
}

export const RGBButton = forwardRef<HTMLButtonElement, RGBButtonProps>(
  ({ activated, className, ...buttonProps }, ref) => {
    return (
      <Button
        {...buttonProps}
        className={`${styles.rgbBtn} ${activated ? styles.active : ''} ${
          className ? className : ''
        }`}
        nonScale
        ref={ref}
      >
        {buttonProps.children}
      </Button>
    );
  }
);
