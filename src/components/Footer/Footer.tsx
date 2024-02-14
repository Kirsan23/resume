import { useState } from 'react';

import { ItemTemplate } from '../../templates';
import { MiniGame } from '../../components';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <ItemTemplate
      className={`${styles.footer} ${isClicked ? '' : styles.unActive}`}
      component='footer'
      fullWidth={false}
    >
      <MiniGame onClick={handleClick} open={isClicked} />
    </ItemTemplate>
  );
};
