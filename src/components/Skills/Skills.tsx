import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

import { ItemTemplate } from '../../templates';
import { HARD_SKILLS } from '../../assets/consts';
import styles from './Skills.module.scss';

export const Skills: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const { t } = useTranslation();
  const SOFT_SKILLS = t('skills.softSkills', {
    returnObjects: true,
  }) as { title: string; list: { title: string; description: string }[] };
  const LANGUAGES = t('skills.languages', { returnObjects: true }) as {
    title: string;
    list: { title: string; lvl: string }[];
  };

  const handleMouseEnter = (index: number) => {
    setHoveredItem(index);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <ItemTemplate className={styles.itemInfo} fullWidth={false}>
          <ul className={styles.list}>
            {HARD_SKILLS.map(({ name, lvl }, i) => (
              <li
                key={name}
                className={`${styles.skill} ${
                  hoveredItem !== i && hoveredItem !== null
                    ? styles.transparent
                    : ''
                }`}
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={styles.title}>{name}</div>
                <div className={`${styles.level} ${styles[lvl]}`} />
              </li>
            ))}
          </ul>
        </ItemTemplate>
        <div className={styles.itemTitle}>{t('skills.hardSkills.title')}</div>
      </div>
      <div className={`${styles.item} ${styles.item__sec}`}>
        <div className={`${styles.itemTitle} ${styles.itemTitle__sec}`}>
          {SOFT_SKILLS.title}
        </div>
        <ItemTemplate
          className={`${styles.itemInfo} ${styles.itemInfo__sec}`}
          fullWidth={false}
        >
          <ul className={styles.list}>
            {SOFT_SKILLS.list.map(({ title, description }) => (
              <li key={title} className={`${styles.skill} ${styles.soft}`}>
                <p>{title}</p>
                <CheckBoxIcon className={styles.icon} />
              </li>
            ))}
          </ul>
        </ItemTemplate>
      </div>
      <div className={styles.item}>
        <ItemTemplate
          className={`${styles.itemInfo} ${styles.itemInfo__sec}`}
          fullWidth={false}
        >
          <ul className={styles.list}>
            {LANGUAGES.list.map(({ title, lvl }) => (
              <li className={styles.language}>
                <div className={styles.skill}>{title}</div>
                <div className={styles.langLvl}>{lvl}</div>
              </li>
            ))}
          </ul>
        </ItemTemplate>
        <div className={styles.itemTitle}>{LANGUAGES.title}</div>
      </div>
    </div>
  );
};
