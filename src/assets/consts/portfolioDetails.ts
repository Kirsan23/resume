import { ReactNode } from 'react';

import { TECHNOLOGIES } from '../consts';

import stage1 from '../../assets/images/stage1.png';
import stage2 from '../../assets/images/stage2.png';

interface PortfolioDetails {
  [key: string]: {
    img: string;
    stack: ReactNode[];
  };
}

export const PORTFOLIO_DETAILS: PortfolioDetails = {
  'stage 1': {
    img: stage1,
    stack: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.js],
  },
  'stage 2': {
    img: stage2,
    stack: [TECHNOLOGIES.js, TECHNOLOGIES.scss, TECHNOLOGIES.react],
  },
};
