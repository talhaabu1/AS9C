import { ButtonStyleTypes } from '@material-tailwind/react';

type ThemeProps = {
  button?: ButtonStyleTypes;
};

export const theme: ThemeProps = {
  button: {
    defaultProps: {
      color: 'green',
      className: 'text-sm ',
    },
  },
};
