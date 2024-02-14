import { Fragment, ReactNode, useState } from 'react';

import { RGBButton } from '../buttons';

import styles from './TabPanel.module.scss';

interface TabPanelProps {
  titles: string[];
  children: ReactNode[];
  className?: string;
}

export const TabPanel: React.FC<TabPanelProps> = ({
  titles,
  children,
  className,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className={`${styles.tabPanel} ${className ? className : ''}`}>
        {titles.map((title, i) => (
          <Fragment key={title}>
            <RGBButton
              title={title}
              activated={i === activeTab}
              onClick={() => handleClick(i)}
              className={styles.btn}
            />
          </Fragment>
        ))}
      </div>
      {children[activeTab]}
    </>
  );
};
