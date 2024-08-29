import '@mui/lab/themeAugmentation';

import {
  PaletteOptions,
  ThemeOptions,
  createTheme as createMuiTheme,
} from '@mui/material/styles';
import { typography } from './typography';

const white = '#FFFFFF';

const palette: PaletteOptions = {
  mode: 'light',
  background: {
    default: '#B5B8BC',
    paper: white,
  },
  primary: {
    main: '#276CA1',
    contrastText: white,
  },
  secondary: {
    main: '#3BC9F5',
    contrastText: white,
    light: '#E4F5FA',
  },
  error: {
    light: '#FCD6D0',
    main: '#A33625',
    contrastText: white,
  },
  warning: {
    main: '#F89D31',
    contrastText: white,
  },
  info: {
    main: '#FFC834',
  },
  success: {
    main: '#7FBE79',
    contrastText: white,
  },
  text: {
    primary: '#444444',
    secondary: '#777777',
    disabled: '#CCCCCC',
  },
};

// Spacing
const spacingBaseValue = 4;
const space = (value: number) => `${value * spacingBaseValue}px`;

const createTheme = () => {
  return createMuiTheme(
    {
      space,
      palette,
      typography: typography,
      shape: {
        borderRadius: 5,
      },
    } as ThemeOptions,
    {
      name: 'default',
    },
  );
};

export default createTheme;
