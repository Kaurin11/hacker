import React from 'react';

import {Switch, Route, Redirect} from 'react-router-dom'

import { getNewsUrl , getCommentsUrl} from '../../utils/constants/routerConstants';
import News from './view/news/news';
import Comments from './view/comments/comments';
import Header from './view/header/header';
import Footer from './view/footer/footer';

const Dashboard = () => {

    return(
        <div>
            <Header />
            <Switch>
                <Route path={getNewsUrl()} component={News}/>
                <Route path={getCommentsUrl()} component={Comments}/>
                <Redirect to={getNewsUrl()} />
            </Switch>
            <Footer />
        </div>
    )
    
}

export default Dashboard;