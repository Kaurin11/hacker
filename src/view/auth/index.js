import React from 'react';

import { Route, Redirect, Switch } from 'react-router-dom';
import { getLoginUrl } from '../../utils/constants/routerConstants';
import Login from './login/login';

const Auth = () => {
  return (
    <div>
      <Switch>
        <Route path={getLoginUrl()} component={Login} />

        <Redirect to={getLoginUrl()} />
      </Switch>
    </div>
  );
};

export default Auth;
