import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import PhotoIcon from '@mui/icons-material/Photo';

import { TitledItemTemplate, ItemTemplate } from '../../templates';
import photo from '../../assets/images/main_photo.jpg';

import styles from './About.module.scss';

export const About: React.FC = () => {
  const [showPhoto, setShowPhoto] = useState<boolean>(false);
  const { t } = useTranslation();
  const GOALS = t('about.goals.items', {
    returnObjects: true,
  }) as string[];
  const ADDITIONAL_INFO = t('about.add', {
    returnObjects: true,
  }) as { title: string; value: string }[];
  const photoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    setShowPhoto((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current?.contains(event.target as Node)) {
        return;
      } else if (
        photoRef.current &&
        !photoRef.current.contains(event.target as Node)
      )
        setShowPhoto(false);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [photoRef, buttonRef]);

  return (
    <div className={styles.about}>
      <ItemTemplate
        className={`${styles.characteristics} ${
          showPhoto ? styles.hidden : ''
        }`}
      >
        {showPhoto && (
          <div ref={photoRef} className={styles.photo}>
            <img src={photo} alt="it's me" />
          </div>
        )}
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{t('about.characteristics.name')}</h2>
          <button
            ref={buttonRef}
            className={`${styles.photoBtn} ${showPhoto ? styles.active : ''}`}
            onClick={handleClick}
          >
            <PhotoIcon />
          </button>
        </div>
        <div className={styles.addContainer}>
          {ADDITIONAL_INFO.map(({ title, value }) => (
            <div key={title} className={styles.addItem}>
              <p>{title}</p>
              <p>&#x2022;</p>
              <p className={styles.addItemValue}>{value}</p>
            </div>
          ))}
        </div>
      </ItemTemplate>
      <div className={styles.container}>
        <TitledItemTemplate
          className={styles.item}
          fullWidth={false}
          title={t('about.me.title')}
        >
          <p>{t('about.me.description')}</p>
        </TitledItemTemplate>
        <TitledItemTemplate
          className={styles.item}
          fullWidth={false}
          title={t('about.goals.title')}
        >
          <ul className={styles.list}>
            {GOALS.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </TitledItemTemplate>
      </div>
    </div>
  );
};
