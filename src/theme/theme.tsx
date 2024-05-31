import {
  ButtonStyleTypes,
  InputStylesType,
  TypographyStylesType,
} from '@material-tailwind/react';

type ThemeProps = {
  button: ButtonStyleTypes;
  input: InputStylesType;
  typography: TypographyStylesType;
};

export const theme: ThemeProps = {
  button: {
    defaultProps: {
      color: 'green',
      className: 'text-sm font-main',
    },
  },
  input: {
    defaultProps: {
      className: '!font-main !font-semibold',
    },
  },
  typography: {
    defaultProps: {
      className: 'font-main',
    },
  },
};
