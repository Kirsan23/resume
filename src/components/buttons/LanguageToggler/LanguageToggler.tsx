import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Toggler } from '../../buttons';

import styles from './LanguageToggler.module.scss';

export const LanguageToggler: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [ua, setUa] = useState<boolean>(
    currentLanguage === 'ua' || currentLanguage === 'ru' ? true : false
  );

  const toggleLanguage = () => {
    setUa((prevState) => !prevState);
  };

  useEffect(() => {
    if (ua) i18n.changeLanguage('ua');
    else i18n.changeLanguage('en');
  }, [ua]);

  return (
    <Toggler
      className={styles.languageToggler}
      enableIcon={<div className={styles.icon}>UA</div>}
      disableIcon={<div className={styles.icon}>EN</div>}
      onClick={toggleLanguage}
      enabled={ua}
    />
  );
};
