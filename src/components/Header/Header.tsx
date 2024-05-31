import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { ItemTemplate } from '../../templates/ItemTemplate/ItemTemplate';
import { Contacts } from '../../components';
import { ThemeToggler, LanguageToggler } from '../buttons';
import { Button } from '../buttons';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
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
        className={`${styles.header} ${isClicked ? styles.showContacts : ''}`}
      >
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>BEREHOVYI</h1>
          <h2 className={styles.subTitle}>Kyrylo</h2>
        </div>
        <LanguageToggler />
        <ThemeToggler />
        <Button
          className={`${styles.contactsBtn} ${isClicked ? styles.clicked : ''}`}
          onClick={handleClick}
        >
          <AccountCircleIcon className={styles.contactsIcon} />
        </Button>
      </div>
    </ItemTemplate>
  );
};
