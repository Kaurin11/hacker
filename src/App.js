import React from 'react';

import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';

import { getAuthUrl, getDashboardUrl } from './utils/constants/routerConstants';
import Auth from './view/auth';
import Dashboard from './view/dashboard';

import './App.css';


function App() {
  return (

    <div> 
      <BrowserRouter>
        <Switch>
          <Route path={getAuthUrl()} component={Auth}/>
          <Route path={getDashboardUrl()} component={Dashboard}/>
          <Redirect to={getAuthUrl()} />
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
