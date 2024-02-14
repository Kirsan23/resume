import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Header,
  TabPanel,
  About,
  Skills,
  Footer,
  Portfolio,
} from '../../components';

import styles from './Resume.module.scss';

export const Resume = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className={styles.resume}>
      <Header />
      <TabPanel
        className={styles.tabs}
        titles={[
          t('tabPanel.about'),
          t('tabPanel.skills'),
          t('tabPanel.portfolio'),
        ]}
      >
        <About />
        <Skills />
        <Portfolio />
      </TabPanel>
      <Footer />
    </main>
  );
};
