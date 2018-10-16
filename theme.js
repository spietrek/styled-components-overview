import { dark } from 'mdx-deck/themes';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

const green = '#42ff71';

export default {
  ...dark,
  codeSurfer: {
    ...nightOwl,
    showNumbers: false,
  },
  font: '"IBM Plex Mono", monospace',
  monospace: '"IBM Plex Mono", monospace',
  colors: {
    text: '#FFF',
    background: '#1D1F21',
    link: '#0ff',
    pre: '#33F9FF',
    code: '#33F9FF',
    quote: '#5fb3b3',
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
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: 600,
  },
  css: {
    textAlign: 'center',
    fontSize: '16px',
    '@media screen and (min-width:64em)': {
      fontSize: '30px',
    },
    '& .Slide > div': {
      minWidth: '80vw',
      minHeight: '60vh',
    },
  },
};
