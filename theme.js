import { dark } from 'mdx-deck/themes';

export default {
  ...dark,
  font: 'Roboto, sans-serif',
  colors: {
    text: '#FFF',
    background: '#1D1F21',
    link: '#0ff',
  },
  transitionTimingFunction: 'linear',
  transitionDuration: '.5s',
  blockquote: {
    fontStyle: 'italic',
    color: '#5fb3b3',
  },
  li: {
    lineHeight: '1.25',
  },
  h1: {
    marginBottom: '50px',
  },
  h2: {
    textAlign: 'left',
  },
  h3: {
    textAlign: 'left',
  },
  h4: {
    textAlign: 'left',
  },
  pre: {
    color: '#33F9FF',
  },
  code: {
    color: '#33F9FF',
  },
};
