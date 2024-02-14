import { useEffect, useRef, useState, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import LinkIcon from '@mui/icons-material/Link';
import InfoIcon from '@mui/icons-material/Info';

import { PORTFOLIO_DETAILS } from '../../assets/consts';

import styles from './Portfolio.module.scss';

interface PortfolioItemTranslation {
  title: string;
  subtitle: string;
  link: string;
  description: string[];
}

export const Portfolio: React.FC = () => {
  const [inView, setInView] = useState<number>(0);
  const [showInfo, setShowInfo] = useState<number | null>(null);
  const { t } = useTranslation();
  const PORTFOLIO: PortfolioItemTranslation[] = t('portfolio', {
    returnObjects: true,
  });
  const refs = useRef<HTMLElement[]>([]);

  const addRef = (element: HTMLElement | null) => {
    if (element) refs.current.push(element);
  };
  const handleInfoClick = (index: number) => {
    if (showInfo === index) setShowInfo(null);
    else setShowInfo(index);
  };
  const translateXController = (index: number) => {
    if (showInfo === index) {
      return 'translateX(0)';
    } else {
      if (index % 2 === 0) return 'translateX(-200%)';
      else return 'translateX(200%)';
    }
  };

  useEffect(() => {
    const createIntersectionObserver = (index: number) => {
      return new IntersectionObserver((entries, observer) => {
        const entry = entries[0];

        if (entry.isIntersecting) setInView(index);
      });
    };

    refs.current.forEach((ref, index) => {
      const observer = createIntersectionObserver(index);
      observer.observe(ref);
    });
  }, []);

  return (
    <div className={styles.container}>
      {PORTFOLIO.map(({ title, subtitle, link, description }, i) => (
        <div
          key={title}
          className={`${styles.project} ${i % 2 !== 0 ? styles.reverse : ''}`}
        >
          <div className={styles.description}>
            <div className={styles.subtitle}>{subtitle}</div>
            {description.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div
            ref={(element) => addRef(element)}
            className={`${styles.prevue} ${
              i % 2 === 0 ? styles.right : styles.left
            } ${inView === i ? styles.visible : ''}`}
          >
            <div className={styles.title}>
              <button
                className={styles.infoBtn}
                onClick={() => handleInfoClick(i)}
              >
                <InfoIcon className={styles.icon} />
              </button>
              <div>{title}</div>
              <a className={styles.link} href={link}>
                <LinkIcon className={styles.icon} />
              </a>
            </div>
            <ul
              className={`${styles.stack} ${
                showInfo === i ? styles.visible : ''
              }`}
            >
              {PORTFOLIO_DETAILS[title].stack.map((item, secIndex) => (
                <li
                  key={secIndex}
                  className={`${styles.stackItem} ${
                    i % 2 === 0 ? styles.right : styles.left
                  }`}
                  style={{
                    transform: translateXController(i),
                    transition: `transform ${(secIndex + 1) * 0.5}s`,
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
            <img
              src={PORTFOLIO_DETAILS[title].img}
              className={styles.img}
              alt={`Screenshot of the ${title} project`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
