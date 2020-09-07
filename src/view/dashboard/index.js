import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';

import {
  getNewsUrl,
  getCommentsUrl,
  getNewNewsUrl,
} from '../../utils/constants/routerConstants';
import News from './view/news/news';
import Comments from './view/comments/comments';
import Header from './view/header/header';
import Footer from './view/footer/footer';
import MobHeader from './view/mobHeader/mobHeader';
import NewNews from './view/newNews/newNews';

const Dashboard = () => {
  return (
    <div>
      <MobHeader />
      <Header />
      <Switch>
        <Route exact path={getNewsUrl()} component={News} />
        <Route path={`${getNewsUrl()}/:component/:id`} component={Comments} />
        {/* <Route path={getCommentsUrl()} component={Comments} /> */}
        <Route path={getNewNewsUrl()} component={NewNews} />
        <Redirect to={getNewsUrl()} />
      </Switch>
      <Footer />
    </div>
  );
};

export default Dashboard;
