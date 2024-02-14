import { ReactNode } from 'react';
import styles from './Toggler.module.scss';

interface TogglerProps {
  disableIcon: ReactNode;
  enableIcon: ReactNode;
  onClick: () => void;
  enabled: boolean;
  className?: string;
}

export const Toggler: React.FC<TogglerProps> = ({
  disableIcon,
  enableIcon,
  onClick,
  enabled,
  className,
}) => {
  return (
    <button
      className={`${styles.toggler} ${className ? className : ''}`}
      onClick={onClick}
    >
      <div className={`${styles.disableIcon} ${enabled ? '' : styles.enabled}`}>
        {disableIcon}
      </div>
      <div className={`${styles.enableIcon} ${enabled ? styles.enabled : ''}`}>
        {enableIcon}
      </div>
    </button>
  );
};
