import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useEffect, useState } from 'react';

import { Toggler } from '../../buttons';

import styles from './ThemeToggler.module.scss';

const GET_INIT_THEME = () => {
  const userTheme =
    typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
  const agentDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  return userTheme === 'dark' || (userTheme === null && agentDarkMode);
};

export const ThemeToggler: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(GET_INIT_THEME());

  const toggleTheme = () => {
    setDarkMode((prevState) => !prevState);
  };
  const setDarkTheme = () => {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  };
  const setLightTheme = () => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  };

  useEffect(() => {
    if (darkMode) {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  }, [darkMode]);

  return (
    <Toggler
      className={styles.themeToggler}
      disableIcon={<WbSunnyIcon className={styles.icon} />}
      enableIcon={
        <ModeNightIcon
          className={styles.icon}
          sx={{ transform: 'translateX(3px)' }}
        />
      }
      onClick={toggleTheme}
      enabled={darkMode}
    />
  );
};
