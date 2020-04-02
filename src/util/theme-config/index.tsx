import React, { FC, ReactNode } from 'react';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import { blue, pink } from '@material-ui/core/colors';

import ButtonConfig from './button-config';
import PaperConfig from './paper-config';

interface IProps {
  children?: ReactNode,
}
interface IState {}

const theme = createMuiTheme({
  // 改变主题色
  palette: {
    primary: {
      light: '#000',
      main: pink['A400'],
      dark: pink['A700'],
    },
    secondary: {
      main: blue['A400'],
      dark: blue['A700'],
    },
    // primary: {
    //   light: '#000',
    //   main: purple['A400'],
    //   dark: purple['A700'],
    // },
  },
  // 改变全局 material-ui 字体
  typography: {
    fontFamily: [
      'Open Sans',
      'Lato',
      'Ubuntu',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    ...ButtonConfig,
    ...PaperConfig,
  },
});

const ThemeConfig: FC = (props: IProps, state: IState) => {

  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeConfig;
