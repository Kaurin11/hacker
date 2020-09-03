import React from 'react';

import {Route, Redirect, Switch} from 'react-router-dom';
import { getLoginUrl, getRegistrationUrl } from '../../utils/constants/routerConstants';
import Login from './login/login';
import Registration from './registration/registration';

const Auth = () =>  {

    return (
        <div>
            <Switch>
                <Route path={getLoginUrl()} component={Login}/>
                <Route path={getRegistrationUrl()} component={Registration}/>
                <Redirect to={getLoginUrl()} />
            </Switch>
        </div>

    )
}

export default Auth;