import { dark } from 'mdx-deck/themes';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

export default {
  ...dark,
  codeSurfer: {
    ...nightOwl,
    showNumbers: true,
  },
  css: {
    textAlign: 'center',
    fontSize: '18px',
    '@media screen and (min-width:64em)': {
      fontSize: '34px',
    },
    '& .Slide > div': {
      minWidth: '80vw',
      minHeight: '60vh',
    },
  },
  // font: '"IBM Plex Mono", monospace',
  // monospace: '"IBM Plex Mono", monospace',
  // font: '"Gloria Hallelujah", cursive',
  font: '"Annie Use Your Telescope", cursive',
  colors: {
    text: '#FFF',
    background: 'rgb(1, 22, 39)',
    link: '#0ff',
    pre: '#33F9FF',
    code: '#33F9FF',
    quote: 'rgb(127, 219, 202)',
  },
  transitionTimingFunction: 'linear',
  transitionDuration: '.5s',
  blockquote: {
    fontStyle: 'italic',
  },
  li: {
    lineHeight: '1.25',
    marginLeft: '50px',
  },
  h1: {
    marginBottom: '50px',
    letterSpacing: '0.1em',
    fontWeight: 600,
  },
  table: {
    fontSize: '50px',
    td: {
      fontSize: '46px',
      opacity: '0.8',
      paddingRight: '60px',
    },
  },
};
