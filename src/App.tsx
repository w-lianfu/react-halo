import React, { FC } from 'react';

import '@commonScss';
import ThemeConfig from '@themeConfig/index';
import AppRouter from '@route/app-router';

interface IProps {}
interface IState {}

const App: FC = (props: IProps, state: IState) => {
  return (
    <ThemeConfig>
      <AppRouter />
    </ThemeConfig>
  )
}

export default App;
