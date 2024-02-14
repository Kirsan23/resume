import { ReactNode } from 'react';

import { ItemTemplate } from '../../templates/ItemTemplate/ItemTemplate';

import styles from './TabItem.module.scss';

interface TabItemProps {
  children: ReactNode;
}

export const TabItem: React.FC<TabItemProps> = ({ children }) => {
  return <ItemTemplate className={styles.tabItem}>{children}</ItemTemplate>;
};
