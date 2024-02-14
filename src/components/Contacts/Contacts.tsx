import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

import styles from './Contacts.module.scss';
import { useState } from 'react';

const CONTACTS = {
  phone: {
    name: 'Phone',
    icon: <PhoneIphoneIcon sx={{ fontSize: '20px' }} />,
    href: 'tel: +380958654034',
  },
  linkedIn: {
    name: 'LinkedIn',
    icon: <LinkedInIcon sx={{ fontSize: '20px' }} />,
    href: 'https://www.linkedin.com/in/kyrylo-berehovyi-3a260412b/',
  },
  mail: {
    name: 'Mail',
    icon: <EmailIcon sx={{ fontSize: '20px' }} />,
    href: 'mailto: beregovi.k@gamil.com',
  },
  telegram: {
    name: 'Telegram',
    icon: <TelegramIcon sx={{ fontSize: '20px' }} />,
    href: 'https://t.me/Kirill_Beregovoi',
  },
  gitHub: {
    name: 'GitHub',
    icon: <GitHubIcon sx={{ fontSize: '20px' }} />,
    href: 'https://github.com/Kirsan23',
  },
};

export const Contacts: React.FC = () => {
  return (
    <div className={styles.container}>
      <ul className={`${styles.list}`}>
        {Object.values(CONTACTS).map(({ name, icon, href }) => (
          <li key={name} className={styles.listItem}>
            <a className={styles.link} href={href}>
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
