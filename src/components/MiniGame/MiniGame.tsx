import { useState, useEffect, useRef } from 'react';
import ReactSlider from 'react-slider';
import { useTranslation } from 'react-i18next';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import { HOURS } from '../../assets/consts';
import { RGBButton } from '../buttons';

import styles from './MiniGame.module.scss';

interface MiniGameProps {
  onClick: () => void;
  open: boolean;
}

export const MiniGame: React.FC<MiniGameProps> = ({ onClick, open }) => {
  const [salary, setSalary] = useState<number>(500);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const { t } = useTranslation();
  const DAYS = useRef(t('days', { returnObjects: true }) as string[]).current;
  const bottomRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSlider = (salary: number) => {
    setSalary(salary);
  };
  const availableTime = (primaryIndex: number, secondaryIndex: number) => {
    if (secondaryIndex >= 9 && secondaryIndex <= 10) {
      return true;
    } else {
      return (secondaryIndex - 8) * 1000 + primaryIndex * 100 - 400 <= salary;
    }
  };
  const availableIndexes = (primaryIndex: number, secondaryIndex: number) => {
    return secondaryIndex > 8 && secondaryIndex < 19 && primaryIndex < 5;
  };
  const handleInfoClick = () => {
    setShowInfo((prevState) => !prevState);
  };

  useEffect(() => {
    if (open) {
      bottomRef!.current!.scrollIntoView({ behavior: 'smooth' });
    }
  }, [open]);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current && event.target === buttonRef.current) {
        return;
      } else if (
        infoRef.current &&
        !infoRef.current.contains(event.target as Node)
      )
        setShowInfo(false);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [infoRef.current]);

  return (
    <>
      <RGBButton
        className={`${styles.salary} ${open ? styles.opened : ''}`}
        onClick={onClick}
      >
        {open ? (
          `$${salary}`
        ) : (
          <>
            {t('miniGame.title')}
            <SportsEsportsIcon className={styles.icon} />
          </>
        )}
      </RGBButton>
      {open && (
        <RGBButton
          className={`${styles.btn} ${styles.infoBtn}`}
          onClick={handleInfoClick}
          activated={showInfo}
          ref={buttonRef}
        >
          i
        </RGBButton>
      )}
      {showInfo && open && (
        <div ref={infoRef} className={styles.info}>
          <div className={styles.itemContainer}>
            <div className={styles.green} />
            <p className={styles.description}>{t('miniGame.info.active')}</p>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.orange} />
            <p className={styles.description}>{t('miniGame.info.available')}</p>
          </div>
          <div className={styles.itemContainer}>
            <div className={styles.gray} />
            <p className={styles.description}>{t('miniGame.info.prime')}</p>
          </div>
        </div>
      )}
      {open && (
        <RGBButton
          className={`${styles.btn} ${styles.closeBtn}`}
          onClick={onClick}
        >
          X
        </RGBButton>
      )}
      {open && (
        <div ref={bottomRef} className={styles.container}>
          <ReactSlider
            orientation='vertical'
            min={500}
            max={10000}
            step={100}
            invert
            className={styles.slider}
            thumbClassName={styles.thumb}
            trackClassName='track'
            onChange={(value) => handleSlider(value)}
          />
          <ul className={styles.schedule}>
            {DAYS.map((day, primaryIndex) => (
              <li key={day} className={styles.scheduleItem}>
                <ul className={styles.time}>
                  {HOURS.map((hour, secondaryIndex) => (
                    <li
                      key={hour}
                      className={`${styles.hour} ${
                        availableIndexes(primaryIndex, secondaryIndex)
                          ? styles.available
                          : styles.unavailable
                      } ${
                        availableTime(primaryIndex, secondaryIndex)
                          ? styles.active
                          : ''
                      }`}
                    >
                      {availableIndexes(primaryIndex, secondaryIndex)
                        ? hour
                        : ''}
                    </li>
                  ))}
                </ul>
                <div className={styles.day}>{day}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
