import { create } from '@storybook/theming/create';
import logo from './hero.png';

export default create({
  base: 'dark',

  colorPrimary: 'rgba(255,37,88,1)',
  colorSecondary: 'rgba(255,37,88,1)',

  // UI
  appBg: '#292929',
  appContentBg: '#494949',
  appBorderColor: '#141414',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'rgba(255,255,255,0.9)',
  textInverseColor: 'rgba(0,0,0,0.9)',

  // Toolbar default and active colors
  barTextColor: 'rgba(255,255,255,0.9)',
  barSelectedColor: 'rgba(255,37,88,1)',
  barBg: '#494949',

  // Form colors
  inputBg: '#494949',
  inputBorder: 'silver',
  inputTextColor: 'rgba(255,255,255,0.9)',
  inputBorderRadius: 4,

  brandTitle: 'Delta | front end on demand',
  brandUrl: 'https://delta.band',
  brandImage: logo,
});
