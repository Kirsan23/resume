import { ReactNode } from 'react';

type Technologies = {
  [key: string]: ReactNode;
};

export const TECHNOLOGIES: Technologies = {
  html: <abbr title='HyperText Markup Language'>HTML</abbr>,
  css: <abbr title='Cascading Style Sheets'>CSS</abbr>,
  js: <abbr title='JavaScript'>JS</abbr>,
  scss: <abbr title='Syntactically Awesome Style Sheets'>SASS</abbr>,
  react: 'React',
};