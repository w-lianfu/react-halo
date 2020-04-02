import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '@comp/home';

interface IProps {}
interface IState {}

const AppRouter: FC = (props: IProps, state: IState) => {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default AppRouter;
