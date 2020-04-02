import { pink, blue, purple, grey } from '@material-ui/core/colors';

interface IConfig {
  MuiButton: object,
}

const ButtonConfig: IConfig = {
  MuiButton: {
    root: {
      padding: '12px 16px',
      minWidth: '160px',
      borderRadius: 0,
      lineHeight: 1,
      fontSize: '14px',

      '&.Mui-disabled': {
        color: 'rgba(0, 0, 0, 0.6)',
      },
    },
    contained: {
      color: grey[50],
      backgroundColor: purple['A400'],
      boxShadow: `0px 2px 4px -1px rgba(0, 0, 0, 0.2),
        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12)`,

      '&:hover': {
        backgroundColor: purple['A700'],
      },
      '&.Mui-disabled': {
        color: 'rgba(0, 0, 0, 0.6)',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      },
    },
    label: {
      textTransform: 'none',
    },
    outlined: {
      padding: '11px 15px',
      color: purple['A400'],
      border: `1px solid ${purple['A400']}`,
    },
    outlinedPrimary: {
      color: pink['A400'],
      border: `1px solid ${pink['A400']}`,
    },
    outlinedSecondary: {
      color: blue['A400'],
      border: `1px solid ${blue['A400']}`,
    },
  },

};

export default ButtonConfig;
