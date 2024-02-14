import { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { ItemTemplate } from '../../templates/ItemTemplate/ItemTemplate';
import { Contacts } from '../../components';
import { ThemeToggler, LanguageToggler } from '../buttons';
import { Button } from '../buttons';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const [isCkicked, setIsCkicked] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleClick = () => {
    setIsCkicked(!isCkicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 25;

      if (window.scrollY >= scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ItemTemplate
      component='header'
      className={`${styles.container} ${scrolled ? styles.scrolled : ''}`}
    >
      <Contacts />
      <div
        className={`${styles.header} ${isCkicked ? styles.showContacts : ''}`}
      >
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>FRONT END</h1>
          <h2 className={styles.subTitle}>developer</h2>
        </div>
        <LanguageToggler />
        <ThemeToggler />
        <Button
          className={`${styles.contactsBtn} ${isCkicked ? styles.clicked : ''}`}
          onClick={handleClick}
        >
          <AccountCircleIcon className={styles.contactsIcon} />
        </Button>
      </div>
    </ItemTemplate>
  );
};
