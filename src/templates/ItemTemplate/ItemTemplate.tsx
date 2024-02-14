import { ReactNode } from 'react';
import styles from './ItemTemplate.module.scss';

export interface ItemTemplateProps {
  children: ReactNode;
  component?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const ItemTemplate: React.FC<ItemTemplateProps> = ({
  children,
  component = 'div',
  className,
  onClick,
  fullWidth = true,
}) => {
  const Element = component;

  return (
    <Element
      className={`${styles.itemTemplate} ${className ? className : ''} ${
        fullWidth ? '' : styles.notFullWidth
      }`}
      onClick={onClick}
    >
      {children}
    </Element>
  );
};
